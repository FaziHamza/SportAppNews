import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../../shared/modules/shared.module';
import { ApiService } from '../../../../api.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [SharedModule,HttpClientModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent  implements OnInit {

constructor(private api:ApiService){

}

ngOnInit(): void {
    this.api.getRegin().subscribe(response => {
      console.log("get Regin",response);
    })
    // this.api.getNews().subscribe(response => {
    //   console.log("Get News",response);
    // })
  
    this.api.GetTopicWithSubTopic().subscribe(response => {
      console.log("GetTopicsWithSubTopic",response);
    })

}


}
