import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert2'

import { SibPeriod } from '../../../common/sib-period';
import { SibPeriodService } from 'src/app/services/sib-period.service'; 

@Component({
  selector: 'app-periodo-dialog',
  templateUrl: './periodo-dialog.component.html',
  styleUrls: ['./periodo-dialog.component.css']
})
export class PeriodoDialogComponent implements OnInit {

  form: FormGroup;
  title: string;

  constructor(private _formBuilder: FormBuilder, private service: SibPeriodService, public dialogRef: MatDialogRef<PeriodoDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: SibPeriod) { 
    this.title = "Agregar nuevo registro";
  }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      id_sib_period: [this.data.id_sib_period],
      end_date: [this.data.end_date, Validators.required]
    });
  }

  onCancel(): void{
    this.dialogRef.close();
  }

  onSubmit(): any{
    (this.data.id_sib_period === null);{
      this.save({end_date: this.form.controls.end_date.value.toUpperCase()});
    }
  }

  save(data): any{
    this.service.saveSibsPeriod(data).subscribe((res: any) => {
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
