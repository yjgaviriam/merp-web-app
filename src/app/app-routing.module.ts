import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SubstationsComponent } from './components/substations/substations.component';

/**
 * Rutas del modulo principal
 */
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'substations', component: SubstationsComponent },
  { path: '**', component: NotFoundComponent }
];

/**
 * Modulo de rutas para el modulo principal
 *
 * @author Jhonier Gaviria M. - May. 09-2019
 * @version 1.0.0
 */
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
