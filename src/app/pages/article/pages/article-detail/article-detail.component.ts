import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router, RouterModule, Event as NavigationEvent } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from '../../../../api.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MetaTagService } from '../../../../meta-tag.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './article-detail.component.html',
  styleUrl: './article-detail.component.scss',
})
export class ArticleDetailComponent implements OnInit {
  private routeSub!: Subscription;
  newsData: any;
  articleId!: string;
  keyword!: string;
  articleDetails: any;
  sanitizedContent: SafeHtml | undefined;
  currentRoute!: string;
  event$: any;
  constructor(
    private route: ActivatedRoute,
    public api: ApiService,
    private sanitizer: DomSanitizer,
    private metaTagService: MetaTagService,
    private router: Router,
    private location: Location
  ) {
    this.event$ = this.router.events.subscribe(
          (event: NavigationEvent) => {
            if(event instanceof NavigationStart) {
              this.currentRoute = event.url;
            }
          });
  }


  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.keyword = params['keyword'] || 'Dressyr';
      this.articleId = params['id'];
      this.handleFetchArticleData(this.keyword, this.articleId);
    });
  }

  handleFetchArticleData(keyword: string, id: string): void {
    this.api.getNewsbyTeam(keyword, id).subscribe((res: any) => {
      this.newsData = res[0];
      const ogImageUrl = this.newsData._medias[1].href;
      const ogTitle = this.newsData._title;
      const ogUrl = location.href;
      this.metaTagService.updateOGImageTag(ogImageUrl);
      this.metaTagService.updateOGTitleTag(ogTitle);
      this.metaTagService.updateOGUrlTag(ogUrl);

      if (this.newsData) {
        this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.newsData._content);
      } else {
        console.log('Article not found.');
      }
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
}
