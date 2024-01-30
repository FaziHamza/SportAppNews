import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SubComponent } from './sub/sub.component';

export const routes: Routes = [
    { path: 'sub', component: SubComponent },
    { path: 'home', component: AppComponent },
];
