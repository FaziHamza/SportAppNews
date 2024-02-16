import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../../shared/modules/shared.module';
import { ApiService } from '../../../../api.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../../../theme-service.service';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [SharedModule, HttpClientModule, CommonModule, RouterModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent implements OnInit {

  private routeSub!: Subscription;
  fullData: any
  newsData: any
  firstRecord: any;
  nextThreeRecords: any;
  keywords: any
  data: any;
  status: any
  videoStatus: boolean = false;
  pordCastStatus: boolean = false;
  menuItems: any = [];

  constructor(public route: ActivatedRoute, public api: ApiService, private router: Router,
    public themeService: ThemeService) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      const keyword = params['keyword'] || 'Dressyr'; // Use 'Dressyr' as default if keyword is not present
      console.log('keyword', keyword);
      this.keywords = keyword
      this.api.keyword = keyword
      console.log(this.keywords);

      this.handleFetchNewsData(keyword);
      let favouriteNews: any = localStorage.getItem('favMenu');
      this.themeService.favouriteNews11 = favouriteNews ? JSON.parse(favouriteNews) : [];

      // show and hide video and pordcast buttons
      const subtopicId = localStorage.getItem('subtiopicId');
      console.log('subtopicId:', subtopicId);
      this.api.CheckVideoStatus(subtopicId).subscribe((res) => {
        debugger;
        console.log('status:', res);
        this.status = res
        this.status = this.status.data
        console.log('status:', this.status);

        this.videoStatus = this.status.videoHighlight
        console.log("videoStatus:", this.videoStatus);
        this.pordCastStatus = this.status.videoPodcast
        console.log("portCastStatusthis", this.pordCastStatus);
      });
    });
    this.api.GetTopicWithSubTopic().subscribe(res => {
      this.menuItems = res.menuItems;
      console.log(this.menuItems, "bottomNav")
    });

  }
  videoHighlight() {

    this.router.navigate(['video']);
  }
  PordCastHighlight() {

    this.router.navigate(['podcast']);
  }
  handleFetchNewsData(keyword: string): void {
    this.api.getNews(keyword).subscribe((data: any) => {
      // Handle the fetched news data here
      this.fullData = data;
      console.log('full data', this.fullData);
      if (this.fullData) {
        this.newsData = data;
        console.log("data2:", this.newsData);

        this.firstRecord = this.newsData.splice(0, 1)[0];
        console.log(this.firstRecord);

        this.nextThreeRecords = this.newsData.splice(0, 3);
        console.log(this.nextThreeRecords);


        console.log('fetuch data', keyword, ":", this.newsData);
      }


    });
  }
  MoveToNews(keyword: any) {
    console.log(keyword);
    this.router.navigate(['news', keyword])
  }
  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }



}
