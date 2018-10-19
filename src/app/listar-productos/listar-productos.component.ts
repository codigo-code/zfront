import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {

  productList: any;
  constructor(private http: HttpClient) { }


  ngOnInit() {
    this.http.get('https://zavatecrest.herokuapp.com/getProduct/0').subscribe(x => {
      console.log(x);
      this.productList = x;
    });
  }

  // this.http.get('https://zavatecrest.herokuapp.com/getProduct/0').pipe(map((res: any) => {
  //   console.log(res);
  //   return res.json().results.map(item => {
  //     console.log(item);
  //     this.productList = item;
  //   });
  // }));
}
