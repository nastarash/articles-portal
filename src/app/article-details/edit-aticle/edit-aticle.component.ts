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
  }

  public editArticle() {
    const id = this.article.id;
    const user = (document.getElementById('username') as HTMLTextAreaElement).value;
    const pass = (document.getElementById('password') as HTMLTextAreaElement).value
    const url = `http://localhost:3000/news/${id}?username=${user}&password=${pass}`;
    const body = {
      title: (document.getElementById('title') as HTMLTextAreaElement).value,
      author: (document.getElementById('author') as HTMLTextAreaElement).value,
      content: (document.getElementById('content') as HTMLTextAreaElement).value,
      urlToImage: (document.getElementById('imageUrl') as HTMLTextAreaElement).value,
      publishedAt: (document.getElementById('publishedAt') as HTMLTextAreaElement).value,
      url: (document.getElementById('url') as HTMLTextAreaElement).value,
    };
    return this.httpClient.put(url, body).subscribe();
  }
}
