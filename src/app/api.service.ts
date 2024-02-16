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

  // getRegin(): Observable<any>{
  //   return this.http.get(this.baseurl + '/api/Region/GetRegion');

  // }
  getNews(keyword: string): Observable<any> {
    const url = `${this.newsBaseUrl}/V4/api/news/getNewsByTeam?keyword=${keyword}&lang=sv&sport=football&limit=12`;
    this.keyword = keyword;
    return this.http.get(url);
  }
  getNewsbyTeam(keyword: string): Observable<any> {
    const url = `${this.newsBaseUrl}V4//api/news/getNewsByTeamById?newsId=${keyword}&lang=sv`;
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
    // console.log("VideHilight url",url);

    // console.log('VideHilight urlId:',id);

    return this.http.get(url);
  }

  getPodCast(id: any) {
    const url = `${this.baseurl}//api/VideoPodcast/GetVideoPodcastBySubtopicIdonly?subtopicId=${id}`
    // console.log(" podcast url",url);

    // console.log(' podcast urlId:',id);

    return this.http.get(url);
  }



}
