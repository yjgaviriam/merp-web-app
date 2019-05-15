import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SubstationsComponent } from './components/substations/substations.component';
import { UsersComponent } from './components/users/users.component';
import { CircuitsComponent } from './components/circuits/circuits.component';
import { CitiesComponent } from './components/cities/cities.component';
import { ProjectsComponent } from './components/projects/projects.component';

/**
 * Rutas del modulo principal
 */
const routes: Routes = [
  { path: '', redirectTo: 'projects', pathMatch: 'full' },
  { path: 'circuits', component: CircuitsComponent },
  { path: 'cities', component: CitiesComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'substations', component: SubstationsComponent },
  { path: 'users', component: UsersComponent },
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
