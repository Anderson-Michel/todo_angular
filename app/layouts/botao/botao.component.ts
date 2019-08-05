import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent implements OnInit {
  //notacao para permitir que a variavel receba entrada de dado externo
  @Input()
  color = 'color2';
  @Input()
  botao = 'botao1';
  constructor() { }

  ngOnInit() {
  }

}
