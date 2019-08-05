import { Component, OnInit } from '@angular/core';

import { TarefaServicesService } from '../../services/tarefa-services.service';
import { Tarefa } from '../../interfaces/tarefa';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-tarefa',
  templateUrl: './create-tarefa.component.html',
  styleUrls: ['./create-tarefa.component.css']
})
export class CreateTarefaComponent implements OnInit {
  tarefa: Tarefa = {
    id: null,
    status: 0,
    name: '',
    description: '',
  }

  checa = true;
  $message = '';

  constructor(
    private service: TarefaServicesService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if(params.hasOwnProperty('id')){
        this.service.edit(+params['id'])
          .subscribe(data => this.tarefa = data);
      }
    });
  }

  saveTarefa(event) {
    this.service.create(this.tarefa)
      .subscribe(() => this.router.navigate(['']));
  }

}
