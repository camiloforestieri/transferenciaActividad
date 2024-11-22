import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CheckinComponent } from './pages/checkin/checkin.component';
import { DestinosComponent } from './pages/destinos/destinos.component';
import { MillasComponent } from './pages/millas/millas.component';
import { PromocionesComponent } from './pages/promociones/promociones.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    CheckinComponent,
    DestinosComponent,
    MillasComponent,
    PromocionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
