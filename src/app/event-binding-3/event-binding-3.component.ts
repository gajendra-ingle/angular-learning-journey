import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding-3',
  templateUrl: './event-binding-3.component.html',
  styleUrls: ['./event-binding-3.component.css']
})
export class EventBinding3Component {

  onChange(myData: string) {

    if (myData.length >= 5) {
      alert("Character limit excced")
    } else {
      console.log("Change event occur.")
    }

  }
}
