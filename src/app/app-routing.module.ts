import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ImovelAddComponent } from './imovel-add/imovel-add.component';
import { ImovelGetComponent } from './imovel-get/imovel-get.component';
import { ImovelEditComponent } from './imovel-edit/imovel-edit.component';
import { CorretorGetComponent } from './corretor-get/corretor-get.component';
import { CorretorAddComponent } from './corretor-add/corretor-add.component';
import { CorretorEditComponent } from './corretor-edit/corretor-edit.component';

const routes: Routes = [
  {
    path: 'imovel',
    component: ImovelGetComponent
  },
  {
    path: 'imovel/add',
    component: ImovelAddComponent
  },
  {
    path: 'imovel/edit/:id',
    component: ImovelEditComponent
  },
  {
    path: 'corretores',
    component: CorretorGetComponent
  },
  {
    path: 'corretores/add',
    component: CorretorAddComponent
  },
  {
    path: 'corretores/edit/:id',
    component: CorretorEditComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
