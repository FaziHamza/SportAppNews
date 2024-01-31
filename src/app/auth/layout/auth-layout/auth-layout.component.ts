import { Component } from '@angular/core';
import { AuthModule } from '../../auth.module';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [AuthModule],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss'
})
export class AuthLayoutComponent {
}
