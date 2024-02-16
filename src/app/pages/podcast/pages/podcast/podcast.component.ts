import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { SharedModule } from '../../../../shared/modules/shared.module';
import { ApiService } from '../../../../api.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-podcast',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './podcast.component.html',
  styleUrl: './podcast.component.scss'
})
export class PodcastComponent implements OnInit {
  PodcastHilight: any;
  MainHighLight: any;
  PodcastStart: boolean = false;
  mainEmdcodeSanitize: SafeHtml | undefined;
  podcastEmdcodeSanitize: SafeHtml | undefined;
  sanitizePodcast: any[] = [];
  PodcastSanitized: any;
  PodcastStarts: boolean = false;


  constructor(
    public api: ApiService,
    private sanitizer: DomSanitizer,
    @Inject(PLATFORM_ID) private platformId: Object) {

  }
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const subtopicId = localStorage.getItem('subtiopicId');
      this.api.getPodCast(subtopicId).subscribe((data) => {
        debugger
        this.PodcastHilight = data
        this.PodcastHilight = this.PodcastHilight.data;
        this.MainHighLight = this.PodcastHilight.splice(0, 1)[0];
        this.mainEmdcodeSanitize = this.sanitizer.bypassSecurityTrustHtml(this.MainHighLight.embededCode);

        for (let index = 0; index < this.PodcastHilight.length; index++) {
          const element = this.PodcastHilight[index];
          this.podcastEmdcodeSanitize = this.sanitizer.bypassSecurityTrustHtml(element.embededCode);
          this.sanitizePodcast.push(this.podcastEmdcodeSanitize)

        }

      })
    }

  }

  playPodcast() {
    this.PodcastStart = !this.PodcastStart;
  }
  playPodcasts(index: number) {

    debugger
    this.PodcastStarts = !this.PodcastStarts;
    // Set the embed code corresponding to the clicked thumbnail
    this.PodcastSanitized = this.sanitizePodcast[index];


  }
  closPodcast() {
    this.PodcastStart = !this.PodcastStart;
  }
  closPodcasts() {
    this.PodcastStarts = !this.PodcastStarts;
  }

}
