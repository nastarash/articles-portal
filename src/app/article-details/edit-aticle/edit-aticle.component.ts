import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article, ArticleDetailsResolverService } from '../../models';

@Component({
  selector: 'app-edit-aticle',
  templateUrl: './edit-aticle.component.html',
  styleUrls: ['./edit-aticle.component.css']
})
export class EditAticleComponent implements OnInit {
  public article: Article;
  constructor(private articleDetailsResolverService: ArticleDetailsResolverService, 
    private httpClient: HttpClient) { }

  ngOnInit() {
    this.article = this.articleDetailsResolverService.getSelectedArticle();
    console.log(this.article._id)
  }

  public editArticle() {
    const user = document.getElementById('username');
    const pass = document.getElementById('password');
    const url = `http://localhost:3000/news/5c6570b0e4c36f1e1c5937bd?username=${user}&password=${pass}`;
    const body = {
      title: (document.getElementById('title') as HTMLTextAreaElement).value,
      author: (document.getElementById('author') as HTMLTextAreaElement).value,
      content: (document.getElementById('content') as HTMLTextAreaElement).value,
      urlToImage: (document.getElementById('imageUrl') as HTMLTextAreaElement).value,
      publishedAt: (document.getElementById('publishedAt') as HTMLTextAreaElement).value
    };
    return this.httpClient.put(url, body).subscribe();
  }

}
