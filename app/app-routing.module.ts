import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './pages/inicio/inicio.component';
import { CreateTarefaComponent } from './pages/create-tarefa/create-tarefa.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: InicioComponent },
  { path: 'tarefas/post', component: CreateTarefaComponent },
  { path: 'tarefas/:id/edit', component: CreateTarefaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
