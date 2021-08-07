import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NaveComponent } from './components/nave/nave.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CardComponent } from './components/card/card.component';
import { TittleComponent } from './components/tittle/tittle.component';

@NgModule({
  declarations: [
    AppComponent,
    
    NaveComponent,
    FooterComponent,
    InicioComponent,
    TiendaComponent,
    NosotrosComponent,
    ContactoComponent,
    CardComponent,
    TittleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
