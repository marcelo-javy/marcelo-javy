
import { RouterModule, Routes } from '@angular/router';
import { DetalleProductosComponent } from './detalle-productos/detalle-productos.component';
import {ContenidoComponent} from './contenido/contenido.component';
import {PerfilComponent} from './perfil/perfil.component';
import {MovimientosComponent} from './movimientos/movimientos.component';
import {TransferenciasComponent} from './transferencias/transferencias.component';
import {InterbancariasComponent} from './interbancarias/interbancarias.component'
const APP_ROUTES: Routes = [
  { path: 'productos', component: DetalleProductosComponent },
  { path: 'contenedor', component: ContenidoComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'movimientos', component: MovimientosComponent },
  { path: 'transferencias', component: TransferenciasComponent },
  { path: 'interbancarias', component: InterbancariasComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'contenedor' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});
