import { element } from 'protractor';
import { SibPeriodService } from 'src/app/services/sib-period.service';
import { SibPeriod } from './../../common/sib-period';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import swal from 'sweetalert2';
import { PeriodoDialogComponent } from './periodo-dialog/periodo-dialog.component';
import { Console } from 'console';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-periodo-emision',
  templateUrl: './periodo-emision.component.html',
  styleUrls: ['./periodo-emision.component.css']
})
export class PeriodoEmisionComponent implements OnInit {
  @Input('ELEMENT_DATA') ELEMENT_DATA!: SibPeriod[];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  items = new MatTableDataSource<SibPeriod>(this.ELEMENT_DATA);
  displayedColumns: string[] = ['id_sib_period', 'end_date', 'date_open', 'date_closed', 'id_user_open',
  'first_name_user_open', 'second_name_user_open', 'first_surname_user_open', 'second_surname_user_open',
  'id_user_closed', 'first_name_user_closed', 'second_name_user_closed', 'first_surname_user_closed',
  'second_surname_user_closed', 'disabled'];

  constructor(
    private sibPeriodService: SibPeriodService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }
  selected: number = 1;
  mensaje: string;
  ngOnInit(): void {
    this.fillTable();
  }

  fillTable() {
    this.sibPeriodService.getSibsPeriod().subscribe(data => {
      this.items.data = data;
      this.items.paginator = this.paginator;
      this.items.sort = this.sort;
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

    const dialogRef = this.dialog.open(PeriodoDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => this.onChange());
  }

  onChange() {
    this.fillTable();
  }

  onDelete(element) {
    let mensaje: string;
    element.disabled = !element.disabled;
    if (!element.disabled) {
      mensaje = 'Habilitado Exitosamente';
    } else {
      mensaje = 'Deshabilitado Exitosamente';
    }
    switch (this.selected) {
      case 1:
        this.sibPeriodService.deleteSibsPeriod(element.id_sib_period).subscribe((res) => {
          this.mensaje = res;
          this.openSnackBar(mensaje, '');
        });
        break;
      case 2:
        this.sibPeriodService
          .deleteSibsPeriod(element.id_sib_period)
          .subscribe((res) => {
            this.mensaje = res;
            this.openSnackBar(mensaje, '');
          });

      default:
        break;
    }


  }
  deletePeriode(item){

    this.sibPeriodService.deleteSibsPeriod(item.id_sib_period ).subscribe(
      res => console.log(res)
    )
  }

  onUpdate(item) {
  }
  openSnackBar(mensaje: string, action: string) {
    this.snackBar
      .open(mensaje, action, {
        duration: 1500,
      })
      .onAction()
      .subscribe(() => {
        window.location.reload();
      });
  }

}
