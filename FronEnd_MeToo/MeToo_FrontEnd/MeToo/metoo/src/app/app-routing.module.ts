import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { UsuarioEditComponent } from './edit/usuario-edit/usuario-edit.component';
import { EntrarComponent } from './entrar/entrar.component';
import { MenuComponent } from './menu/menu.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { RodapeComponent } from './rodape/rodape.component';
import { TemaComponent } from './tema/tema.component';

const routes: Routes = [

  {path: '', redirectTo: 'entrar', pathMatch: 'full'},
  
  {path: 'menu', component: MenuComponent},
  {path: 'entrar', component: EntrarComponent},

  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'pagina-inicial', component: PaginaInicialComponent},
  {path: 'rodape', component: RodapeComponent},

  {path: 'tema', component: TemaComponent},
  {path: 'tema-edit', component: TemaEditComponent},
  {path: 'tema-delete', component: TemaDeleteComponent},

  {path: 'postagem-edit', component: PostagemEditComponent},
  {path: 'postagem-delete', component: PostagemDeleteComponent},
  {path: 'usuario-edit/:id', component: UsuarioEditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
