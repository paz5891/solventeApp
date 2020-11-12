import { Component, OnInit, Input } from '@angular/core';
import { UserSystem } from 'src/app/common/user-system';
import { UserSystemService } from 'src/app/services/user-system.service';
import { BeneficiaryService } from './../../services/beneficiary.service';
import { Beneficiary } from './../../common/beneficiary';
import { Person } from 'src/app/common/person';
import { Trust } from 'src/app/common/trust';
import { TypePerson } from 'src/app/common/type-person';
import { PersonService } from 'src/app/services/person.service';
import { TrustService } from 'src/app/services/trust.service';
import { TypePersonService } from 'src/app/services/type-person.service';
import { ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css'],
})
export class ListPersonComponent implements OnInit {
  @Input('ELEMENT_DATA') ELEMENT_DATA!: Person[];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  typePersons: TypePerson[] = [];
  persons = new MatTableDataSource<Person>(this.ELEMENT_DATA);
  selected: number;
  mensaje: string;
  filterSelected: string;

  displayedColumns: string[];
  columnasParticular: string[] = [
    'avatar',
    'id_person',
    'cui',
    'nit',
    'first_name',
    'second_name',
    'first_surname',
    'second_surname',
    'rol',
    'email',
    'sexo',
    'date_of_birth',
    'department',
    'municipality',
    'convertir',
    'edit',
    'disabled',
  ];

  columnasCorredor: string[] = [
    'avatar',
    'id_person',
    'cui',
    'nit',
    'first_name',
    'second_name',
    'first_surname',
    'second_surname',
    'rol',
    'email',
    'sexo',
    'date_of_birth',
    'department',
    'municipality',
    'business_name',
    'comercial_activity',
    'commercial_patent_number',
    'constitution_date',
    'convertir',
    'edit',
    'disabled',
  ];

  columnasJuridico: string[] = [
    'id_person',
    'nit',
    'business_name',
    'constitution_date',
    'commercial_patent_number',
    'comercial_activity',
    'convertir',
    'edit',
    'disabled',
  ];

  constructor(
    private servicePerson: PersonService,
    private trustService: TrustService,
    private typePersonService: TypePersonService,
    private beneficiaryService: BeneficiaryService,
    private userSystemService: UserSystemService,
    private snackBar: MatSnackBar
  ) {}

  createTrust(id_person: number) {
    const trust: Trust = new Trust();
    trust.id_person = id_person;
    this.trustService.createTrust(trust).subscribe((res) => {
      this.mensaje = res;
      this.openSnackBar();
    });
  }

  createBeneficiary(id_person: number) {
    const beneficiary: Beneficiary = new Beneficiary();
    beneficiary.id_person = id_person;
    this.beneficiaryService.createBeneficiary(beneficiary).subscribe((res) => {
      this.mensaje = res;
      this.openSnackBar();
    });
  }

  ngOnInit(): void {
    this.persons.paginator = this.paginator;
    this.persons.sort = this.sort;
    this.fillTypePersons();
  }

  fillTypePersons() {
    this.typePersonService.getTypePerson().subscribe((data) => {
      this.typePersons = data;
      this.selected = this.typePersons[0].id_type_person;
      this.fillTablePerson();
    });
  }

  fillTablePerson() {
    this.servicePerson.getPersonsByType(this.selected).subscribe((data) => {
      this.persons.data = data;
      if (this.selected == 1006) {
        this.displayedColumns = this.columnasParticular;
      } else if (this.selected == 1007) {
        this.displayedColumns = this.columnasJuridico;
      } else if (this.selected == 1008) {
        this.displayedColumns = this.columnasCorredor;
      }
    });
  }

  onChange() {
    this.fillTablePerson();
  }

  // Evento para deshabilitar a una persona
  onDelete(person: Person) {
    person.disabled = !person.disabled;
    if (!person.disabled) {
      this.mensaje = 'Habilitado Exitosamente';
    } else {
      this.mensaje = 'Deshabilitado Exitosamente';
    }
    this.servicePerson.deletePerson(person.id_person).subscribe(
      () => {
        this.openSnackBar();
      },
      (error) => {
        this.mensaje = 'Algo salio mal';
        this.openSnackBar();
        console.log(error);
      }
    );
  }

  onUpdate(person: Person) {
    console.log(person);
  }

  // Evento para convertir a fiado
  onConvertTrust(person: Person) {
    const trust: Trust = new Trust();
    trust.id_person = person.id_person;
    this.trustService.createTrust(trust).subscribe((res) => {
      this.mensaje = res;
      this.openSnackBar();
    });
  }

  // evento para convertir a beneficiario
  onConvertBeneficiary(person: Person) {
    const beneficiary: Beneficiary = new Beneficiary();
    beneficiary.id_person = person.id_person;
    this.beneficiaryService.createBeneficiary(beneficiary).subscribe((res) => {
      this.mensaje = res;
      this.openSnackBar();
    });
  }

  // evento para convertir a usuario
  onConvertUser(person: Person) {
    const userSystem: UserSystem = {
      id_user: null,
      rol: null,
      username: null,
      id_person: person.id_person,
      department: null,
      municipality: null,
      nit: null,
      cui: null,
      first_name: person.first_name,
      second_name: person.second_name,
      first_surname: person.first_surname,
      second_surname: person.second_surname,
      date_of_birth: null,
      sexo: null,
      email: null,
      avatar: null,
      disabled: null,
    };
    this.userSystemService.createUserSystem(userSystem).subscribe(
      () => {
        this.mensaje = 'Usuario creado exitosamente!';
        this.openSnackBar();
      },
      (error) => {
        this.mensaje = 'Algo salio mal';
        this.openSnackBar();
        console.log(error);
      }
    );
  }

  applyFilter(event: string) {
    this.persons.filterPredicate = (data, filter: string): boolean => {
      if (data[this.selected] !== null) {
        return data[this.filterSelected]
          .toString()
          .toLowerCase()
          .includes(filter);
      }
    };
    this.persons.filter = event.trim().toLocaleLowerCase();
  }

  openSnackBar() {
    this.snackBar.open(this.mensaje, '', {
      duration: 2000,
    });
  }
}
