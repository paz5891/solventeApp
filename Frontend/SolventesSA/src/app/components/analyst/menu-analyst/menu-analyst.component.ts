import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-menu-analyst',
  templateUrl: './menu-analyst.component.html',
  styleUrls: ['./menu-analyst.component.css'],
})
export class MenuAnalystComponent implements OnInit {
  isAuthenticated: boolean;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private _loginService: LoginService
  ) {
    this._loginService.isAuthenticated.subscribe(
      (isAuthenticated: boolean) => (this.isAuthenticated = isAuthenticated)
    );
  }

  async ngOnInit() {
    this.isAuthenticated = this._loginService.checkAuthenticated();
  }

  appitems = [
    {
      label: 'solicitudes',
      icon: 'history_edu',
      link: '/admin-analyst/listrevisionanalyst',
    },
  ];

  config = {
    paddingAtStart: true,
    interfaceWithRoute: true,
    highlightOnSelect: true,
    collapseOnSelect: true,
    useDividers: true,
    rtlLayout: false,
  };

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  logout() {
    this._loginService.logout();
  }
}
