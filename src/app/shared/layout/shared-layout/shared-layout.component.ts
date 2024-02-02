import { Component } from '@angular/core';
import { SharedLayoutModule } from '../../modules/shared-layout.module';

@Component({
  selector: 'app-shared-layout',
  standalone: true,
  imports: [SharedLayoutModule],
  templateUrl: './shared-layout.component.html',
  styleUrl: './shared-layout.component.scss'
})
export class SharedLayoutComponent {

}
