import { NgModule } from '@angular/core';
import { AuthHeaderComponent } from './layout/auth-header/auth-header.component';
import { AuthFooterComponent } from './layout/auth-footer/auth-footer.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { SharedModule } from '../shared/modules/shared.module';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    AuthHeaderComponent,
    AuthFooterComponent,
    AuthLayoutComponent
  ],
  exports: [
    SharedModule,
    AuthHeaderComponent,
    AuthFooterComponent,
    AuthLayoutComponent
  ]
})
export class AuthModule { }
