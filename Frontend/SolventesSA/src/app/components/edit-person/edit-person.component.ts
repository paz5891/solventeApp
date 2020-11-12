import { Component, OnInit, Type } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from 'src/app/services/person.service';
import { PhoneCatalog } from 'src/app/common/phone-catalog';
import { AddressCatalog } from 'src/app/common/address-catalog';
import { AttachmentCatalog } from 'src/app/common/attachment-catalog';
import { TypePerson } from 'src/app/common/type-person';
import { RolCatalog } from 'src/app/common/rol-catalog';
import { Department } from 'src/app/common/department';
import { Municipality } from 'src/app/common/municipality';
import { ComercialActivity } from 'src/app/common/comercial-activity';
import { TypePersonService } from 'src/app/services/type-person.service';
import { RolService } from 'src/app/services/rol.service';
import { DepartmentService } from 'src/app/services/department.service';
import { MunicipalityService } from 'src/app/services/municipality.service';
import { ComercialActivityService } from 'src/app/services/comercial-activity.service';
import { PhoneCatalogService } from 'src/app/services/phone-catalog.service';
import { AdressService } from 'src/app/services/adress.service';
import { AttachmentCatalogService } from 'src/app/services/attachment-catalog.service';
import { Person } from 'src/app/common/person';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpEventType, HttpEvent } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface Sexo {
  id_sexo: string;
  sexo: string;
}

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css'],
})
export class EditPersonComponent implements OnInit {
  // arreglos para llenar los selects
  typesPerson: TypePerson[] = [];
  roles: RolCatalog[] = [];
  deparments: Department[] = [];
  municipalities: Municipality[] = [];
  comercialActivities: ComercialActivity[] = [];
  typesPhone: PhoneCatalog[] = [];
  typesAddress: AddressCatalog[] = [];
  typesAttachment: AttachmentCatalog[] = [];
  sexos: Sexo[] = [
    { id_sexo: 'M', sexo: 'Masculino' },
    { id_sexo: 'F', sexo: 'Femenino' },
  ];
  // almacena los datos de la persona que se va actualizar
  personToUpdate: Person;

  // formulario para los datos de persona
  formPerson: FormGroup;
  valueProgress: number = 0;

  // selects
  selectedTypePerson: number;
  selectedDeparment: number;
  // variables paara avatar
  avatarPreview: any;
  avatarToUpload: File;
  constructor(
    private activatedRoute: ActivatedRoute,
    private personService: PersonService,
    private _typePersonService: TypePersonService,
    private _rolService: RolService,
    private _departmentService: DepartmentService,
    private _municipalityService: MunicipalityService,
    private _comercialActivityService: ComercialActivityService,
    private _phoneCatalogService: PhoneCatalogService,
    private _addressCatalogService: AdressService,
    private _attachmentCatalogService: AttachmentCatalogService,
    private _formBuilder: FormBuilder,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.paramMap.has('idPerson')) {
      this.personService
        .getPerson(+this.activatedRoute.snapshot.paramMap.get('idPerson'))
        .subscribe((res) => {
          this.personToUpdate = res[0];
          this.buildForm();
          this.fillCatalogs();
        });
    }
  }

  buildForm() {
    let typePerson = '';
    if (this.selectedTypePerson) {
      typePerson = this.typesPerson.find(
        (tp) => tp.id_type_person == this.selectedTypePerson
      ).type_person;
    } else {
      typePerson = this.personToUpdate.type_person;
    }
    switch (typePerson) {
      case 'PARTICULAR':
        // campos para persona particular
        this.formPerson = this._formBuilder.group({
          id_person: ['', Validators.required],
          id_type_person: ['', Validators.required],
          id_municipality: ['', Validators.required],
          nit: ['', Validators.required],
          email: ['', Validators.required],
          cui: ['', Validators.required],
          first_name: ['', Validators.required],
          second_name: [''],
          first_surname: ['', Validators.required],
          second_surname: [''],
          date_of_birth: ['', Validators.required],
          id_rol: ['', Validators.required],
          sexo: ['', Validators.required],
          business_name: [null],
          constitution_date: [null],
          commercial_patent_number: [null],
          id_comercial_activity: [null],
          avatar: [''],
        });
        break;
      case 'JURIDICA':
        // campos para persona juridica
        this.formPerson = this._formBuilder.group({
          id_person: ['', Validators.required],
          id_type_person: ['', Validators.required],
          id_municipality: ['', Validators.required],
          nit: ['', Validators.required],
          email: ['', Validators.required],
          cui: [null],
          first_name: [null],
          second_name: [null],
          first_surname: [null],
          second_surname: [null],
          date_of_birth: [null],
          id_rol: [null],
          sexo: [null],
          business_name: ['', Validators.required],
          constitution_date: ['', Validators.required],
          commercial_patent_number: ['', Validators.required],
          id_comercial_activity: ['', Validators.required],
          avatar: [null],
        });
        break;
      case 'CORREDOR':
        // campos para corredor
        this.formPerson = this._formBuilder.group({
          id_person: ['', Validators.required],
          id_type_person: ['', Validators.required],
          id_municipality: ['', Validators.required],
          nit: ['', Validators.required],
          email: ['', Validators.required],
          cui: ['', Validators.required],
          first_name: ['', Validators.required],
          second_name: [''],
          first_surname: ['', Validators.required],
          second_surname: [''],
          date_of_birth: ['', Validators.required],
          id_rol: ['', Validators.required],
          sexo: ['', Validators.required],
          business_name: ['', Validators.required],
          constitution_date: ['', Validators.required],
          commercial_patent_number: ['', Validators.required],
          id_comercial_activity: ['', Validators.required],
          avatar: [null],
        });
        break;
    }
  }

  async fillCatalogs() {
    this.typesPerson = await this._typePersonService
      .getTypePerson()
      .toPromise();
    this.roles = await this._rolService.getRoles().toPromise();
    this.deparments = await this._departmentService
      .getDepartments()
      .toPromise();
    this.comercialActivities = await this._comercialActivityService
      .getcomercialActivity()
      .toPromise();
    this.typesPhone = await this._phoneCatalogService
      .getPhonecatalog()
      .toPromise();
    this.typesAddress = await this._addressCatalogService
      .getadresses()
      .toPromise();
    this.typesAttachment = await this._attachmentCatalogService
      .getAttachmentCatalog()
      .toPromise();

    this.fillFields();
  }

  async fillFields() {
    let typePerson: TypePerson;
    if (this.selectedTypePerson) {
      typePerson = new TypePerson();
      typePerson.id_type_person = this.selectedTypePerson;
    } else {
      typePerson = this.typesPerson.find(
        (tp) => tp.type_person == this.personToUpdate.type_person
      );
    }
    this.selectedTypePerson = typePerson.id_type_person;
    const deparment = this.deparments.find(
      (d) => d.department == this.personToUpdate.department
    );
    this.municipalities = await this._municipalityService
      .getMunicipality(deparment.id_department)
      .toPromise();
    const municipality = this.municipalities.find(
      (m) => m.municipality == this.personToUpdate.municipality
    );
    this.selectedDeparment = deparment.id_department;
    this.formPerson.get('id_person').setValue(this.personToUpdate.id_person);
    this.formPerson.get('id_type_person').setValue(typePerson.id_type_person);
    this.formPerson
      .get('id_municipality')
      .setValue(municipality.id_municipality);
    if (this.selectedTypePerson !== 1006) {
      const commercialActivity = this.comercialActivities.find(
        (ca) => ca.comercial_activity == this.personToUpdate.comercial_activity
      );
      this.formPerson
        .get('id_comercial_activity')
        .setValue(commercialActivity.id_comercial_activity);
    }
    if (this.selectedTypePerson !== 1007) {
      this.formPerson.get('nit').setValue(this.personToUpdate.nit);
      this.formPerson.get('email').setValue(this.personToUpdate.email);
      this.formPerson.get('cui').setValue(this.personToUpdate.cui);
      this.formPerson
        .get('first_name')
        .setValue(this.personToUpdate.first_name);
      this.formPerson
        .get('second_name')
        .setValue(this.personToUpdate.second_name);
      this.formPerson
        .get('first_surname')
        .setValue(this.personToUpdate.first_surname);
      this.formPerson
        .get('second_surname')
        .setValue(this.personToUpdate.second_surname);
      this.formPerson
        .get('date_of_birth')
        .setValue(this.personToUpdate.date_of_birth);
      this.formPerson.get('sexo').setValue(this.personToUpdate.sexo);
      const rol = this.roles.find((r) => r.rol == this.personToUpdate.rol);
      this.formPerson.get('id_rol').setValue(rol.id_rol);
      if (this.personToUpdate.avatar) {
        this.avatarPreview = this.personToUpdate.avatar;
        this.formPerson.get('avatar').setValue(this.personToUpdate.avatar);
      } else {
        this.avatarPreview = '/assets/empty-avatar.png';
      }
    }
    this.formPerson.markAllAsTouched();
  }

  uploadAvatar(files: FileList) {
    if (files.length > 0) {
      const file = files.item(0);
      const reader: FileReader = new FileReader();
      reader.onload = () => {
        this.avatarPreview = reader.result;
      };
      reader.readAsDataURL(file);
      this.avatarToUpload = file;
    }
  }

  onChangeDeparment(): void {
    this._municipalityService
      .getMunicipality(this.selectedDeparment)
      .subscribe((res) => (this.municipalities = res));
  }

  onChangeTypePerson(): void {
    this.buildForm();
    this.fillFields();
  }

  onSubmit() {
    if (this.formPerson.valid) {
      const formData = new FormData();
      formData.append('body', JSON.stringify(this.formPerson.value));
      if (this.avatarToUpload) {
        formData.append(
          'avatar_file',
          this.avatarToUpload,
          this.avatarToUpload.name
        );
      }
      this.personService
        .updatePerson(formData)
        .subscribe((event: HttpEvent<any>) => {
          switch (event.type) {
            case HttpEventType.UploadProgress:
              this.valueProgress = Math.round(
                (event.loaded / event.total) * 100
              );
              break;
            case HttpEventType.Response:
              this._snackBar.open('Persona editada exitosamente', '', {
                duration: 1500,
              });
              setTimeout(() => {
                this.valueProgress = 0;
              }, 1500);
              break;
          }
        });
    }
  }
}
