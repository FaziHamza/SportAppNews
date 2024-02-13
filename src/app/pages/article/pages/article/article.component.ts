import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../../shared/modules/shared.module';
import { ApiService } from '../../../../api.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [SharedModule,HttpClientModule,CommonModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent  implements OnInit {

  private routeSub!: Subscription;
  newsData:any
  firstRecord: any;
  nextThreeRecords: any;
  
    constructor(private route: ActivatedRoute,public api:ApiService) { }
  
    ngOnInit(): void {
      this.routeSub = this.route.params.subscribe(params => {
        const keyword = params['keyword'] || 'Dressyr'; // Use 'Dressyr' as default if keyword is not present
        console.log('keyword', keyword);
        
        this.handleFetchNewsData(keyword);
      });
    }
    
  handleFetchNewsData(keyword: string): void {
    this.api.getNews(keyword).subscribe((data: any) => {
      // Handle the fetched news data here
      this.newsData = data;
     
      this.firstRecord = this.newsData .splice(0, 1)[0];
      this.nextThreeRecords = this.newsData .splice(0, 3);
     

      console.log('fetuch data',keyword,":", this.newsData);
    });
  }
  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
 


}
