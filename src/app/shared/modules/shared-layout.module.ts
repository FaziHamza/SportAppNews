import { NgModule } from '@angular/core';
import { SharedHeaderComponent } from '../layout/shared-header/shared-header.component';
import { SharedFooterComponent } from '../layout/shared-footer/shared-footer.component';
import { SharedSidebarComponent } from '../layout/shared-sidebar/shared-sidebar.component';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    SharedHeaderComponent,
    SharedFooterComponent,
    SharedSidebarComponent
  ],
  exports: [
    SharedModule,
    SharedHeaderComponent,
    SharedFooterComponent,
    SharedSidebarComponent
  ]
})
export class SharedLayoutModule { }
