import { Cliente } from './../../common/cliente';
import { Trust } from 'src/app/common/trust';
import { Beneficiary } from './../../common/beneficiary';
import { Component, OnInit } from '@angular/core';
import { BeneficiaryService } from 'src/app/services/beneficiary.service';
import { TrustService } from 'src/app/services/trust.service';
import { Input } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-vista-listar-clientes',
  templateUrl: './vista-listar-clientes.component.html',
  styleUrls: ['./vista-listar-clientes.component.css'],
})
export class VistaListarClientesComponent implements OnInit {
  @Input('ELEMENT_DATA') ELEMENT_DATA!: Cliente[];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  typeClients: typeClient[] = [
    { idType: 1, type: 'Fiado' },
    { idType: 2, type: 'Beneficiario' },
  ];
  selected: number = 1;
  dataSource = new MatTableDataSource<Cliente>(this.ELEMENT_DATA);
  beneficiaries: Beneficiary[];
  trusts: Trust[];
  mensaje: string;
  displayedColumns: string[];
  isEditing: boolean;
  filterSelecteds: string;
  columnasTrust: string[] = [
    'avatar',
    'id_person',
    'id_trust',
    'cui',
    'nit',
    'first_name',
    'second_name',
    'first_surname',
    'second_surname',
    'rol',
    'email',
    'date_of_birth',
    'sexo',
    'department',
    'municipality',
    'business_name',
    'constitution_date',
    'commercial_patent_number',
    'disabled',
  ];

  columnasBeneficiary: string[] = [
    'avatar',
    'id_person',
    'id_beneficiary',
    'cui',
    'nit',
    'first_name',
    'second_name',
    'first_surname',
    'second_surname',
    'rol',
    'email',
    'date_of_birth',
    'sexo',
    'department',
    'municipality',
    'business_name',
    'constitution_date',
    'commercial_patent_number',
    'disabled',
  ];

  columnasFiltro: ColumnasEs[] = [
    {name_column: 'id_person', val_column: 'ID Persona'},
    {name_column: 'id_benficiary', val_column: 'ID Beneficiario'},
    {name_column: 'id_trust', val_column: 'ID Fiado'},
    {name_column: 'cui', val_column: 'CUI'},
    {name_column: 'nit', val_column: 'NIT'},
    {name_column: 'first_name', val_column: 'Primer Nombre'},
    {name_column: 'second_name', val_column: 'Segundo Nombre'},
    {name_column: 'first_surname', val_column: 'Primer Apellido'},
    {name_column: 'second_surname', val_column: 'Segundo Nombre'},
    {name_column: 'rol', val_column: 'Rol'},
    {name_column: 'email', val_column: 'Correo Electronico'},
    {name_column: 'sexo', val_column: 'Sexo'},
    {name_column: 'department', val_column: 'Departamento'},
    {name_column: 'municipality', val_column: 'Municipalidad'},
    {name_column: 'business_name', val_column: 'Nombre de negocio'},
    {name_column: 'commercial_patent_number', val_column: 'Numero de patente comercial'}

  ]

  constructor(
    private beneficiaryService: BeneficiaryService,
    private trustService: TrustService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.fillTableClient();
  }

  fillTableClient() {
    switch (this.selected) {
      case 1:
        this.trustService.getTrusts().subscribe((data) => {
          this.dataSource.data = data;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.displayedColumns = this.columnasTrust;
        });
        break;
      case 2:
        this.beneficiaryService.getBeneficiaries().subscribe((data) => {
          this.dataSource.data = data;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.displayedColumns = this.columnasBeneficiary;
        });
      default:
        break;
    }
  }

  onChange() {
    this.fillTableClient();
  }

  // evento para deshabilitar a un cliente
  onDelete(element: any) {
    let mensaje: string;
    element.disabled = !element.disabled;
    if (!element.disabled) {
      mensaje = 'Habilitado Exitosamente';
    } else {
      mensaje = 'Deshabilitado Exitosamente';
    }
    switch (this.selected) {
      case 1:
        this.trustService.deleteTrust(element.id_trust).subscribe((res) => {
          this.mensaje = res;
          this.openSnackBar(mensaje, '');
        });
        break;
      case 2:
        this.beneficiaryService
          .deleteBeneficiary(element.id_beneficiary)
          .subscribe((res) => {
            this.mensaje = res;
            this.openSnackBar(mensaje, '');
          });

      default:
        break;
    }
  }

  applyFilter(event) {
    this.dataSource.filterPredicate = (data, filter: string): boolean => {
      if (data[this.filterSelecteds] !== null) {
        return data[this.filterSelecteds].toString().toLowerCase().includes(filter);
      }
    }
    this.dataSource.filter = event.trim().toLocaleLowerCase();
  }

  openSnackBar(mensaje: string, action: string) {
    this.snackBar
      .open(mensaje, action, {
        duration: 1500,
      })
      .onAction()
      .subscribe(() => {
        window.location.reload();
      });
  }
}

interface typeClient {
  idType: number;
  type: string;
}


interface ColumnasEs{
  name_column: string;
  val_column: string;
}


