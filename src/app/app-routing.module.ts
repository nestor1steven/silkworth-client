import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { LibrosComponent } from './pages/libros/libros.component';
import { MeditacionComponent } from './pages/meditacion/meditacion.component';
import { PsicologiaComponent } from './pages/psicologia/psicologia.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { LibrosDescripcionComponent } from './pages/libros-descripcion/libros-descripcion.component';
import { MostrarCarritoComponent } from './pages/mostrar-carrito/mostrar-carrito.component';
import { HacerPedidoComponent } from './pages/hacer-pedido/hacer-pedido.component';
import { PedidoConfirmadoComponent } from './pages/pedido-confirmado/pedido-confirmado.component';
import { MisPedidosComponent } from './pages/mis-pedidos/mis-pedidos.component';
import { CarritoVComponent } from './pages/carrito-v/carrito-v.component';
import { MeditacionDescripcionComponent } from './pages/meditacion-descripcion/meditacion-descripcion.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'libross', component: LibrosComponent},
  {path: 'libros-descripcion', component: LibrosDescripcionComponent},
  {path: 'mostrar_carrito', component: MostrarCarritoComponent},
  {path: 'hacer-pedido', component: HacerPedidoComponent},
  {path: 'pedido-confirmado', component: PedidoConfirmadoComponent},
  {path: 'mis-pedidos', component: MisPedidosComponent},
  {path: 'meditacion', component: MeditacionComponent},
  {path: 'psicologia', component: PsicologiaComponent},
  {path: 'carrito-v', component: CarritoVComponent},
  {path: 'meditacion-descripcion', component: MeditacionDescripcionComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: '**', component: NopagefoundComponent},
];

@NgModule({
  declarations: [

  ],
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot( routes )
  ]
})
export class AppRoutingModule { }
