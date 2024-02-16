import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router, RouterModule, Event as NavigationEvent } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from '../../../../api.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MetaTagService } from '../../../../meta-tag.service';

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
  currentRoute: any;
  event$: any;
  constructor(
    private route: ActivatedRoute,
    public api: ApiService,
    private sanitizer: DomSanitizer,
    private metaTagService: MetaTagService,
    private router: Router
  ) {
    console.log('router',router.url);
    this.event$
    =this.router.events
        .subscribe(
          (event: NavigationEvent) => {
            if(event instanceof NavigationStart) {
              console.log('router',event.url);
            }
          });
  }


  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.keyword = params['keyword'] || 'Dressyr';
      this.articleId = params['id'];
      this.handleFetchArticleData(this.keyword, this.articleId);
    });
    
    console.log(this.router.url);
   
  }

  handleFetchArticleData(keyword: string, id: string): void {
    this.api.getNewsbyTeam(id).subscribe((data: any) => {
      this.newsData = data;
      console.log(this.newsData)
      const ogImageUrl = data[0]._medias[1].href;
      this.metaTagService.updateOGImageTag(ogImageUrl);
      this.metaTagService.updateOGTitleTag(data[0]._title);
      this.metaTagService.updateOGUrlTag(this.event$);


      const article = this.newsData.find((article: any) => article._id === id);
      this.articleDetails = article;

      if (article) {
        this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(article._content);
        console.log('Sanitized:', this.sanitizedContent);
      } else {
        console.log('Article not found.');
      }
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
}
