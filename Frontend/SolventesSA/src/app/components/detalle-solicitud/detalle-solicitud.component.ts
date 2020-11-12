import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AttachmentCatalogPolicy } from 'src/app/common/attachment-catalog-policy';
import { Bouquet } from 'src/app/common/bouquet';
import { BouquetType } from 'src/app/common/bouquet-type';
import { SolicitudPost } from 'src/app/common/solicitud-post';
import { AgentService } from 'src/app/services/agent.service';
import { AttachmentCatalogPolicyService } from 'src/app/services/attachment-catalog-policy.service';
import { BeneficiaryService } from 'src/app/services/beneficiary.service';
import { BouquetTypeService } from 'src/app/services/bouquet-type.service';
import { BouquetService } from 'src/app/services/bouquet.service';
import { SibPeriodService } from 'src/app/services/sib-period.service';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { TrustService } from 'src/app/services/trust.service';
import { UserSystemService } from 'src/app/services/user-system.service';

// interface para poder separar los clientees entre particular y juridico
export interface TrustGroup {
  type_person: string;
  objectToFilter: ObjectToFilter[];
}

// interface para poder mostrar datos en el autocomplete
export interface ObjectToFilter {
  id: number;
  name: string;
}

@Component({
  selector: 'app-detalle-solicitud',
  templateUrl: './detalle-solicitud.component.html',
  styleUrls: ['./detalle-solicitud.component.css']
})
export class DetalleSolicitudComponent implements OnInit {
  formDataPollicy: FormGroup;

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

  // arreglos para almacenar en memoria los beneficiarios y poderlos filtrar
  beneficiaries: ObjectToFilter[] = [];
  // en este caso un arreglo de arreglos ya que son varios autocomplete para beneficiario
  beneficiariesOptions: Observable<ObjectToFilter[]>[] = [];

  // arreglos para almacenar el memoria los ramos y sus tipos
  bouquets: Bouquet[] = [];
  bouquetsType: BouquetType[] = [];
  // variable para saber que ramo esta seleccionado
  selectedBouquet: number;

  // arreglo para almacenar en memoria los tipos de documentos para la solicitud
  attachmentsCatalogPolicy: AttachmentCatalogPolicy[] = [];

  // arreglo para almacenar los archivos que se subiran
  filesToUpload: File[] = [];
  filesGood: boolean = false;

  onSubmitDisable = false;
  valueProgress: number = 0;
  constructor(
    private _formBuilder: FormBuilder,
    private _trustService: TrustService,
    private _agentService: AgentService,
    private _userService: UserSystemService,
    private _bouquetService: BouquetService,
    private _bouquetTypeService: BouquetTypeService,
    private _sibPeriodService: SibPeriodService,
    private _beneficiaryService: BeneficiaryService,
    private _attachmentCatalogPolicyService: AttachmentCatalogPolicyService,
    private _solicitudService: SolicitudService,
    private _snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit() {
    // crea dinamicamente el formulario
    this.builForms();
    // llena con datos a los autocomplete y los select
    this.fillAutoComplete();
    // inicia los filtros para los autocomplete
    this.initFilterAutoComplete();
  }

  builForms() {
    this.formDataPollicy = this._formBuilder.group({
      formArray: this._formBuilder.array([
        this._formBuilder.group({
          id_trust: ['', Validators.required],
          id_agent: ['', Validators.required],
          id_user: ['', Validators.required],
          id_bouquet: ['', Validators.required],
          id_bouquet_type: ['', Validators.required],
          id_sib_period: ['', Validators.required],
          prima: ['', Validators.required],
          contract_amount: ['', Validators.required],
          insured_amount: ['', Validators.required],
          iva: ['', Validators.required],
          emission_rights: ['', Validators.required],
          financing_surcharges: ['', Validators.required],
          validity: ['', Validators.required]
        }),
        this._formBuilder.group({
          beneficiary: this._formBuilder.array([])
        }),
        this._formBuilder.group({
          attachment_policy: this._formBuilder.array([])
        })
      ])
    });
    // agrega un campo de beneficiario para que el usuario ingrese por lo menos un beneficiario
    this.agregarCampoBeneficiario();
    // agrega un campo para los documentos para que el usuario ingrese por lo menos un documento
    this.agregarCampoDocumento();
  }

  fillAutoComplete() {
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
      }
    );
    // llena el arreglo de agentes
    this._agentService.getAgents().subscribe(
      res => {
        this.agents = res.map(a => ({ id: a.id_agent, name: a.first_name }));
      }
    );
    // llena el arreglo de usuarios 
    this._userService.getUserSystem().subscribe(
      res => {
        this.users = res.map(u => ({ id: u.id_user, name: u.first_name }));
      }
    );
    // llena el arreglo de periodos de emision
    this._sibPeriodService.getSibsPeriod().subscribe(
      res => {
        this.sibPeriod = res.map(s => ({ id: s.id_sib_period, name: new Date(s.end_date).toLocaleDateString() }));
      }
    );
    // llena el arreglo de beneficiarios
    this._beneficiaryService.getBeneficiaries().subscribe(
      res => {
        this.beneficiaries = res.map(b => ({ id: b.id_beneficiary, name: b.first_name }));
      }
    );
    // llena el arreglo de ramos
    this._bouquetService.getBouquets().subscribe(res => this.bouquets = res);
    // llena el arreglo de tipos de documentos
    this._attachmentCatalogPolicyService.getAttachmentsCatalogPolicy().subscribe(res => this.attachmentsCatalogPolicy = res);
  }

  initFilterAutoComplete() {
    // inicia el filtro para el autocomplete de clientes
    this.trustGroupOptions = this.formArray.get([0]).get('id_trust')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterGroup(value))
      );
    // inicia el filtro para el autocomplete de agentes
    this.agentOptions = this.formArray.get([0]).get('id_agent')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(this.agents, value))
      );
    // inicia el filtro para el autocomplete de usuario
    this.userOptions = this.formArray.get([0]).get('id_user')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(this.users, value))
      );
    // inicia el filtro para el autocomplete de periodos de emision
    this.sibPeriodOptions = this.formArray.get([0]).get('id_sib_period')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(this.sibPeriod, value))
      );
  }

  onChange(): void {
    // llena el arreglo de tipos de ramos dependiendo del ramo que se seleccione
    this._bouquetTypeService.getBouquetsByType(this.selectedBouquet).subscribe(res => this.bouquetsType = res);
  }

  agregarCampoBeneficiario(): void {
    // crea un nuevo campo autocomplete para beneficiario
    this.beneficiary.push(this._formBuilder.group({
      id_beneficiary: ['', Validators.required]
    }));
    // inicia el filtro para este nuevo autocomplete de beneficiario
    this.beneficiariesOptions[this.beneficiary.length - 1] = this.beneficiary.at(this.beneficiary.length - 1).get('id_beneficiary')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(this.beneficiaries.filter(b => b.name != null), value))
      );
  }

  eliminarCampoBeneficiario(index: number): void {
    // elimina un campo autocomplete de beneficiario
    this.beneficiary.removeAt(index);
    // elimina el filtro de este autocomplete
    this.beneficiariesOptions.splice(index, 1);
  }

  agregarCampoDocumento(): void {
    // crea un nuevo formulario con tres campos para los documentos
    this.attachment_policy.push(this._formBuilder.group(
      {
        id_attachment_catalog_policy: ['', Validators.required],
        attachment: [{ value: '', disabled: true }, Validators.required],
        description: ['']
      }
    ));
  }

  eliminarCampoDocumento(index: number): void {
    // elimina un formulario de documentos
    this.attachment_policy.removeAt(index);
    // elimina un archivo de la lista de archivos a subir
    this.filesToUpload.splice(index, 1);
  }

  uploadFile(files: FileList, i: number) {
    // si selecciono al menos un archivo
    if (files.length > 0) {
      const max_size = 10485760; //10MB = (10*1024*1024)
      const allowed_types = ['image/png', 'image/jpeg', 'application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/msword'];

      let file: File = files.item(0);

      // si el archivo seleccionado es mayor al tamaño de archivo permitido
      if (file.size > max_size) {
        this.attachment_policy.at(i).get('attachment').setValue('El arcivo debe ser menor a 10 MB');
        this.filesGood = false;
        return false;
      }
      // si el tipo de archivo no se encuentra en los tipos de archivo permitidos
      if (!(allowed_types.includes(file.type))) {
        this.attachment_policy.at(i).get('attachment').setValue('Solo se permiten formatos ( jpeg | png | pdf | doc | docx)');
        this.filesGood = false;
        return false;
      }
      // agrega el archivo seleccionado a la lista de archivos a subir
      this.filesToUpload.push(file);
      // agrega el nombre del archivo al campo attachment
      this.attachment_policy.at(i).get('attachment').setValue(file.name);
      this.filesGood = true;
    } else {
      // si ya habia un archivo en esta posicion
      if (this.filesToUpload[i] !== null) {
        // elimina el archivo de esta posicion
        this.filesToUpload.splice(i, 1);
      }
      this.attachment_policy.at(i).get('attachment').setValue('El archivo es requerido');
      this.filesGood = false;
    }
  }

  onSubmit(): void {
    // si se llenaron los campos requeridos
    if (this.formDataPollicy.valid && this.filesGood) {
      // se crea un objeto solicitud para almacenar e identificar cada uno de los campos del formulario
      const solicitud: SolicitudPost = new SolicitudPost();
      solicitud.id_trust = this.formArray.get([0]).get('id_trust').value;
      solicitud.id_agent = this.formArray.get([0]).get('id_agent').value;
      solicitud.id_user = this.formArray.get([0]).get('id_user').value;
      solicitud.id_bouquet = this.formArray.get([0]).get('id_bouquet').value;
      solicitud.id_bouquet_type = this.formArray.get([0]).get('id_bouquet_type').value;
      solicitud.id_sib_period = this.formArray.get([0]).get('id_sib_period').value;
      solicitud.prima = this.formArray.get([0]).get('prima').value;
      solicitud.contract_amount = this.formArray.get([0]).get('contract_amount').value;
      solicitud.insured_amount = this.formArray.get([0]).get('insured_amount').value;
      solicitud.iva = this.formArray.get([0]).get('iva').value;
      solicitud.emission_rights = this.formArray.get([0]).get('emission_rights').value;
      solicitud.financing_surcharges = this.formArray.get([0]).get('financing_surcharges').value;
      solicitud.validity = this.formArray.get([0]).get('validity').value;
      this.beneficiary.controls.forEach(c => solicitud.beneficiary.push(c.value));
      this.attachment_policy.getRawValue().forEach(v => solicitud.attachment_policy.push(v));

      // se crea un form data para ser enviado a la API
      const formData: FormData = new FormData();
      // se agrega el objeto solicitud convertido en JSON al form data
      formData.append('body', JSON.stringify(solicitud));

      // se toman los archivos que estaban almacenados en la lista de archivos a subir y se agregan al form data
      for (let index = 0; index < this.filesToUpload.length; index++) {
        const file = this.filesToUpload[index];
        formData.append('attachment_policy', file, file.name);
      }

      this.onSubmitDisable = true;
      // se llama al servicio que llamara a la API y se le pasa el form data para que este lo envie a la API
      this._solicitudService.createSolicitud(formData).subscribe((event: HttpEvent<any>) => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            this.valueProgress = Math.round(event.loaded / event.total * 100);
            break;
          case HttpEventType.Response:
            this._snackBar.open('¡Solicitud creada exitosamente!', '', { duration: 1500 });
            setTimeout(() => {
              this.valueProgress = 0;
              this.router.navigateByUrl('/lista-solicitudes');
            }, 1500);
        }
      });
    }
  }

  // obtiene el formArray que contiene el grupo de formularios
  public get formArray(): FormArray {
    return this.formDataPollicy.get('formArray') as FormArray;
  }

  // obtiene el formArray que contiene el grupo de formularios con los campos de beneficiario
  public get beneficiary(): FormArray {
    return this.formArray.get([1]).get('beneficiary') as FormArray;
  }

  // obtiene el formArray que contiene el grupo de formularios con los campos de documentos
  public get attachment_policy(): FormArray {
    return this.formArray.get([2]).get('attachment_policy') as FormArray;
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
}