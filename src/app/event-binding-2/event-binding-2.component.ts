import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding-2',
  templateUrl: './event-binding-2.component.html',
  styleUrls: ['./event-binding-2.component.css']
})
export class EventBinding2Component {

  additionResult: number = 0;

  name!:string;

  onSend(name: any) {
    console.log(name);
    console.log(name.value);

    name.style.background = "yellow";
    name.style.color = "white";
  }

  sendData(myData: string) {
    console.log(myData);
  }

  onAddtion(num1: any, num2: any) {
    let n1 = +num1;
    let n2 = +num2;
    this.additionResult = n1 + n2;
  }
}
