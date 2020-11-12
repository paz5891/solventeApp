import { UserSystem } from 'src/app/common/user-system';
import { UserSystemService } from 'src/app/services/user-system.service';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-vista-listar-usuarios',
  templateUrl: './vista-listar-usuarios.component.html',
  styleUrls: ['./vista-listar-usuarios.component.css']
})
export class VistaListarUsuariosComponent implements OnInit {
  @Input('ELEMENT_DATA')  ELEMENT_DATA!:  UserSystem[];
  @ViewChild(MatPaginator, {static:true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static:true}) sort: MatSort;

  displayedColumns: string[] = ['avatar', 'id_user','rol', 'username','id_person','department',
  'municipality','nit', 'cui','first_name', 'second_name','first_surname', 'second_surname',
  'date_of_birth', 'sexo', 'email', 'disabled'];
  dataSource = new MatTableDataSource<UserSystem>(this.ELEMENT_DATA);
  id_userFilter = new FormControl();
  rolFilter = new FormControl();
  rolOptions: string[] = ['Administrador', 'Analista', 'Corredor','Cobrador'];
  usernameFilter = new FormControl();
  id_personFilter = new FormControl();
  departamentoFilter = new FormControl();
  departamentOptions: string[];
  municipalityFilter = new FormControl();
  nitFilter = new FormControl();
  cuiFilter = new FormControl();
  first_nameFilter = new FormControl();
  second_nameFilter = new FormControl();
  first_surnameFilter = new FormControl();
  second_surnameFilter = new FormControl();
  date_of_birthFilter = new FormControl();
  sexoFilter = new FormControl();
  sexoOptions: string[] = ['M', 'F'];
  emailFilter = new FormControl();
  emailOptions: string[] = ['@gmail', '@hotmail','@outlook', '@yahoo'];
  disabledFilter = new FormControl();
  disableOptions: string[] = ['true', 'false'];


  filteredValues = { id_user:'', rol:'',username:'',id_person:'', department:'', municipality:'',
  nit:'',cui:'',first_name:'', second_name:'',first_surname:'',second_surname:'',date_of_birth:'',
  sexo:'',email:'',disabled:'',topFilter: false};



  constructor(private serviceUser: UserSystemService, private snackBar: MatSnackBar){}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllUser();

    this.id_userFilter.valueChanges.subscribe((id_userFilterValue)     => {
      this.filteredValues['id_user'] = id_userFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
      this.filteredValues['topFilter'] = false;
      });

    this.rolFilter.valueChanges.subscribe((positionFilterValue)        => {
      this.filteredValues['rol'] = positionFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
      this.filteredValues['topFilter'] = false;
      });

    this.usernameFilter.valueChanges.subscribe((usernameFilterValue)   => {
      this.filteredValues['username'] = usernameFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
      this.filteredValues['topFilter'] = false;
      });

    this.id_personFilter.valueChanges.subscribe((id_personFilterValue)   => {
      this.filteredValues['id_person'] = id_personFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
      this.filteredValues['topFilter'] = false;
      });

    this.departamentoFilter.valueChanges.subscribe((nameFilterValue) => {
      this.filteredValues['department'] = nameFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
      this.filteredValues['topFilter'] = false;
      });

    this.municipalityFilter.valueChanges.subscribe((municipalityFilterValue) => {
      this.filteredValues['municipality'] = municipalityFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
      this.filteredValues['topFilter'] = false;
      });

    this.nitFilter.valueChanges.subscribe((nitFilterValue) => {
      this.filteredValues['nit'] = nitFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
      this.filteredValues['topFilter'] = false;
      });

    this.cuiFilter.valueChanges.subscribe((cuiFilterValue) => {
      this.filteredValues['cui'] = cuiFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
      this.filteredValues['topFilter'] = false;
      });

    this.first_nameFilter.valueChanges.subscribe((first_nameFilterValue) => {
      this.filteredValues['first_name'] = first_nameFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
      this.filteredValues['topFilter'] = false;
      });

    this.second_nameFilter.valueChanges.subscribe((second_nameFilterValue) => {
      this.filteredValues['second_name'] = second_nameFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
      this.filteredValues['topFilter'] = false;
      });

    this.first_surnameFilter.valueChanges.subscribe((first_surnameFilterValue) => {
      this.filteredValues['first_surname'] = first_surnameFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
      this.filteredValues['topFilter'] = false;
      });

    this.second_surnameFilter.valueChanges.subscribe((second_surnameFilterValue) => {
      this.filteredValues['second_surname'] = second_surnameFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
      this.filteredValues['topFilter'] = false;
      });

    this.date_of_birthFilter.valueChanges.subscribe((date_of_birthFilterValue) => {
      this.filteredValues['date_of_birth'] = date_of_birthFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
      this.filteredValues['topFilter'] = false;
      });

    this.sexoFilter.valueChanges.subscribe((nameFilterValue) => {
      this.filteredValues['sexo'] = nameFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
      this.filteredValues['topFilter'] = false;
      });

    this.emailFilter.valueChanges.subscribe((nameFilterValue) => {
      this.filteredValues['email'] = nameFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
      this.filteredValues['topFilter'] = false;
      });

    this.disabledFilter.valueChanges.subscribe((nameFilterValue) => {
      this.filteredValues['disabled'] = nameFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
      this.filteredValues['topFilter'] = false;
      });

    this.dataSource.filterPredicate = this.customFilterPredicate();

  }

  public getAllUser(){
    let resp = this.serviceUser.getUserSystem();
    resp.subscribe(report=>
      {this.dataSource.data = report as UserSystem[]
      },
      (err) => {
        console.error(err);
        this.openSnackBar("404 Not found data base", 'reload');
      }
    );
  }

  // evento para deshabilitar a un usuario
  onDelete(userSystem: UserSystem) {
    this.serviceUser.deleteUserSystem(userSystem).subscribe(data => {
      userSystem.disabled = !userSystem.disabled;
      if (!userSystem.disabled) {
        this.openSnackBar("Habilitado Exitosamente", '');
      }
      else{
        this.openSnackBar("Deshabilitado Exitosamente", '');
      }
    },
    (err) => {
      console.error(err);
      this.openSnackBar("Algo salio mal", '');
    }
    );

  }

  applyFilter(filterValue: string) {
    let filter = {
      id_user: filterValue.trim().toLowerCase(),
      rol: filterValue.trim().toLowerCase(),
      username: filterValue.trim().toLowerCase(),
      id_person: filterValue.trim().toLowerCase(),
      department: filterValue.trim().toLowerCase(),
      municipality: filterValue.trim().toLowerCase(),
      nit: filterValue.trim().toLowerCase(),
      cui: filterValue.trim().toLowerCase(),
      first_name: filterValue.trim().toLowerCase(),
      second_name: filterValue.trim().toLowerCase(),
      first_surname: filterValue.trim().toLowerCase(),
      second_surname: filterValue.trim().toLowerCase(),
      date_of_birth: filterValue.trim().toLowerCase(),
      sexo: filterValue.trim().toLowerCase(),
      email: filterValue.trim().toLowerCase(),
      disabled: filterValue.trim().toLowerCase(),
      topFilter: true
    }
    this.dataSource.filter = JSON.stringify(filter)
  }

  customFilterPredicate() {
    const myFilterPredicate = function(data:UserSystem,        filter:string) :boolean {
      let searchString = JSON.parse(filter);
      let id_userFound = data.id_user.toString().trim().indexOf
      (searchString.id_user) !== -1
      let rolFound = data.rol.toString().trim().toLowerCase().indexOf
      (searchString.rol.toLowerCase()) !== -1
      let usernameFound = data.username.toString().trim().toLowerCase().indexOf
      (searchString.username.toLowerCase()) !== -1
      let id_personFound = data.id_person.toString().trim().indexOf
      (searchString.id_person) !== -1
      let departamentoFound = data.department.toString().trim().toLowerCase().indexOf
      (searchString.department.toLowerCase()) !== -1
      let municipalityFound = data.municipality.toString().trim().toLowerCase().indexOf
      (searchString.municipality.toLowerCase()) !== -1
      let nitFound = data.nit.toString().trim().indexOf
      (searchString.nit) !== -1
      let cuiFound = data.cui.toString().trim().indexOf
      (searchString.cui) !== -1
      let sexoFound = data.sexo.toString().trim().toLowerCase().indexOf
      (searchString.sexo.toLowerCase()) !== -1
      let first_nameFound = data.first_name.toString().trim().toLowerCase().indexOf
      (searchString.first_name.toLowerCase()) !== -1
      let second_nameFound = data.second_name.toString().trim().toLowerCase().indexOf
      (searchString.second_name.toLowerCase()) !== -1
      let first_surnameFound = data.first_surname.toString().trim().toLowerCase().indexOf
      (searchString.first_surname.toLowerCase()) !== -1
      let second_surnameFound = data.second_surname.toString().trim().toLowerCase().indexOf
      (searchString.second_surname.toLowerCase()) !== -1
      let date_of_birthFound = data.date_of_birth.toString().trim().toLowerCase().indexOf
      (searchString.date_of_birth.toLowerCase()) !== -1
      let emailFound = data.email.toString().trim().toLowerCase().indexOf
      (searchString.email.toLowerCase()) !== -1
      let disabledFound = data.disabled.toString().trim().toLowerCase().indexOf
      (searchString.disabled.toLowerCase()) !== -1


      if (searchString.topFilter) {
          return id_userFound || rolFound || usernameFound || id_personFound || departamentoFound ||
          municipalityFound || nitFound || cuiFound || first_nameFound || second_nameFound ||
          first_surnameFound || second_surnameFound || date_of_birthFound || sexoFound || emailFound
          || disabledFound
      } else {
          return id_userFound && rolFound && usernameFound && id_personFound && departamentoFound &&
          municipalityFound && nitFound && cuiFound && first_nameFound && second_nameFound &&
          first_surnameFound && second_surnameFound && date_of_birthFound && sexoFound && emailFound
          && disabledFound
      }
    }
    return myFilterPredicate;
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    }).onAction().subscribe(() => {
      window.location.reload();
    });
  }
}

