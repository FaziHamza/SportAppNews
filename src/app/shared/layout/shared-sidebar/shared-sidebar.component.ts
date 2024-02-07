import { Component, HostBinding, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../../theme-service.service';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-shared-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared-sidebar.component.html',
  styleUrl: './shared-sidebar.component.scss'
})
export class SharedSidebarComponent {

  constructor(private themeService: ThemeService) {
  }

  toggleDarkMode(): void {
    this.themeService.toggleDarkMode();
  }
  isDropdownOpen: boolean = false;

  // toggleTheme(): void {
  //   this.themeService.toggleTheme();
  // }

  // getCurrentTheme(): string {
  //   return this.themeService.getCurrentTheme();
  // }
  // isSidebarHidden: boolean = false;
  // openSidebr() {
  //   this.isSidebarHidden = !this.isSidebarHidden;
  // }
  

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
