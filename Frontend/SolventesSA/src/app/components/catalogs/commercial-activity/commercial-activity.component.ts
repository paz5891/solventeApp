import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ComercialActivity } from '../../../common/comercial-activity';
import { ComercialActivityService } from '../../../services/comercial-activity.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import swal from 'sweetalert2';

import { CommercialActivityDialogComponent } from '../commercial-activity-dialog/commercial-activity-dialog.component';

@Component({
  selector: 'app-commercial-activity',
  templateUrl: './commercial-activity.component.html',
  styleUrls: ['./commercial-activity.component.css']
})

export class CommercialActivityComponent implements OnInit {
  @Input('ELEMENT_DATA') ELEMENT_DATA!: ComercialActivity[];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  items = new MatTableDataSource<ComercialActivity>(this.ELEMENT_DATA);
  displayedColumns: string[] = ['id_comercial_activity','comercial_activity', 'edit', 'delete'];

  constructor(private service: ComercialActivityService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.items.paginator = this.paginator;
    this.items.sort = this.sort;
    this.fillTable();
  }

  fillTable() {
    this.service.getcomercialActivity().subscribe(data => {
      this.items.data = data;
    });
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    dialogConfig.data = {
      id_comercial_activity: null,
      comercial_activity: ''
    };

    const dialogRef = this.dialog.open(CommercialActivityDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => this.onChange());
  }

  onChange() {
    this.fillTable();
  }

  onUpdate(item) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    dialogConfig.data = {
      id_comercial_activity: item.id_comercial_activity,
      comercial_activity: item.comercial_activity
    };

    const dialogRef = this.dialog.open(CommercialActivityDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => this.onChange());
  }

  onDelete(item) {
    swal.fire({
      title: '¿Está seguro de querer eliminar el registro?',
      text: '¡No podrá recuperar este registro!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      if (result.value) {
        this.deleteRecord(item.id_comercial_activity);
      } else if (result.dismiss === swal.DismissReason.cancel) {

      }
    })
  }

  deleteRecord(id) {
    this.service.deleteCommercialActivity(id).subscribe(res => {
      if(res === 'DELETED SUCCESSFULLY'){
        this.onChange();
        swal.fire(
          'Eliminado!',
          'El registro ha sido eliminado.',
          'success'
        )
      }
    }, err => {
      swal.fire(
        'Error',
        'Error al eliminar',
        'error'
      )
    }, () => {
      console.log('completado')
    });
  }

}
