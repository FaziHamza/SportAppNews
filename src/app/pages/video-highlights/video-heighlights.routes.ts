import { Routes } from '@angular/router';
import { VideoHighlightsComponent } from './pages/video-highlights/video-highlights.component';
import { SharedLayoutComponent } from '../../shared/layout/shared-layout/shared-layout.component';

export const videoHighlightsRoutes: Routes = [
    {
        path: '', component: SharedLayoutComponent, title: "Videoes",
        children: [
            {
                path: '',  // child route path
                title: "Videoes",
                component: VideoHighlightsComponent,  // child route component that the router renders
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
export default videoHighlightsRoutes;