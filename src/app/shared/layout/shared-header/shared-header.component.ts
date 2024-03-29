import { Component, EventEmitter, Output } from '@angular/core';
import { SharedSidebarComponent } from "../shared-sidebar/shared-sidebar.component";
import { ThemeService } from '../../../theme-service.service';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-shared-header',
    standalone: true,
    templateUrl: './shared-header.component.html',
    styleUrl: './shared-header.component.scss',
    imports: [RouterModule]
})
export class SharedHeaderComponent {

  @Output() open: EventEmitter<boolean> = new EventEmitter();



  // openSidebar() {
  //   this.open.emit(true);
  // }
  constructor(public themeService:ThemeService) { }
  showSideBar() {
  
this.themeService.toggleSideBarFun()
  }
}
