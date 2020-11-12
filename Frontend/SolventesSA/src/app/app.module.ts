import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

//---------------------Modulos AngularMaterial-------------------
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressBarModule } from '@angular/material/progress-bar';

//-------------------COMPONENTES---------------------------------
import { AppComponent } from './app.component';
import { MenuSolventesComponent } from './components/menu-solventes/menu-solventes.component';
import { VistaListarClientesComponent } from './components/vista-listar-clientes/vista-listar-clientes.component';
import { VistaListarUsuariosComponent } from './components/vista-listar-usuarios/vista-listar-usuarios.component';
import { ListPersonComponent } from './components/list-person/list-person.component';
import { AddPersonComponent } from './components/add-person/add-person.component';
import { CommercialActivityComponent } from './components/catalogs/commercial-activity/commercial-activity.component';
import { CommercialActivityDialogComponent } from './components/catalogs/commercial-activity-dialog/commercial-activity-dialog.component';
import { SolicitudFianzaComponent } from './components/solicitud-fianza/solicitud-fianza.component';
import { EditPersonComponent } from './components/edit-person/edit-person.component';
import { DetalleSolicitudComponent } from './components/detalle-solicitud/detalle-solicitud.component';
import { SolicitudFianzaDialogComponent } from './components/solicitud-fianza-dialog/solicitud-fianza-dialog.component';
import { PeriodoEmisionComponent } from './components/periodo-emision/periodo-emision.component';
import { PeriodoDialogComponent } from './components/periodo-emision/periodo-dialog/periodo-dialog.component';
import { SolicitudPolizeShowDialogComponent } from './components/solicitud-polize-show-dialog/solicitud-polize-show-dialog.component';
import { SolicitudPolizeEditComponent } from './components/solicitud-polize-edit/solicitud-polize-edit.component';
import { ListrevisionanalystComponent } from './components/listrevisionanalyst/listrevisionanalyst.component';
import { RevisionpolicyComponent } from './components/revisionpolicy/revisionpolicy.component';
import { DatatrustparticularComponent } from './components/revisionpolicy/data/trust/datatrustparticular/datatrustparticular.component';
import { DatapolicyComponent } from './components/revisionpolicy/data/policy/datapolicy/datapolicy.component';
import { DatatrustjudicialComponent } from './components/revisionpolicy/data/trust/datatrustjudicial/datatrustjudicial.component';
import { DataagentComponent } from './components/revisionpolicy/data/agent/dataagent/dataagent.component';
import { DatabeneficiaryparticularComponent } from './components/revisionpolicy/data/beneficiary/databeneficiaryparticular/databeneficiaryparticular.component';
import { DatabeneficiaryjudicialComponent } from './components/revisionpolicy/data/beneficiary/databeneficiaryjudicial/databeneficiaryjudicial.component';
import { AttachrevisionComponent } from './components/revisionpolicy/data/attachrevision/attachrevision.component';
import { PolicycommentComponent } from './components/revisionpolicy/data/policycomment/policycomment.component';
import { LoginComponent } from './components/login/login.component';
import { MenuAnalystComponent } from './components/analyst/menu-analyst/menu-analyst.component';
import { AuthGuard } from './config/auth.guard';
import { AuthAnalystGuard } from './config/auth-analyst.guard';

const routes: Routes = [
  //-----------------RUTAS PARA PAGINA ADMINISTRACION-----------------
  {
    path: 'admin-page',
    component: MenuSolventesComponent,
    children: [
      { path: '', component: ListPersonComponent },
      { path: 'vistaclientes', component: VistaListarClientesComponent },
      { path: 'vistausuarios', component: VistaListarUsuariosComponent },
      { path: 'listarpersonas', component: ListPersonComponent },
      { path: 'agregar-persona', component: AddPersonComponent },
      {
        path: 'cat-actividad-comercial',
        component: CommercialActivityComponent,
      },
      { path: 'solicitud-poliza', component: SolicitudFianzaComponent },
      { path: 'editar-poliza/:id', component: SolicitudPolizeEditComponent },
      { path: 'agregar-solicitud', component: DetalleSolicitudComponent },
      { path: 'editar-persona/:idPerson', component: EditPersonComponent },
      { path: 'sibperiod', component: PeriodoEmisionComponent },
    ],
    canActivate: [AuthGuard],
  }, //-----------------RUTAS PARA PAGINA ANALISTA-----------------
  {
    path: 'admin-analyst',
    component: MenuAnalystComponent,
    children: [
      { path: '', component: ListrevisionanalystComponent },
      { path: 'listrevisionanalyst', component: ListrevisionanalystComponent },
      { path: 'revisionpolicy/:id_policy', component: RevisionpolicyComponent },
    ],
    canActivate: [AuthAnalystGuard],
  },
  { path: 'login', component: LoginComponent },
  //-----------------RUTA PARA REDIRIGIR AL DASHBOARD SI NO COLOCAN UNA RUTA NO EXISTENTE-----------------
  { path: '', redirectTo: '/admin-page/listarpersonas', pathMatch: 'full' },
  { path: '**', redirectTo: '/admin-page/listarpersonas', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    MenuSolventesComponent,
    VistaListarClientesComponent,
    VistaListarUsuariosComponent,
    ListPersonComponent,
    AddPersonComponent,
    CommercialActivityComponent,
    CommercialActivityDialogComponent,
    SolicitudFianzaComponent,
    EditPersonComponent,
    DetalleSolicitudComponent,
    PeriodoEmisionComponent,
    SolicitudFianzaDialogComponent,
    PeriodoDialogComponent,
    EditPersonComponent,
    SolicitudPolizeShowDialogComponent,
    SolicitudPolizeEditComponent,
    ListrevisionanalystComponent,
    RevisionpolicyComponent,
    DatatrustparticularComponent,
    DatapolicyComponent,
    DatatrustjudicialComponent,
    DataagentComponent,
    DatabeneficiaryparticularComponent,
    DatabeneficiaryjudicialComponent,
    AttachrevisionComponent,
    PolicycommentComponent,
    LoginComponent,
    MenuAnalystComponent,
  ],
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' }),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    NgMaterialMultilevelMenuModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDividerModule,
    MatSelectModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatRadioModule,
    MatCardModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    FlexLayoutModule,
    MatProgressBarModule,
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [
    CommercialActivityDialogComponent,
    SolicitudFianzaDialogComponent,
    SolicitudPolizeShowDialogComponent,
  ],
})
export class AppModule {}
