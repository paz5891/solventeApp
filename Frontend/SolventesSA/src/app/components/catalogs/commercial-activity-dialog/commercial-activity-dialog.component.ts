import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert2'

import { ComercialActivity } from '../../../common/comercial-activity';
import { ComercialActivityService } from 'src/app/services/comercial-activity.service';

@Component({
  selector: 'app-commercial-activity-dialog',
  templateUrl: './commercial-activity-dialog.component.html',
  styleUrls: ['./commercial-activity-dialog.component.css']
})

export class CommercialActivityDialogComponent implements OnInit {

  form: FormGroup;
  title: string;

  constructor(private _formBuilder: FormBuilder, private service: ComercialActivityService, public dialogRef: MatDialogRef<CommercialActivityDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: ComercialActivity) { 
    this.title = "Agregar nuevo registro";
    if(data.id_comercial_activity !== null){
      this.title = "Actualizar registro";
    }
  }
  

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      id_comercial_activity: [this.data.id_comercial_activity],
      comercial_activity: [this.data.comercial_activity, Validators.required]
    });
  }

  onCancel(): void{
    this.dialogRef.close();
  }

  onSubmit(): any{
    if(this.data.id_comercial_activity === null){
      this.save({comercial_activity: this.form.controls.comercial_activity.value.toUpperCase()});
    }else{
      const objData = {
        id: this.data.id_comercial_activity, 
        comercial_activity: this.form.controls.comercial_activity.value.toUpperCase()
      };
      this.update(objData);
    }
  }

  update(data): any{
    this.service.updateCommercialActivity(data).subscribe((res: any) => {
      if(res === 'UPDATED SUCCESSFULLY'){
        this.dialogRef.close();
        swal.fire(
          'Actualizado!',
          'El registro ha sido actualizado con éxito!.',
          'success'
        )
      }
    }, err => {
      swal.fire(
        'Error',
        'Error al guardar',
        'error'
      )
    }, () => {
      console.log('completado')
    });
  }

  save(data): any{
    this.service.saveCommercialActivity(data).subscribe((res: any) => {
      if(res === 'CREATED SUCCESSFULLY'){
        this.dialogRef.close();
        swal.fire(
          'Añadido!',
          'El registro ha sido añadido con éxito!.',
          'success'
        )
      }
    }, err => {
      swal.fire(
        'Error',
        'Error al guardar',
        'error'
      )
    }, () => {
      console.log('completado')
    });
  }
}
