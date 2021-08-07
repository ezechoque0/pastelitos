import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaveComponent } from './components/nave/nave.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioTiendaNosotrosContactoComponent } from './pages/inicio-tienda-nosotros-contacto/inicio-tienda-nosotros-contacto.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    NaveComponent,
    FooterComponent,
    InicioTiendaNosotrosContactoComponent,
    InicioComponent,
    TiendaComponent,
    NosotrosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
