// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailsPage } from './pages/details/details.page';
import { FavoritesPage } from './pages/favorites/favorites.page';
import { HomePage } from './pages/home/home.page';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'details/:name', component: DetailsPage },
  { path: 'favorites', component: FavoritesPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
