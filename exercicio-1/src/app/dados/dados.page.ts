import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.page.html',
  styleUrls: ['./dados.page.scss'],
})
export class DadosPage implements OnInit {

  private user : Object;

  constructor() {
    this.user = {
      name: 'USC',
      age: 31,
      phone: '(14) 12345678',
      mail: 'teste@usc.br'
    };
  }

  ngOnInit() {
  }

}
