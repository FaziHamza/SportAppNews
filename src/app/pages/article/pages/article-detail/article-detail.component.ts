import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from '../../../../api.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-article-detail',
  standalone:true,
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

  constructor(
    private route: ActivatedRoute,
    public api: ApiService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.keyword = params['keyword'] || 'Dressyr';
      this.articleId = params['id'];
      this.handleFetchArticleData(this.keyword, this.articleId);
    });
  }

  handleFetchArticleData(keyword: string, id: string): void {
    // Make API call to fetch news data based on keyword
    this.api.getNews(keyword).subscribe((data: any) => {
      // Assign the fetched news data
      this.newsData = data;
      console.log('Articles details:', this.newsData);

      // Find the article with the matching ID
      const article = this.newsData.find((article: any) => article._id === id);
      this.articleDetails = article;

      if (article) {
        // If the article is found, sanitize the content
        this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(article._content);
        console.log('Sanitized:', this.sanitizedContent);
      } else {
        // Handle case where the article is not found
        console.log('Article not found.');
      }
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
}
