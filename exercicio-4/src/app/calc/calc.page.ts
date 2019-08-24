import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.page.html',
  styleUrls: ['./calc.page.scss'],
})
export class CalcPage implements OnInit {

  result : string;

  constructor() {
    this.result = "";
  }

  calcClick(el) : void {
    switch (el) {
      case "AC": 
        this.result = '';
        break;
      case "=": 
        try {
          this.result = eval(this.result);
        } catch(e) {
          this.result = "error";
        }
        
        break;
      default:
        this.result += el;
    }
  }

  ngOnInit() {
  }

}
