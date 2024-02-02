import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SubComponent } from './sub/sub.component';

export const routes: Routes = [
    { path: 'auth', loadChildren: () => import('./auth/auth.routes').then(mod => mod.authRoutes) },
    { path: '', loadChildren: () => import('./pages/article/article.routes').then(mod => mod.articleRoutes) },
    { path: 'podcast', loadChildren: () => import('./pages/podcast/podcast.routes').then(mod => mod.podcastRoutes) },
    { path: 'video', loadChildren: () => import('./pages/video-highlights/video-heighlights.routes').then(mod => mod.videoHighlightsRoutes) },
    // { path: '**', component: PageNotFoundComponent },
];
export default routes;