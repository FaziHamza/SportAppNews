import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterOutlet
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    RouterOutlet
  ]
})
export class SharedModule { }
