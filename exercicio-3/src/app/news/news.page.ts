import { Component, OnInit, Input, ViewChild } from '@angular/core';


@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  @ViewChild('title') titleInput;

  private formData : Object;
  private list : Array<Object>;

  constructor() { 
    this.formData = {
      title:  "",
      subtitle: ""
    };

    this.list = [];
  }
  

  add(item: Object) : void {
    this.list.push(item);
    this.formData = {};
    this.titleInput.setFocus();
  }

  ngOnInit() {
  }

}
