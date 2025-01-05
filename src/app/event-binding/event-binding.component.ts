import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {

  isClicked:boolean=true
  onClick() : void{
    if (this.isClicked) {
      console.log("onClick event occured");
    }
    this.isClicked=false
  }


  imgUrl:string="../../assets/Image1.jpg"

  onImgClick():void{
    console.log("Image click")
  }
}
