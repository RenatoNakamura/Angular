import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent implements OnInit {

  url: string = "www.google.com.br";
  cursoAngular: boolean = true;
  urlImage = "https://i0.wp.com/www.fatosdesconhecidos.com.br/wp-content/uploads/2017/07/luffy-one-piece-capa.jpg?resize=900,420";
  
  getCurtirCurso(){
    return true;
  }

  getValor(){
    return 1;
  }

  constructor() { }

  ngOnInit() {
  }

}
