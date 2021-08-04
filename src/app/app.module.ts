import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImovelAddComponent } from './imovel-add/imovel-add.component';
import { ImovelGetComponent } from './imovel-get/imovel-get.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ImovelService } from './imovel.service'
import { FormsModule } from '@angular/forms';
import { ImovelEditComponent } from './imovel-edit/imovel-edit.component';
import { CorretorGetComponent } from './corretor-get/corretor-get.component';
import { CorretorAddComponent } from './corretor-add/corretor-add.component';
import { CorretorServiceService } from './corretor-service.service';
import { CorretorEditComponent } from './corretor-edit/corretor-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    ImovelAddComponent,
    ImovelGetComponent,
    ImovelEditComponent,
    CorretorGetComponent,
    CorretorAddComponent,
    CorretorEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ImovelService,
    CorretorServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
