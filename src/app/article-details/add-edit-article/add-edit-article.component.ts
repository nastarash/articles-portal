import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'add-edit-article',
  templateUrl: './add-edit-article.component.html',
  styleUrls: ['./add-edit-article.component.css']
})
export class AddEditArticleComponent {

  constructor(private httpClient: HttpClient) { }

  public postArticle() {
    const url = 'http://localhost:3000/news';
    const body = { title: document.getElementById('title').value,
    author: 'User User',
    content: document.getElementById('content').value,
    urlToImage: document.getElementById('imageUrl').value,
    publishedAt: new Date()
   };
    return this.httpClient.post(url, body).subscribe();
  }
}
