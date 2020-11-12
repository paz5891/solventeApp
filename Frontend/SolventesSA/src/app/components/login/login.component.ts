import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/common/user';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hide = true;
  selectedRol: string = 'analyst';

  constructor(
    private _formBuilder: FormBuilder,
    private _loginService: LoginService,
    private _router: Router,
    private _snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.buildForm();
    if (this._loginService.isAuthenticated.value) {
      this._router.navigate(['']);
    }
  }

  buildForm() {
    this.loginForm = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const user = new User();
      user.username = this.loginForm.controls['username'].value;
      user.password = this.loginForm.controls['password'].value;
      if (this.selectedRol === 'analyst') {
        this._loginService.loginAnalyst(user).subscribe((res) => {
          if (res.message == 'ACCESS LOGIN CORRECT') {
            localStorage.setItem('id_user', res.id_user.toString());
            this._router.navigateByUrl('/admin-analyst');
          } else {
            this._snackbar.open('Revisa tu usuario y contraseña', '', {
              duration: 1500,
            });
          }
        });
      } else if (this.selectedRol == 'agent') {
        this._loginService.loginAgent(user).subscribe((res) => {
          if (res.message == 'ACCESS LOGIN CORRECT') {
            localStorage.setItem('id_user', res.id_user.toString());
            this._router.navigateByUrl('/admin-page');
          } else {
            this._snackbar.open('Revisa tu usuario y contrase√±a', '', {
              duration: 1500,
            });
          }
        });
      } else {
        this._snackbar.open('Proximamente', '', { duration: 1500 });
      }
    }
  }
}
