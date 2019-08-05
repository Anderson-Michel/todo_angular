import { Component, OnInit } from '@angular/core';

import { TarefaServicesService } from '../../services/tarefa-services.service';
import { Tarefa } from '../../interfaces/tarefa';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  tarefas: Tarefa[];
  fechar:boolean = false;
  id:number;
  tarefa: Tarefa = {
    id: null,
    status: 0,
    name: '',
    description: '',
  }
  constructor(private service: TarefaServicesService) { }

  ngOnInit() {
    this.service.list()
      .subscribe((data) => this.tarefas = data);
  }

  concluir(data) {
    this.fechar = !this.fechar;
    this.id = data.id;
    this.tarefa = data;
  }

  close() {
    this.fechar = !this.fechar;
  }

  finalizar(){
    this.tarefa.status = 1;
    this.service.concluindo(this.tarefa)
      .subscribe(data => this.tarefa = data);
    this.fechar = !this.fechar;
  }

}
