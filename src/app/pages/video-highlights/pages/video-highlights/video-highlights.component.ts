import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/modules/shared.module';

@Component({
  selector: 'app-video-highlights',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './video-highlights.component.html',
  styleUrl: './video-highlights.component.scss'
})
export class VideoHighlightsComponent {

}
