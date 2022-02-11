import { MatInputModule} from '@angular/material/input';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { SidebarDirective } from './sidebar.directive';
import { DetalleProductosComponent } from './detalle-productos/detalle-productos.component';
import { PerfilComponent } from './perfil/perfil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MovimientosComponent } from './movimientos/movimientos.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransferenciasComponent } from './transferencias/transferencias.component';
import { InterbancariasComponent } from './interbancarias/interbancarias.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContenidoComponent,
    CabeceraComponent,
    SidebarDirective,
    DetalleProductosComponent,
    PerfilComponent,
    MovimientosComponent,
    TransferenciasComponent,
    InterbancariasComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
