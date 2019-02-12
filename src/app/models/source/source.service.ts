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
    this.httpClient.get(url).subscribe((data: any) => {
      Object.values(data.sources).forEach(element => {
        const source = new Source();
        source.name = element.name || '';
        source.id = element.id || '';
        result.push(source);
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
