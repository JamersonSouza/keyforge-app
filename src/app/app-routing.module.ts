import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/keyforge-generate/pages/home/home.component';
import { ListComponent } from './modules/keyforge-generate/pages/list/list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'list',
    component: ListComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
