import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/modules/shared.module';

@Component({
  selector: 'app-podcast',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './podcast.component.html',
  styleUrl: './podcast.component.scss'
})
export class PodcastComponent {

}
