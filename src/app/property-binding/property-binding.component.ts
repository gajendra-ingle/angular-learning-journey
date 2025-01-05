import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {

  name:string="Gajendra Ingle";

  imgUrl:string="../../assets/Image1.jpg"

  isHidden:boolean=false;
}
