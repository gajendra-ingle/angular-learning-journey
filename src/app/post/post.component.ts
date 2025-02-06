import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})

export class PostComponent implements OnInit {
  posts: any[] = [];

  id: number = 0;
  title: string = '';
  body: string = '';
  isHidden: boolean = true;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getDataFromBackend();
  }

  getDataFromBackend() {
    this.httpService.getPost().subscribe((response: any) => {
      // console.log(response);
      this.posts = response;
    });
  }

  onSend(mytitle: string, mybody: string) {
    let jsonObj = {
      title: mytitle,
      body: mybody,
    };

    this.httpService.postData(jsonObj).subscribe((response) => {
      console.log(response);
    });
  }

  onEdit(post: any) {
    this.id = post.id;
    this.title = post.title;
    this.body = post.body;
    this.isHidden = false;
  }

  onUpdate() {
    let jsonObj = {
      id: this.id,
      title: this.title,
      body: this.body,
    };

    this.httpService.updateData(jsonObj).subscribe((response) => {
      console.log(response);
    });
  }

  onDelete(id: any) {
    this.httpService.deleteData(id).subscribe((response) => {
      console.log(response);
    })
  }
}
