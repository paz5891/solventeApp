import { SibPeriodService } from 'src/app/services/sib-period.service';
import { SibPeriod } from './../../common/sib-period';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import swal from 'sweetalert2';
import { RevisionanalystService } from './../../services/revisionanalyst.service';
import { Revisionanalyst } from 'src/app/common/revisionanalyst';

@Component({
  selector: 'app-listrevisionanalyst',
  templateUrl: './listrevisionanalyst.component.html',
  styleUrls: ['./listrevisionanalyst.component.css']
})
export class ListrevisionanalystComponent implements OnInit {

  @Input('ELEMENT_DATA') ELEMENT_DATA!: Revisionanalyst[];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  items = new MatTableDataSource<Revisionanalyst>(this.ELEMENT_DATA);
  displayedColumns: string[] = [

    'bouquet',
    'bouquet_type',
    'policy_status',
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
    'revision'
  ];
  constructor(
    private revisionanalystService: RevisionanalystService
  ) { }

  ngOnInit(): void {
    this.fillTable();
  }

  fillTable() {
    this.revisionanalystService.getPolicy(1001 /* aqui va el valore recuperado de iniciar sesion */).subscribe(data => {
      // console.log(data);
      this.items.data = data;
      this.items.paginator = this.paginator;
      this.items.sort = this.sort;
    });
  }

  OnRevision(item): void {
    // console.log(item);
  }

}
