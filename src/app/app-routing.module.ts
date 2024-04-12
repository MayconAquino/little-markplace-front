import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './componentes/product/product.component';
import { PeopleComponent } from './componentes/people/people.component';

const routes: Routes = [
  { path: '',
  redirectTo: '',
  pathMatch: 'full'
},
  { path: 'product', component: ProductComponent },
  { path: 'people', component: PeopleComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
