import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PriceGridComponent } from './price-grid/component/price-grid/price-grid.component';

const routes: Routes = [
  { path: '', component: PriceGridComponent },         // Default route
  { path: 'price-grid', component: PriceGridComponent } // URL: /price-grid
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 
  
 }
