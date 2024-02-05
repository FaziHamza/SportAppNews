// theme.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  private modeSubject = new BehaviorSubject<boolean>(false);
  darkMode$ = this.modeSubject.asObservable();

  toggleDarkMode(): void {
    this.modeSubject.next(!this.modeSubject.value);
  }
}
