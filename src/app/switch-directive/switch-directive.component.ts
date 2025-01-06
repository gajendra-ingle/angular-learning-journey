import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-directive',
  templateUrl: './switch-directive.component.html',
  styleUrls: ['./switch-directive.component.css']
})
export class SwitchDirectiveComponent {

  choice: string = '';

  onSend(colorName: string) {
    this.choice = colorName;
  }
}
