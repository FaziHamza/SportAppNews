import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { SharedModule } from '../../../../shared/modules/shared.module';
import { ApiService } from '../../../../api.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../../../theme-service.service';
import { isPlatformBrowser } from '@angular/common';

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

  constructor(
    public route: ActivatedRoute,
    public api: ApiService,
    private router: Router,
    public themeService: ThemeService,
    @Inject(PLATFORM_ID) private platformId: Object
    ) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      const keyword = params['keyword'] || 'Dressyr'; // Use 'Dressyr' as default if keyword is not present
      this.keywords = keyword
      this.api.keyword = keyword

      this.handleFetchNewsData(keyword);
      if (isPlatformBrowser(this.platformId)) {
        let favouriteNews: any = localStorage.getItem('favMenu');
        this.themeService.favouriteNews11 = favouriteNews ? JSON.parse(favouriteNews) : [];
  
        // show and hide video and pordcast buttons
        const subtopicId = localStorage.getItem('subtiopicId');
        this.api.CheckVideoStatus(subtopicId).subscribe((res) => {
          debugger;
          this.status = res
          this.status = this.status.data
  
          this.videoStatus = this.status.videoHighlight
          this.pordCastStatus = this.status.videoPodcast
        });
      }

    });
    this.api.GetTopicWithSubTopic().subscribe(res => {
      this.menuItems = res.menuItems;
    });
  }

  videoHighlight() {
    this.router.navigate(['video']);
  }

  PodCastHighlight() {
    this.router.navigate(['podcast']);
  }

  handleFetchNewsData(keyword: string): void {
    this.api.getNews(keyword).subscribe((data: any) => {
      this.fullData = data;
      if (this.fullData) {
        this.newsData = data;
        this.firstRecord = this.newsData.splice(0, 1)[0];
        this.nextThreeRecords = this.newsData.splice(0, 3);
      }
    });
  }

  MoveToNews(keyword: any) {
    this.router.navigate(['news', keyword])
  }
  
  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
}
