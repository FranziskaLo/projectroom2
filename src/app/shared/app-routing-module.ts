import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { RoomProfileComponent } from '../room-profile/room-profile.component';
import { SearchComponent } from '../search/search.component';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'room-profile/:id', component: RoomProfileComponent },
  { path: 'search', component: SearchComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
