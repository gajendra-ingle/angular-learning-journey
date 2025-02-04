import { Component } from '@angular/core';

@Component({
  selector: 'app-inbuild-pipe',
  templateUrl: './inbuild-pipe.component.html',
  styleUrls: ['./inbuild-pipe.component.css']
})
export class InbuildPipeComponent {

  strData:string = "welcoMe To AnGulAr PiPe"

  myDate = new Date();
}
