import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsFormComponent } from './components/products-form/products-form.component';
import { ProductsListComponent } from './components/products-list/products-list.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/products',
  pathMatch: 'full'
  
},{
  path: 'products',
  component: ProductsListComponent
},{
  path: 'formulario',
  component: ProductsFormComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
