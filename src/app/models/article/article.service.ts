import { Injectable } from '@angular/core';
import { Article } from './article.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ArticleService {

  constructor(private httpClient: HttpClient) { }

  public getArticles(sourceId: string): Article[] {
    if (sourceId !== 'myApi') {
      const url = `https://newsapi.org/v2/top-headlines?sources=${sourceId}&apiKey=e25f68463ae0441a947aadda3a0fa55c`;
      const result: Article[] = [];
      this.httpClient.get(url).subscribe((data: []) => {
        Object.values(data.articles).forEach(element => {
          const article = new Article();
          article.author = element.author || '';
          article.title = element.title || '';
          article.description = element.description || '';
          article.url = element.url || '';
          article.urlToImage = element.urlToImage || '';
          article.publishedAt = element.publishedAt || '';
          article.content = element.content || '';
          result.push(article);
        });
      });
      return result;
    } else {
      const url = `http://localhost:3000/news`;
      const result: Article[] = [];
      this.httpClient.get(url).subscribe((data: []) => {
        data.forEach(element => {
          const article = new Article();
          article.author = element.author || '';
          article.title = element.title || '';
          article.description = element.description || '';
          article.url = element.url || '';
          article.urlToImage = element.urlToImage || '';
          article.publishedAt = element.publishedAt || '';
          article.content = element.content || '';
          result.push(article);
        });
      });
      return result;
    }
  }
}
