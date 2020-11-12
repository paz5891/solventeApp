import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Person } from 'src/app/common/person';
import { AnalystAssignmentService } from 'src/app/services/analyst-assignment.service';
import { PersonService } from 'src/app/services/person.service';
import { CommercialActivityDialogComponent } from '../catalogs/commercial-activity-dialog/commercial-activity-dialog.component';
import { SolicitudFianzaComponent } from '../solicitud-fianza/solicitud-fianza.component';

@Component({
  selector: 'app-solicitud-fianza-dialog',
  templateUrl: './solicitud-fianza-dialog.component.html',
  styleUrls: ['./solicitud-fianza-dialog.component.css']
})
export class SolicitudFianzaDialogComponent implements OnInit {
  form: FormGroup;
  id_Policy: number;

  analistas: Person[];
  mensaje: string;
  constructor(public dialogRef: MatDialogRef<SolicitudFianzaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private pesonService: PersonService,
    private _formBuilder: FormBuilder,
    private analystAssignmentService: AnalystAssignmentService,
    private snackBar: MatSnackBar,) 
  {
    this.consultarAnalistas();
    this.id_Policy = data.id_policy;
   }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      id_user: ['', Validators.required],
    });
  }

  onCancel(): void{
    this.dialogRef.close();
  }

  consultarAnalistas(){
    this.pesonService.getPersonsByType(1006).subscribe(data => {
      this.analistas =  data;
    });
  }

  onSave(): void{
    const datosEnviar = {
      'id_policy': this.id_Policy,
      'id_user': this.form.value.id_user
    }

    console.log(datosEnviar);

    this.analystAssignmentService.assignAnalyst(datosEnviar).subscribe(
      (res:any) => {
        console.log(res)
        if (res === 'CREATED SUCCESSFULLY') {
          this.mensaje = 'Se ha asignado un analista!';
          this.openSnackBar();
          this.onCancel();
        }
        
      }, error => {
        this.mensaje = 'Algo salio mal';
        this.openSnackBar();
        console.log(error);
      }
    )    
  }

  openSnackBar() {
    this.snackBar.open(this.mensaje, '', {
      duration: 2000
    });
  }

}
