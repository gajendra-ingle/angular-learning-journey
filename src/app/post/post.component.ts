import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getDataFromBackend();
  }

  getDataFromBackend() {
    this.httpService.getPost()
      .subscribe((response) => {
        console.log(response);
      })
  }
}
