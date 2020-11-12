import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert2';

import { SolicitudService } from 'src/app/services/solicitud.service';
import { BouquetService } from 'src/app/services/bouquet.service';
import { BouquetTypeService } from 'src/app/services/bouquet-type.service';
import { Bouquet } from 'src/app/common/bouquet';
import { BouquetType } from 'src/app/common/bouquet-type';
import { Solicitud } from 'src/app/common/solicitud';
import { MessageApi } from 'src/app/common/message-api';
import { TrustService } from 'src/app/services/trust.service';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { AgentService } from 'src/app/services/agent.service';
import { UserSystemService } from 'src/app/services/user-system.service';
import { SibPeriodService } from 'src/app/services/sib-period.service';

// interface para poder mostrar datos en el autocomplete
export interface ObjectToFilter {
  id: number;
  name: string;
}

// interface para poder separar los clientees entre particular y juridico
export interface TrustGroup {
  type_person: string;
  objectToFilter: ObjectToFilter[];
}


@Component({
  selector: 'app-solicitud-polize-edit',
  templateUrl: './solicitud-polize-edit.component.html',
  styleUrls: ['./solicitud-polize-edit.component.css']
})
export class SolicitudPolizeEditComponent implements OnInit {
  formDataPollicy: FormGroup;
  data: Solicitud;

  // arreglos para almacenar en memoria los clientes y poderlos filtrar
  trustGroups: TrustGroup[] = [];
  trustGroupOptions: Observable<TrustGroup[]>;

  // arreglos para almacenar en memoria los agentes y poderlos filtrar
  agents: ObjectToFilter[] = [];
  agentOptions: Observable<ObjectToFilter[]>;

  // arreglos para almacenar en memoria los usuarios y poderlos filtrar
  users: ObjectToFilter[] = [];
  userOptions: Observable<ObjectToFilter[]>;

  // arreglos para almacenar en memoria las fechas de emision y poderlas filtrar
  sibPeriod: ObjectToFilter[] = [];
  sibPeriodOptions: Observable<ObjectToFilter[]>;

  // arreglos para almacenar el memoria los ramos y sus tipos
  bouquets: Bouquet[] = [];
  bouquetsType: BouquetType[] = [];
  // variable para saber que ramo esta seleccionado
  selectedBouquet: number;

  loaded: Boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _formBuilder: FormBuilder,
    private _solicitudService: SolicitudService,
    private _trustService: TrustService,
    private _agentService: AgentService,
    private _userService: UserSystemService,
    private _sibPeriodService: SibPeriodService,
    private _bouquetService: BouquetService,
    private _bouquetTypeService: BouquetTypeService,
  ) { }

   ngOnInit(){
    this.initForm();
    if (this.activatedRoute.snapshot.paramMap.has('id')) {
      let id = this.activatedRoute.snapshot.paramMap.get('id');
      
      // llena con datos a los select y autocompletes
      this.loadCatalogs();
      
      //sustituir después por la api correcta
      this._solicitudService.getSolicitudes().subscribe((response) => {
        if(response.find((item) => item.id_policy == parseInt(id)) === undefined){
          this.router.navigateByUrl('solicitud-poliza');
        }else{
          this.data = response.find((item) => item.id_policy == parseInt(id));
          this.selectedBouquet = this.data.id_bouquet;
          this.onChange();
          this.formDataPollicy = this._formBuilder.group({
            id_trust: [this.data.id_trust, Validators.required],
            id_agent: [this.data.id_agent, Validators.required],
            id_user: [this.data.id_user, Validators.required],
            id_bouquet: [this.data.id_bouquet, Validators.required],
            id_bouquet_type: [this.data.id_bouquet_type, Validators.required],
            id_sib_period: [this.data.id_sib_period, Validators.required],
            prima: [this.data.prima, Validators.required],
            contract_amount: [this.data.contract_amount, Validators.required],
            insured_amount: [this.data.insured_amount, Validators.required],
            iva: [this.data.iva, Validators.required],
            emission_rights: [this.data.emission_rights, Validators.required],
            financing_surcharges: [this.data.financing_surcharges, Validators.required],
            validity: [this.data.validity, Validators.required]
          })
        }
      });

      //Api correcta
      // this._solicitudService.getSolicitud(id).subscribe(response => {
      //     if(response.find((item) => item.id_policy == parseInt(id)) === undefined){
      //       this.router.navigateByUrl('solicitud-poliza');
      //     }else{
      //       this.data = response.find((item) => item.id_policy == parseInt(id));
      //     }
      // });

    }else{
      this.router.navigateByUrl('solicitud-poliza');
    }
  }

  loadCatalogs(){
    // llena dos arreglos de clientes uno para particular y uno para juridico
    this._trustService.getTrusts().subscribe(
      res => {
        this.trustGroups.push({
          type_person: 'Particular',
          objectToFilter: res.filter(t => t.id_type_person === 1006).map(t => ({ id: t.id_trust, name: t.first_name }))
        });
        this.trustGroups.push({
          type_person: 'Juridico',
          objectToFilter: res.filter(t => t.id_type_person === 1007).map(t => ({ id: t.id_trust, name: t.business_name }))
        });

        // inicia el filtro para el autocomplete de clientes
        this.trustGroupOptions = this.formDataPollicy.get('id_trust')!.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filterGroup(value))
        );
      }
    );

     // llena el arreglo de agentes
     this._agentService.getAgents().subscribe(
      res => {
        this.agents = res.map(a => ({ id: a.id_agent, name: a.first_name }));
        // inicia el filtro para el autocomplete de agentes
        this.agentOptions = this.formDataPollicy.get('id_agent')!.valueChanges
          .pipe(
            startWith(''),
            map(value => this._filter(this.agents, value))
        );
      }
    );

    // llena el arreglo de usuarios 
    this._userService.getUserSystem().subscribe(
      res => {
        this.users = res.map(u => ({ id: u.id_user, name: u.first_name }));
        // inicia el filtro para el autocomplete de usuario
        this.userOptions = this.formDataPollicy.get('id_user')!.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(this.users, value))
        );
      }
    );

    // llena el arreglo de periodos de emision
    this._sibPeriodService.getSibsPeriod().subscribe(
      res => {
        this.sibPeriod = res.map(s => ({ id: s.id_sib_period, name: new Date(s.end_date).toLocaleDateString() }));
        // inicia el filtro para el autocomplete de periodos de emision
        this.sibPeriodOptions = this.formDataPollicy.get('id_sib_period')!.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(this.sibPeriod, value))
        );
      }
    );


    this._bouquetService.getBouquets().subscribe(res => this.bouquets = res);
  }

  onChange(): void {
    // llena el arreglo de tipos de ramos dependiendo del ramo que se seleccione
    this._bouquetTypeService.getBouquetsByType(this.selectedBouquet).subscribe(res => this.bouquetsType = res);
  }

  initForm() {
    this.formDataPollicy = this._formBuilder.group({
      id_trust: ['', Validators.required],
      id_agent: ['', Validators.required],
      id_user: ['', Validators.required],
      id_bouquet: [this.selectedBouquet, Validators.required],
      id_bouquet_type: ['', Validators.required],
      id_sib_period: ['', Validators.required],
      prima: ['', Validators.required],
      contract_amount: ['', Validators.required],
      insured_amount: ['', Validators.required],
      iva: ['', Validators.required],
      emission_rights: ['', Validators.required],
      financing_surcharges: ['', Validators.required],
      validity: ['', Validators.required]
    })
  }

  // filtra por grupo los clientes
  private _filterGroup(value: string): TrustGroup[] {
    if (value) {
      return this.trustGroups
        .map(group => ({ type_person: group.type_person, objectToFilter: this._filter(group.objectToFilter, value) }))
        .filter(group => group.objectToFilter.length > 0);
    }
    return this.trustGroups;
  }

  // filtra el objecto que coincida con un valor
  private _filter = (opt: ObjectToFilter[], value: string): ObjectToFilter[] => {
    const filterValue = (value) ? value.toString().toLowerCase() : '';
    return opt.filter(item => item.name.toLowerCase().indexOf(filterValue) === 0);
  };

  onCancel(): void{
    this.router.navigateByUrl('solicitud-poliza');
  }

  onSubmit(): void {
    if (this.formDataPollicy.valid) {
      const solicitud: Solicitud = new Solicitud();
      solicitud.id_trust = this.formDataPollicy.get('id_trust').value;
      solicitud.id_agent = this.formDataPollicy.get('id_agent').value;
      solicitud.id_user = this.formDataPollicy.get('id_user').value;
      solicitud.id_bouquet = this.formDataPollicy.get('id_bouquet').value;
      solicitud.id_bouquet_type = this.formDataPollicy.get('id_bouquet_type').value;
      solicitud.id_sib_period = this.formDataPollicy.get('id_sib_period').value;
      solicitud.prima = this.formDataPollicy.get('prima').value;
      solicitud.contract_amount = this.formDataPollicy.get('contract_amount').value;
      solicitud.insured_amount = this.formDataPollicy.get('insured_amount').value;
      solicitud.iva = this.formDataPollicy.get('iva').value;
      solicitud.emission_rights = this.formDataPollicy.get('emission_rights').value;
      solicitud.financing_surcharges = this.formDataPollicy.get('financing_surcharges').value;
      solicitud.validity = this.formDataPollicy.get('validity').value;

      this._solicitudService.updateSolicitud(solicitud).subscribe((message) => {
        if(message === 'UPDATED SUCCESSFULLY'){
          swal.fire(
            'Actualizado!',
            'El registro ha sido actualizado con éxito!.',
            'success'
          )
        }
      })
    }
  }
}
