import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/modules/shared.module';

@Component({
  selector: 'app-auth-header',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './auth-header.component.html',
  styleUrl: './auth-header.component.scss'
})
export class AuthHeaderComponent {

}
