import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../../theme-service.service';
import { ApiService } from '../../../api.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-shared-sidebar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './shared-sidebar.component.html',
  styleUrl: './shared-sidebar.component.scss'
})
export class SharedSidebarComponent implements OnInit {
  data: any;
  menuItems: any[] = [];
  footballMenu: any;
  @Input() open?: boolean;
  constructor(public themeService: ThemeService, private api: ApiService,private router: Router) {
  }

  ngOnInit(): void {
    this.api.GetTopicWithSubTopic().subscribe(res => {
      this.data = res.menuItems;
    
      this.data = this.mergeSubtopicsDynamic(this.data);
      this.menuItems = this.data;
      console.log("menuItems", this.menuItems);
      console.log("data", this.data);


    });
  }
  mergeSubtopicsDynamic(menuItems: any[]): any[] {
    const topicsByMainHeading: { [key: string]: any } = {};
   
    // Group topics and subtopics by main heading
    menuItems.forEach(item => {
      const mainHeading = item.topic.mainHeading.trim();
      if (!topicsByMainHeading[mainHeading]) {
        topicsByMainHeading[mainHeading] = {
          topic: [],
          subTopics: []
        };
      }
      // Concatenate the arrays of topics and subtopics
      topicsByMainHeading[mainHeading].topic = topicsByMainHeading[mainHeading].topic.concat(item.topic);
      topicsByMainHeading[mainHeading].subTopics = topicsByMainHeading[mainHeading].subTopics.concat(item.subTopics);
    });

    // Convert the grouped topics into an array and remove the mainHeading property
    const mergedTopics: any[] = Object.values(topicsByMainHeading).map(item => {
      return {
        heading: item.topic[0],
        topic: item.topic,
        subTopics: item.subTopics
      };
    });

    return mergedTopics;
  }
  getSubTopics(subTopic: any,item:any) {
    return subTopic.filter((a: any) => a.topicID == item.topicID);
  }



  toggleDarkMode(): void {
    this.themeService.toggleDarkMode();
  }

  toggleMenu(menu: any) {
    menu.isOpen = !menu.isOpen;
  }

  toggleDropdown(topic: any) {
    topic.isOpen = !topic.isOpen;
  }

  HideSideBar() {
    this.themeService.toggleSideBarFun();
  }

  getNews(keyword: string): void {
    this.api.getNews(keyword);
  }


  
}
