import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { MetaTagService } from './meta-tag.service';
import { filter } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { ThemeService } from './theme-service.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterOutlet],
  providers: [MetaTagService, ThemeService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app';
  darkMode$ = this.themeService.darkMode$;


  constructor(
    private router: Router,
    private metaTagService: MetaTagService,
    private themeService: ThemeService
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      // debugger
      // Determine the OG image based on the event.url
      // Example: 
      let ogImageUrl = '';
      if (event.url == '/sub') {
        this.metaTagService.getData('https://www.sportspotsverige.se/V4//api/news/getNewsByTeamById?newsId=810c383c-8779-432b-e8d3-08dc1c4631fb&lang=sv').subscribe((res => {
          ogImageUrl = res[0]._medias[1].href;
          this.metaTagService.updateOGImageTag(ogImageUrl);
          this.metaTagService.updateOGUrlTag(ogImageUrl);
          this.metaTagService.updateOGTitleTag("ABC");
        }))
      }
      else if (event.url == '/home') {
        this.metaTagService.getData('https://www.sportspotsverige.se/V4//api/news/getNewsByTeamById?newsId=4405007b-c3e6-4f36-a268-08dc179c3a39&lang=sv').subscribe((res => {
          ogImageUrl = res[0]._medias[1].href;
          this.metaTagService.updateOGImageTag(ogImageUrl);
          this.metaTagService.updateOGUrlTag(ogImageUrl);
          this.metaTagService.updateOGTitleTag("ABC");
        }))
      }

    });
  }
 
}


