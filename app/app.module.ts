import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { TarefaServicesService } from './services/tarefa-services.service';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BotaoComponent } from './layouts/botao/botao.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CreateTarefaComponent } from './pages/create-tarefa/create-tarefa.component';
import { HeaderComponent } from './layouts/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    BotaoComponent,
    InicioComponent,
    CreateTarefaComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    TarefaServicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
