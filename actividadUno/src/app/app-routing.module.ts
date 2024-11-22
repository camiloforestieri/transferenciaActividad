import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinosComponent } from './pages/destinos/destinos.component';
import { PromocionesComponent } from './pages/promociones/promociones.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CheckinComponent } from './pages/checkin/checkin.component';
import { MillasComponent } from './pages/millas/millas.component';

const routes: Routes = [
  { path: '', redirectTo: '/destinos', pathMatch: 'full' },
  { path: 'destinos', component: DestinosComponent },
  { path: 'promociones', component: PromocionesComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'checkin', component: CheckinComponent },
  { path: 'millas', component: MillasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
