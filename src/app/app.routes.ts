import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SubComponent } from './sub/sub.component';

export const routes: Routes = [
    { path: '', loadChildren: () => import('./auth/auth.routes').then(mod => mod.authRoutes) },
    // { path: '**', component: PageNotFoundComponent },
];
export default routes;