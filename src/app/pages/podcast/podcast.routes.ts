import { Routes } from '@angular/router';
import { PodcastComponent } from './pages/podcast/podcast.component';
import { SharedLayoutComponent } from '../../shared/layout/shared-layout/shared-layout.component';

export const podcastRoutes: Routes = [
    {
        path: '', component: SharedLayoutComponent, title: "Podcast",
        children: [
            {
                path: '',  // child route path
                title: "Podcast",
                component: PodcastComponent,  // child route component that the router renders
            },
            // {
            //     path: 'register',
            //     title: 'Register',
            //     component: RegisterComponent,  // another child route component that the router renders
            // },
            // {
            //     path: '',
            //     redirectTo: 'login', pathMatch: 'full'
            // }
        ],
    },
];
export default podcastRoutes;