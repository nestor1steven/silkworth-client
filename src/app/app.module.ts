import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Mofulos
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LibrosComponent } from './pages/libros/libros.component';
import { MeditacionComponent } from './pages/meditacion/meditacion.component';
import { PsicologiaComponent } from './pages/psicologia/psicologia.component';
import { RouterModule } from '@angular/router';
import { LibrosDescripcionComponent } from './pages/libros-descripcion/libros-descripcion.component';
import { MostrarCarritoComponent } from './pages/mostrar-carrito/mostrar-carrito.component';
import { HacerPedidoComponent } from './pages/hacer-pedido/hacer-pedido.component';
import { PedidoConfirmadoComponent } from './pages/pedido-confirmado/pedido-confirmado.component';
import { MisPedidosComponent } from './pages/mis-pedidos/mis-pedidos.component';
import { CarritoVComponent } from './pages/carrito-v/carrito-v.component';
import { QuisasComponent } from './pages/quisas/quisas.component';
import { MeditacionDescripcionComponent } from './pages/meditacion-descripcion/meditacion-descripcion.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NopagefoundComponent,
    InicioComponent,
    HeaderComponent,
    FooterComponent,
    LibrosComponent,
    MeditacionComponent,
    PsicologiaComponent,
    LibrosDescripcionComponent,
    MostrarCarritoComponent,
    HacerPedidoComponent,
    PedidoConfirmadoComponent,
    MisPedidosComponent,
    CarritoVComponent,
    QuisasComponent,
    MeditacionDescripcionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
