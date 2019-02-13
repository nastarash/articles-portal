import { Injectable } from '@angular/core';
import { Source } from './source.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SourceService {

  constructor(private httpClient: HttpClient) { }

  public getSources(): Source[] {
    const url = `https://newsapi.org/v2/sources?apiKey=e25f68463ae0441a947aadda3a0fa55c&language=en&category=technology`;
    const result: Source[] = [];
    const myApi = new Source();
    myApi.id = 'myApi';
    myApi.name = 'My Api';
    this.httpClient.get(url).subscribe((data: any) => {
      Object.values(data.sources).forEach(element => {
        const source = new Source();
        source.name = element.name || '';
        source.id = element.id || '';
        result.push(source);
      });
    });
    result.push(myApi);
    return result;
  }
}
