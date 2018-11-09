import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    children: []
  },
  {
    path: 'products',
    pathMatch: 'full',
    component: ProductListComponent,
    children: []
  },
  {
    path: 'products/new',
    pathMatch: 'full',
    component: CreateComponent,
    children: []
  },
  {
    path: 'products/edit/:id',
    component: EditComponent,
    children: []
  },
  // {
  //   path: '**',
  //   redirectTo: ''
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }