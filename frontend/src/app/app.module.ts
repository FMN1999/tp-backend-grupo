import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { RopasComponent } from './ropas/ropas.component';
import {RopasService} from "./ropas.service";

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    AppComponent,
    RopasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RopasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
