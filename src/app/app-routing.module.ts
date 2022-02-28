import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HotelsListComponent } from './hotels-list/hotels-list.component';

const routes: Routes = [
  { path: "home", component: HotelsListComponent },
  { path: 'welcome', component: AppComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
