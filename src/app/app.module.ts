import { NgModule, LOCALE_ID } from '@angular/core';
// LOCALE_ID maneja la localizacion de la aplicacion
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import locales from '@angular/common/locales/es';
import localfr from '@angular/common/locales/fr';

//Funcion para cambiar el formato de hora a español col
registerLocaleData(locales);
registerLocaleData(localfr);


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    ContrasenaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide:LOCALE_ID,
    useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
