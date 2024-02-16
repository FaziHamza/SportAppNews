import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { SharedModule } from '../../../../shared/modules/shared.module';
import { ApiService } from '../../../../api.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';



@Component({
  selector: 'app-video-highlights',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './video-highlights.component.html',
  styleUrl: './video-highlights.component.scss',
})
export class VideoHighlightsComponent implements OnInit {
  videoHilight: any
  MainHighLight: any;
  mainEmdcodeSanitize: SafeHtml | undefined;
  VideoEmdcodeSanitize: SafeHtml | undefined;
  VideoStart: boolean = false
  sanitizeVideos: any[] = [];
  videoSanitized: any;
  VideoStarts: boolean = false;
  constructor(public api: ApiService, private sanitizer: DomSanitizer,
    @Inject(PLATFORM_ID) private platformId: Object) { }
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const subtopicId = localStorage.getItem('subtiopicId');

      this.api.GetVideoHighLight(subtopicId).subscribe((data) => {
        debugger
        this.videoHilight = data
        this.videoHilight = this.videoHilight.data;
        this.MainHighLight = this.videoHilight.splice(0, 1)[0];
        this.mainEmdcodeSanitize = this.sanitizer.bypassSecurityTrustHtml(this.MainHighLight.embededCode);
        for (let index = 0; index < this.videoHilight.length; index++) {
          const element = this.videoHilight[index];
          this.VideoEmdcodeSanitize = this.sanitizer.bypassSecurityTrustHtml(element.embededCode);
          this.sanitizeVideos.push(this.VideoEmdcodeSanitize)
        }
      });
    }
    
  }
  playVideo() {
    this.VideoStart = !this.VideoStart;
  }
  playVideos(index: number) {

    debugger

    // Set the embed code corresponding to the clicked thumbnail
    this.videoSanitized = this.sanitizeVideos[index];
    this.VideoStarts = !this.VideoStarts;
  }

  closeVideo() {
    this.VideoStart = false;
  }
  closeVideos() {
    this.VideoStarts = !this.VideoStarts;
  }

}
