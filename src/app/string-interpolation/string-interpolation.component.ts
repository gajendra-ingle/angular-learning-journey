import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent {

  name:string='Gajendra Ingle';

  num:number=10;

  myImg:string="../../assets/Image1.jpg";

  check:boolean=true;
  
}
