import { Component, HostBinding, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shared-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared-sidebar.component.html',
  styleUrl: './shared-sidebar.component.scss'
})
export class SharedSidebarComponent {
  darkMode = signal<boolean>(false)

  @HostBinding('class.dark') get mode() {
    return this.darkMode()
  }

}
