import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MetaTagService {

  constructor(private meta: Meta ,private http: HttpClient) {}

  getData(api: any): Observable<any> {
    return this.http.get<any>(api);
  }
  
  updateOGImageTag(content: string) {
    this.meta.updateTag({ property: 'og:image', content: content });
  }
  updateOGTitleTag(content: string) {
    this.meta.updateTag({ property: 'og:title', content: content });
  }

  updateOGUrlTag(content: string) {
    this.meta.updateTag({ property: 'og:url', content: content });
  }

}
