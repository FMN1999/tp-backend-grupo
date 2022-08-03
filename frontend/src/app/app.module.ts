import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { HttpClientModule } from '@angular/common/http';
import { RopasComponent } from './ropas/ropas.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent
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
