import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { RolComponent } from './components/rol/rol.component';
import { CategoriaComponent } from './inventario/componets/categoria/categoria.component';
import { ProductoComponent } from './inventario/componets/producto/producto.component';
import { ListaPedidoComponent } from './pedido/components/lista-pedido/lista-pedido.component';
import { NuevoPedidoComponent } from './pedido/components/nuevo-pedido/nuevo-pedido.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: '', redirectTo: 'perfil', pathMatch: 'full' },
      { path: 'perfil', component: PerfilComponent },
      { path: 'categoria', component: CategoriaComponent },
      { path: 'producto', component: ProductoComponent },
      { path: 'pedido', component: ListaPedidoComponent },
      { path: 'pedido/nuevo', component: NuevoPedidoComponent },
      { path: 'cliente', component: ClienteComponent },
      { path: 'usuario', component: UsuarioComponent },
      { path: 'rol', component: RolComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
