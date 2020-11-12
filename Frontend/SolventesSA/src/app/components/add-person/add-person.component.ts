import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddressCatalog } from 'src/app/common/address-catalog';
import { AttachmentCatalog } from 'src/app/common/attachment-catalog';
import { ComercialActivity } from 'src/app/common/comercial-activity';
import { Department } from 'src/app/common/department';
import { Municipality } from 'src/app/common/municipality';
import { PersonPost } from 'src/app/common/person-post';
import { PhoneCatalog } from 'src/app/common/phone-catalog';
import { RolCatalog } from 'src/app/common/rol-catalog';
import { TypePerson } from 'src/app/common/type-person';
import { AdressService } from 'src/app/services/adress.service';
import { AttachmentCatalogService } from 'src/app/services/attachment-catalog.service';
import { ComercialActivityService } from 'src/app/services/comercial-activity.service';
import { DepartmentService } from 'src/app/services/department.service';
import { MunicipalityService } from 'src/app/services/municipality.service';
import { PersonService } from 'src/app/services/person.service';
import { PhoneCatalogService } from 'src/app/services/phone-catalog.service';
import { RolService } from 'src/app/services/rol.service';
import { TypePersonService } from 'src/app/services/type-person.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})

export class AddPersonComponent implements OnInit {
  formPerson: FormGroup;
  selectedTypePerson: number = 1006;
  avatarPreview: any = "/assets/empty-avatar.png";
  onSubmitDisable: boolean = false;
  valueProgress: number;

  filesToUpload: File[] = [];
  avatarToUpload: File;
  filesGood: boolean = false;

  typesPerson: TypePerson[] = [];
  roles: RolCatalog[] = [];
  deparments: Department[] = [];
  municipalities: Municipality[] = [];
  comercialActivities: ComercialActivity[] = [];
  typesPhone: PhoneCatalog[] = [];
  typesAddress: AddressCatalog[] = [];
  typesAttachment: AttachmentCatalog[] = [];

  constructor(
    private _formBuilder: FormBuilder,
    private _typePersonService: TypePersonService,
    private _rolService: RolService,
    private _departmentService: DepartmentService,
    private _municipalityService: MunicipalityService,
    private _comercialActivityService: ComercialActivityService,
    private _phoneCatalogService: PhoneCatalogService,
    private _addressCatalogService: AdressService,
    private _attachmentCatalogService: AttachmentCatalogService,
    private _personService: PersonService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.buildForm();
    this.fillSelects();
    this.addDataPerson(1006);
    this.addPhone();
    this.addAddress();
    this.addAttachment();
  }

  buildForm() {
    this.formPerson = this._formBuilder.group({
      formArray: this._formBuilder.array([
        this._formBuilder.group({
          data_person: this._formBuilder.array([])
        }),
        this._formBuilder.group({
          phone_person: this._formBuilder.array([])
        }),
        this._formBuilder.group({
          address_person: this._formBuilder.array([])
        }),
        this._formBuilder.group({
          attachment_person: this._formBuilder.array([])
        })
      ])
    });
  }

  fillSelects() {
    this._typePersonService.getTypePerson().subscribe(res => this.typesPerson = res);
    this._rolService.getRoles().subscribe(res => this.roles = res);
    this._departmentService.getDepartments().subscribe(res => this.deparments = res);
    this._comercialActivityService.getcomercialActivity().subscribe(res => this.comercialActivities = res);
    this._phoneCatalogService.getPhonecatalog().subscribe(res => this.typesPhone = res);
    this._addressCatalogService.getadresses().subscribe(res => this.typesAddress = res);
    this._attachmentCatalogService.getAttachmentCatalog().subscribe(res => this.typesAttachment = res);
  }

  addDataPerson(selectedTypePerson: number): void {
    this.data_person.clear();
    switch (selectedTypePerson) {
      case 1006:
        // campos para persona particular
        this.data_person.push(this._formBuilder.group({
          id_type_person: [this.selectedTypePerson, Validators.required],
          id_municipality: ['', Validators.required],
          nit: ['', Validators.required],
          email: ['', Validators.required],
          cui: ['', Validators.required],
          first_name: ['', Validators.required],
          second_name: [null],
          first_surname: ['', Validators.required],
          second_surname: [null],
          date_of_birth: ['', Validators.required],
          id_rol: ['', Validators.required],
          sexo: ['', Validators.required],
          business_name: [null],
          constitution_date: [null],
          commercial_patent_number: [null],
          id_comercial_activity: [null],
          avatar: [null]
        }));
        break;
      case 1007:
        // campos para persona juridica
        this.data_person.push(this._formBuilder.group({
          id_type_person: [this.selectedTypePerson, Validators.required],
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
          avatar: [null]
        }));
        break;
      case 1008:
        // campos para persona corredor
        this.data_person.push(this._formBuilder.group({
          id_type_person: [this.selectedTypePerson, Validators.required],
          id_municipality: ['', Validators.required],
          nit: ['', Validators.required],
          email: ['', Validators.required],
          cui: ['', Validators.required],
          first_name: ['', Validators.required],
          second_name: [null],
          first_surname: ['', Validators.required],
          second_surname: [null],
          date_of_birth: ['', Validators.required],
          id_rol: ['', Validators.required],
          sexo: ['', Validators.required],
          business_name: ['', Validators.required],
          constitution_date: ['', Validators.required],
          commercial_patent_number: ['', Validators.required],
          id_comercial_activity: ['', Validators.required],
          avatar: [null]
        }));
        break;
    }
  }

  addPhone(): void {
    this.phone_person.push(this._formBuilder.group({
      id_phone_catalog: ['', Validators.required],
      phone: ['', Validators.required]
    }));
  }

  removePhone(index: number): void {
    this.phone_person.removeAt(index);
  }

  addAddress(): void {
    this.address_person.push(this._formBuilder.group({
      id_address_catalog: ['', Validators.required],
      address: ['', Validators.required]
    }));
  }

  removeAddress(index: number): void {
    this.address_person.removeAt(index);
  }

  addAttachment(): void {
    this.attachment_person.push(this._formBuilder.group({
      id_attachment_catalog: ['', Validators.required],
      attachment: ['', Validators.required],
      description: ['']
    }));
  }

  removeAttachment(index: number): void {
    this.attachment_person.removeAt(index);
    // elimina un archivo de la lista de archivos a subir
    this.filesToUpload.splice(index, 1);
  }

  onChangeTypePerson(): void {
    this.addDataPerson(this.selectedTypePerson);
  }

  onChangeDeparment(value: number): void {
    this._municipalityService.getMunicipality(value).subscribe(res => this.municipalities = res);
  }

  uploadAvatar(files: FileList, index: number): void {
    // si selecciono un archivo
    if (files.length > 0) {
      const file = files.item(0);
      const reader: FileReader = new FileReader();
      reader.onload = () => {
        this.avatarPreview = reader.result;
      };
      reader.readAsDataURL(file);
      this.avatarToUpload = file;
      this.data_person.at(index).get('avatar').setValue(file.name);
    }
  }

  uploadFile(files: FileList, index: number) {
    // si selecciono al menos un archivo
    if (files.length > 0) {
      const max_size = 10485760; //10MB = (10*1024*1024)
      const allowed_types = ['image/png', 'image/jpeg', 'application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/msword'];

      let file: File = files.item(0);

      // si el archivo seleccionado es mayor al tamaño de archivo permitido
      if (file.size > max_size) {
        this.attachment_person.at(index).get('attachment').setValue('El arcivo debe ser menor a 10 MB');
        this.filesGood = false;
        return false;
      }
      // si el tipo de archivo no se encuentra en los tipos de archivo permitidos
      if (!(allowed_types.includes(file.type))) {
        this.attachment_person.at(index).get('attachment').setValue('Solo se permiten formatos ( jpeg | png | pdf | doc | docx)');
        this.filesGood = false;
        return false;
      }
      // agrega el archivo seleccionado a la lista de archivos a subir
      this.filesToUpload.push(file);
      // agrega el nombre del archivo al campo attachment
      this.attachment_person.at(index).get('attachment').setValue(file.name);
      this.filesGood = true;
    } else {
      // si ya habia un archivo en esta posicion
      if (this.filesToUpload[index] !== null) {
        // elimina el archivo de esta posicion
        this.filesToUpload.splice(index, 1);
      }
      this.attachment_person.at(index).get('attachment').setValue('El archivo es requerido');
      this.filesGood = false;
    }
  }

  onSubmit(): void {
    if (this.formPerson.valid && this.filesGood) {
      const person = new PersonPost();
      person.id_type_person = this.data_person.at(0).get('id_type_person').value;
      person.id_municipality = this.data_person.at(0).get('id_municipality').value;
      person.nit = this.data_person.at(0).get('nit').value;
      person.email = this.data_person.at(0).get('email').value;
      person.cui = this.data_person.at(0).get('cui').value;
      person.first_name = this.data_person.at(0).get('first_name').value;
      person.second_name = this.data_person.at(0).get('second_name').value;
      person.first_surname = this.data_person.at(0).get('first_surname').value;
      person.second_surname = this.data_person.at(0).get('second_surname').value;
      person.date_of_birth = this.data_person.at(0).get('date_of_birth').value;
      person.id_rol = this.data_person.at(0).get('id_rol').value;
      person.sexo = this.data_person.at(0).get('sexo').value;
      person.business_name = this.data_person.at(0).get('business_name').value;
      person.constitution_date = this.data_person.at(0).get('constitution_date').value;
      person.commercial_patent_number = this.data_person.at(0).get('commercial_patent_number').value;
      person.id_comercial_activity = this.data_person.at(0).get('id_comercial_activity').value;
      person.avatar = this.data_person.at(0).get('avatar').value;
      this.phone_person.controls.forEach(p => person.phone_person.push(p.value));
      this.address_person.controls.forEach(a => person.address_person.push(a.value));
      this.attachment_person.getRawValue().forEach(a => person.attachment_person.push(a));
      
      // se crea un form data para ser enviado a la API
      const formData: FormData = new FormData();
      // se agrega el objeto person convertido en JSON al form data
      formData.append('body', JSON.stringify(person));
      if(this.selectedTypePerson !== 1007) {
	      formData.append('avatar_person', this.avatarToUpload, this.avatarToUpload.name);
      }
      // se toman los archivos que estaban almacenados en la lista de archivos a subir y se agregan al form data
      for (let index = 0; index < this.filesToUpload.length; index++) {
        const file = this.filesToUpload[index];
        formData.append('attachment_person', file, file.name);
      }

      this.onSubmitDisable = true;
      // se llama al servicio que llamara a la API y se le pasa el form data para que este lo envie a la API
      this._personService.savePerson(formData).subscribe((event: HttpEvent<any>) => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            this.valueProgress = Math.round(event.loaded / event.total * 100);
            break;
          case HttpEventType.Response:
            this._snackBar.open('Persona creada exitosamente', '', { duration: 1500 });
            setTimeout(() => {
              this.onSubmitDisable = false;
              this.valueProgress = 0;
            }, 1500);
        }
      });
    }
  }

  public get formArray() : FormArray {
    return this.formPerson.get('formArray') as FormArray;
  }

  get data_person(): FormArray {
    return this.formArray.get([0]).get('data_person') as FormArray;
  }

  get phone_person(): FormArray {
    return this.formArray.get([1]).get('phone_person') as FormArray;
  }

  get address_person(): FormArray {
    return this.formArray.get([2]).get('address_person') as FormArray;
  }

  get attachment_person(): FormArray {
    return this.formArray.get([3]).get('attachment_person') as FormArray;
  }
}