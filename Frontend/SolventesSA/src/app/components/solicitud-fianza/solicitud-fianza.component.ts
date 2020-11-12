import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Solicitud } from 'src/app/common/solicitud';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { SolicitudFianzaDialogComponent } from '../solicitud-fianza-dialog/solicitud-fianza-dialog.component';
import { SolicitudPolizeShowDialogComponent } from '../solicitud-polize-show-dialog/solicitud-polize-show-dialog.component';

@Component({
  selector: 'app-solicitud-fianza',
  templateUrl: './solicitud-fianza.component.html',
  styleUrls: ['./solicitud-fianza.component.css']
})
export class SolicitudFianzaComponent implements OnInit {
  @Input('ELEMENT_DATA') ELEMENT_DATA!: Solicitud[];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  items = new MatTableDataSource<Solicitud>(this.ELEMENT_DATA);
  displayedColumns: string[] = [
    
    'bouquet',
    'bouquet_type',
    'policy_status',
    'state',
    'end_date',
    'creation_date',
    'prima',
    'contract_amount',
    'insured_amount',
    'iva',

    'emission_rights',
    'financing_surcharges',
    'cancellation_date',
    'validity',
    'assign',
    'show'
  ];

  analystFilter = [
    {id: 1, descripcion: 'CON ANALISTA'},
    {id: 2, descripcion: 'SIN ANALISTA'}
  ]
  constructor(private solicitudService: SolicitudService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.items.paginator = this.paginator;
    this.items.sort = this.sort;
    this.fillTable();
  }

  fillTable() {
    this.solicitudService.getSolicitudes().subscribe(data => {
      this.items.data = data;

    });
  }

  onAssign(item){
    console.log(item);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    dialogConfig.data = {
      id_policy: item.id_policy
    };

    const dialogRef = this.dialog.open(SolicitudFianzaDialogComponent, dialogConfig);
  }

  onShow(item){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "80%";
    dialogConfig.maxWidth = 760;
    dialogConfig.data = item;
    const dialogRef = this.dialog.open(SolicitudPolizeShowDialogComponent, dialogConfig);
  }

  onChangeAnalyst(){
  }

}