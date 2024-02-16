import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../../shared/modules/shared.module';
import { ApiService } from '../../../../api.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-podcast',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './podcast.component.html',
  styleUrl: './podcast.component.scss'
})
export class PodcastComponent implements OnInit  {
  PodcastHilight: any;
  MainHighLight: any;
  PodcastStart: boolean=false;
  mainEmdcodeSanitize: SafeHtml | undefined;


  constructor(public api:ApiService,private sanitizer: DomSanitizer){

  }
  ngOnInit(): void {
    const subtopicId=localStorage.getItem('subtiopicId');
  console.log('subtopicId:',subtopicId);
      this.api.getPodCast(subtopicId).subscribe((data)=>{
        this.PodcastHilight = data
this.PodcastHilight=this.PodcastHilight.data;
this.MainHighLight = this.PodcastHilight.splice(0, 1)[0];
this.mainEmdcodeSanitize = this.sanitizer.bypassSecurityTrustHtml(this.MainHighLight.embededCode);
console.log('emdCodeSanitize',this.mainEmdcodeSanitize);
console.log('podcastHighlight:',this.PodcastHilight);
console.log('mainPodcastHighlight:',this.MainHighLight);


      })
  }

  playPodcast(){
    this.PodcastStart=!this.PodcastStart;
  }

}
