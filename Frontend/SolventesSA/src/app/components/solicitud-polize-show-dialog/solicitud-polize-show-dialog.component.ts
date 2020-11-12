import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { SolicitudService } from '../../services/solicitud.service';
import { Solicitud } from '../../common/solicitud';
import { MessageApi } from '../../common/message-api';
import { Bouquet } from '../../common/bouquet';
import { BouquetType } from '../../common/bouquet-type';
import { BouquetService } from 'src/app/services/bouquet.service';
import { BouquetTypeService } from 'src/app/services/bouquet-type.service';

@Component({
  selector: 'app-solicitud-polize-show-dialog',
  templateUrl: './solicitud-polize-show-dialog.component.html',
  styleUrls: ['./solicitud-polize-show-dialog.component.css']
})
export class SolicitudPolizeShowDialogComponent implements OnInit {
  datos: Solicitud;
  // arreglos para almacenar el memoria los ramos y sus tipos
  bouquets: Bouquet[] = [];
  bouquetsType: BouquetType[] = [];
  // variable para saber que ramo esta seleccionado
  selectedBouquet: number;

  constructor(
    private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<SolicitudPolizeShowDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Solicitud,

    private _solicitudService: SolicitudService,
    private _bouquetService: BouquetService,
    private _bouquetTypeService: BouquetTypeService,
    
    ) { 
      this.datos = data;
      console.log(this.datos);
    }

  ngOnInit(): void {
  }

  onCancel(): void{
    this.dialogRef.close();
  }

  onSave(): void{
    this.dialogRef.close();
    // this._solicitudService.updateSolicitud(this.datos).subscribe((message:MessageApi) => {
    //   console.log(message)
    // })
  }

}
