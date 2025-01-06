import { Component } from '@angular/core';

@Component({
  selector: 'app-for-directive',
  templateUrl: './for-directive.component.html',
  styleUrls: ['./for-directive.component.css']
})
export class ForDirectiveComponent {

  arrProduct = [
    {
      name: "iPhone",
      price: 100000,
      qty: 2
    },
    {
      name: "Samsung",
      price: 750000,
      qty: 2
    }
    ,
    {
      name: "Mi",
      price: 20000,
      qty: 2
    }
    ,
    {
      name: "Vivo",
      price: 10000,
      qty: 2
    }
    ,
    {
      name: "Nokia",
      price: 5000,
      qty: 2
    }
  ];

}
