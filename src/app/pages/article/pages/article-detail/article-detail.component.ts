import { Component } from '@angular/core';
import { ApiService } from '../../../../api.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-detail.component.html',
  styleUrl: './article-detail.component.scss'
})
export class ArticleDetailComponent {
  
  private routeSub!: Subscription;
newsData:any

  constructor(private route: ActivatedRoute,public api:ApiService) { }

ngOnInit(): void {
  this.routeSub = this.route.params.subscribe(params => {
    const keyword = params['keyword'];
    if (keyword) {
      this.handleFetchNewsData(keyword);
    }
  });
  
}
handleFetchNewsData(keyword: string): void {
  this.api.getNews(keyword).subscribe((data: any) => {
    // Handle the fetched news data here
    this.newsData = data;
    console.log('fetuch data',keyword,":", this.newsData);
  });
}
ngOnDestroy(): void {
  this.routeSub.unsubscribe();
}

}
