import { Component, OnInit, Input } from '@angular/core';
import { RevisionanalystService } from 'src/app/services/revisionanalyst.service';
import { Commentpolicy } from './../../../../common/commentpolicy';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-policycomment',
  templateUrl: './policycomment.component.html',
  styleUrls: ['./policycomment.component.css']
})
export class PolicycommentComponent implements OnInit {

  @Input() id_policy: number;
  comment: Commentpolicy[];
  formcomment: FormGroup;
  mensaje;
  constructor(
    private revisionanalystService: RevisionanalystService,
    private snackBar: MatSnackBar,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formcomment = this._formBuilder.group({
      comment: [null, Validators.required]
    });
    this.getComment(this.id_policy);
    console.log(this.id_policy)
  }

  onCheck(item: Commentpolicy): void {
    item.check = !item.check;
    if (!item.check) {
      this.mensaje = 'Se ha Desmarcado como Revisado';
    } else {
      this.mensaje = 'Se ha Marcado como Revisado';
    }
    this.revisionanalystService.ChangeChecktPolicyComment(item.id_comment).subscribe(
      () => {
        this.openSnackBar();
      },
      (error) => {
        this.mensaje = 'Algo salio mal';
        this.openSnackBar();
        console.log(error);
      }
    );
  }


  openSnackBar(): void {
    this.snackBar.open(this.mensaje, '', {
      duration: 2000,
    });
  }
  onSubmit(): void {
    if (this.formcomment.value.comment !== null) {
      this.revisionanalystService.postPolicyComment({
        id_policy: this.id_policy,
        id_user: 1001,
        comment: this.formcomment.value.comment
      }).subscribe(
        (res) => {
          this.getComment(this.id_policy);
        }
      );
    }
  }

  getComment(id: number): void {
    this.revisionanalystService.getPolicyComment(id).subscribe(
      (res) => {
        console.log(res);
        this.comment = res;
      }
    );
  }
}
