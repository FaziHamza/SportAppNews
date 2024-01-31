import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/modules/shared.module';

@Component({
  selector: 'app-auth-footer',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './auth-footer.component.html',
  styleUrl: './auth-footer.component.scss'
})
export class AuthFooterComponent {

}
