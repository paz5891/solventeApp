import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RevisionanalystService } from './../../../../services/revisionanalyst.service';
import { Attachpolicy } from './../../../../common/attachpolicy';
import { Commentattachmentpolicy } from './../../../../common/commentattachmentpolicy';

@Component({
  selector: 'app-attachrevision',
  templateUrl: './attachrevision.component.html',
  styleUrls: ['./attachrevision.component.css']
})
export class AttachrevisionComponent implements OnInit {

  @Input() attach: Attachpolicy[];
  comment: Commentattachmentpolicy[];
  url;
  document;
  mensaje;
  formcomment: FormGroup;
  id_policy: number;
  id_attachment_policy: number;
  constructor(
    private _sanitizationService: DomSanitizer,
    private revisionanalystService: RevisionanalystService,
    private snackBar: MatSnackBar,
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.document = true;
    this.formcomment = this._formBuilder.group({
      comment: [null, Validators.required]
    });
  }

  OnOpen(item: Attachpolicy): void {
    this.id_policy = item.id_policy;
    this.id_attachment_policy = item.id_attachment_policy;
    if ((/\.(jpg|jpeg|png|gif)$/i).test(item.attachment)) {
      this.url = this._sanitizationService.bypassSecurityTrustUrl(item.attachment);
      this.document = false;
    } else {
      this.url = this._sanitizationService.bypassSecurityTrustResourceUrl('https://docs.google.com/viewer?url=' + item.attachment + '&embedded=true');
      this.document = true;
    }
    this.GetComment();
  }

  Document(): string {
    console.log(this.url);
    return this.url;
  }

  onCheckattach(item: Attachpolicy): void {
    item.check = !item.check;
    if (!item.check) {
      this.mensaje = 'Se ha Desmarcado como Revisado';
    } else {
      this.mensaje = 'Se ha Marcado como Revisado';
    }
    this.revisionanalystService.ChangeCheckAttach(item.id_attachment_policy).subscribe(
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

  onCheckcattachomment(item: Commentattachmentpolicy): void {
    item.check = !item.check;
    if (!item.check) {
      this.mensaje = 'Se ha Desmarcado como Revisado';
    } else {
      this.mensaje = 'Se ha Marcado como Revisado';
    }
    this.revisionanalystService.ChangeCheckAttachcomment(item.id_comment).subscribe(
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
      this.revisionanalystService.PostCommentAttach({
        id_policy: this.id_policy,
        id_user: 1001,
        id_attachment_policy: this.id_attachment_policy,
        comment: this.formcomment.value.comment
      }).subscribe(
        (res) => {
          this.GetComment();
        }
      );
    }
  }
  GetComment(): void {
    this.revisionanalystService.GetCommentAttach(this.id_attachment_policy).subscribe(
      (res) => {
        this.comment = res;
      }
    );
  }
}
