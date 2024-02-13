import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseurl = 'https://sportifiedspot.com';
  newsBaseUrl='https://www.sportspotsverige.se/'
  constructor(private http: HttpClient) { }

 
  getRegin(): Observable<any>{
    return this.http.get(this.baseurl + '/api/Region/GetRegion');

  }
  getNews(keyword: string): Observable<any> {
    const url = `${this.newsBaseUrl}/V4/api/news/getNewsByTeam?keyword=${keyword}&lang=sv&sport=football&limit=12`;
   
    
    return this.http.get(url);
  }
  GetTopicWithSubTopic(): Observable<any>{
  
    return this.http.get(this.baseurl + `//api/Topic/GetTopicWithSubTopic?regionId=fc72efe0-7ba9-49bf-95a5-08dbd95a31db`)
  }



}
