import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../../theme-service.service';

@Component({
  selector: 'app-shared-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared-sidebar.component.html',
  styleUrl: './shared-sidebar.component.scss'
})
export class SharedSidebarComponent {

  @Input() open?: boolean;
  constructor(private themeService: ThemeService) {
  }
  isDropdownOpen: boolean = false;

  hide: boolean = false

  toggleDisplay() {
    this.hide = !this.hide
  }
  toggleDarkMode(): void {
    this.themeService.toggleDarkMode();
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeSidebar() {

  }
}
