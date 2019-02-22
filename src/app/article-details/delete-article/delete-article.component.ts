import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article, ArticleDetailsResolverService } from '../../models';

@Component({
  selector: 'app-delete-article',
  templateUrl: './delete-article.component.html',
  styleUrls: ['./delete-article.component.css']
})
export class DeleteArticleComponent implements OnInit {
  public article: Article;
  constructor(private articleDetailsResolverService: ArticleDetailsResolverService,
    private httpClient: HttpClient) { }

  ngOnInit() {
    this.article = this.articleDetailsResolverService.getSelectedArticle();
  }

  public deleteArticle() {
    const id = this.article.id;
    const user = (document.getElementById('username') as HTMLTextAreaElement).value;
    const pass = (document.getElementById('password') as HTMLTextAreaElement).value
    const url = `http://localhost:3000/news/${id}?username=${user}&password=${pass}`;
    return this.httpClient.delete(url).subscribe();
  }

}
