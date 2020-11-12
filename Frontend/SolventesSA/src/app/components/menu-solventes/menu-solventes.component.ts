import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-menu-solventes',
  templateUrl: './menu-solventes.component.html',
  styleUrls: ['./menu-solventes.component.css'],
})
export class MenuSolventesComponent implements OnInit {
  /*
    label: '' -> es el texto que se mostrara en el item del menu
    icon: '' -> es el icono que se muestra en el item, pueden buscar en https://material.io/resources/icons/?style=baseline
    link: '' -> es la ruta a la que se navegara cuando se presione el item.
   */
  appitems = [
    {
      label: 'Personas',
      icon: 'group',
      items: [
        //Sub rutas del item Persona
        {
          label: 'Clientes',
          icon: 'person',
          link: '/admin-page/vistaclientes',
        },
        {
          //sustituir link por la vista correspondiente a usuarios
          label: 'Usuarios',
          icon: 'person',
          link: '/admin-page/vistausuarios',
        },
        {
          //sustituir link por la vista correspondiente a personas
          label: 'Todos',
          icon: 'person',
          link: '/admin-page/listarpersonas',
        },
      ],
    },
    {
      label: 'Catálogos',
      icon: 'book',
      items: [
        {
          label: 'Actividad comercial',
          icon: 'store',
          link: '/admin-page/cat-actividad-comercial',
        },
      ],
    },
    {
      label: 'Solicitudes',
      icon: 'history_edu',
      items: [
        {
          label: 'Agregar Solicitud',
          icon: 'assignment',
          link: '/admin-page/agregar-solicitud',
        },
        {
          label: 'Periodo de Emision',
          icon: 'query_builder',
          link: '/admin-page//sibperiod',
        },
        {
          label: 'Solicitudes',
          icon: 'assignment',
          link: '/admin-page/solicitud-poliza',
        },
      ],
    },
  ];

  //parametros que modifican el aspecto de los items del menu de navegacion
  config = {
    paddingAtStart: true,
    interfaceWithRoute: true,
    highlightOnSelect: true,
    collapseOnSelect: true,
    useDividers: true,
    rtlLayout: false,
  };

  isAuthenticated: boolean;
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.isAuthenticated = true;
  }

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
}
