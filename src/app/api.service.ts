import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseurl = 'https://sportifiedspot.com';
  newsBaseUrl = 'https://www.sportspotsverige.se/'

  constructor(private http: HttpClient) { }
  keyword: any

  getNews(keyword: string): Observable<any> {
    const url = `${this.newsBaseUrl}/V4/api/news/getNewsByTeam?keyword=${keyword}&lang=sv&sport=football&limit=12`;
    this.keyword = keyword;
    return this.http.get(url);
  }
  getNewsbyTeam(keyword: string, id: string): Observable<any> {
    const url = `${this.newsBaseUrl}V4//api/news/getNewsByTeamById?newsId=${id}&lang=sv`;
    this.keyword = keyword;
    return this.http.get(url);
  }

  GetTopicWithSubTopic(): Observable<any> {
    return this.http.get(this.baseurl + `//api/Topic/GetTopicWithSubTopic?regionId=fc72efe0-7ba9-49bf-95a5-08dbd95a31db`)
  }
  CheckVideoStatus(id: any) {
    const url = `${this.baseurl}/api/Subtopic/GetVideoStatusBySubtopicId?id=${id}`
    return this.http.get(url)
  }

  GetVideoHighLight(id: any) {
    const url = `${this.baseurl}//api/VideoHighlight/GetVideoHighlightBySubtopicIdonly?subtopicId=${id}`
    return this.http.get(url);
  }

  getPodCast(id: any) {
    const url = `${this.baseurl}//api/VideoPodcast/GetVideoPodcastBySubtopicIdonly?subtopicId=${id}`
    return this.http.get(url);
  }



}
