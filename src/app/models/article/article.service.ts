import { Injectable } from '@angular/core';
import { Article } from './article.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ArticleService {

  constructor(private httpClient: HttpClient) { }

  public getArticles(sourceId: string): Article[] {
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

    // this.spinnerService.show();
    // return <Observable<Character[]>>this.http
    //   .get(charactersUrl)
    //   .map(res => {
    //     const x = this.extractData<Character[]>(res);
    //     return this.extractData<Character[]>(res);
    //   })
    //   .catch(this.exceptionService.catchBadResponse)
    //   .finally(() => this.spinnerService.hide());
  }
}
