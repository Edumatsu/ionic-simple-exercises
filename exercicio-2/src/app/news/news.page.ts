import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  private news : Object;

  constructor() { 
    this.news = {
      image: "assets/lencois-paulista.jpg",
      title:  "Lençóis Paulista, SP",
      subtitle: "Cidade",
      content: "Fundada em 28 de abril de 1858 (161 anos), \
                Lençóis Paulista é conhecida como `Cidade do Livro`, \
                por possuir um número de livros em sua Biblioteca Municipal \
                maior do que o número de habitantes. \
                Atualmente, são mais de 150 mil livros.",
    };
  }

  ngOnInit() {
  }

}
