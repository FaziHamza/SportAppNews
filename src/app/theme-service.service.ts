// theme.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  private modeSubject = new BehaviorSubject<boolean>(true);
  darkMode$ = this.modeSubject.asObservable();

  toggleDarkMode(): void {
    const newDarkModeValue = !this.modeSubject.value;
    this.modeSubject.next(newDarkModeValue);
    // window.localStorage.setItem('darkMode', JSON.stringify(newDarkModeValue));
  }
  toggleSideBar:boolean=false;  
    toggleSideBarFun(){
    this.toggleSideBar=!this.toggleSideBar
      }
  
}
