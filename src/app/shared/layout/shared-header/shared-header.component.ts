import { Component, EventEmitter, Output } from '@angular/core';
import { SharedSidebarComponent } from "../shared-sidebar/shared-sidebar.component";

@Component({
    selector: 'app-shared-header',
    standalone: true,
    templateUrl: './shared-header.component.html',
    styleUrl: './shared-header.component.scss',
    imports: [SharedSidebarComponent]
})
export class SharedHeaderComponent {

  @Output() open: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  openSidebar() {
    this.open.emit(true);
  }
}
