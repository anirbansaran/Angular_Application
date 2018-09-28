import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full',
  children: [
    { path: 'dashboard', component: HomeComponent },
  ] 
}];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule],
  declarations: []
})

export class HomeRoutingModule { }
