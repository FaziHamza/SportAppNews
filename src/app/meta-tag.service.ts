import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaTagService {

  constructor(private meta: Meta ,private http: HttpClient) {}

  getData(api:any){
    return this.http.get<any>(api);
  }
  updateOGImageTag(content: string) {
    this.meta.updateTag({ property: 'og:image', content: content });
  }
  updateOGTitleTag(content: string) {
    this.meta.updateTag({ property: 'og:title', content: content });
  }

  updateOGUrlTag(content: string) {
    this.meta.updateTag({ property: 'og:title', content: content });
  }
}
