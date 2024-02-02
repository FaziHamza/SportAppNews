import { Routes } from '@angular/router';
import { ArticleComponent } from './pages/article/article.component';
import { SharedLayoutComponent } from '../../shared/layout/shared-layout/shared-layout.component';
import { ArticleDetailComponent } from './pages/article-detail/article-detail.component';

export const articleRoutes: Routes = [
    {
        path: '', component: SharedLayoutComponent, title: "Article",
        children: [
            {
                path: '',  // child route path
                title: "Article",
                component: ArticleComponent,  // child route component that the router renders
            },
            {
                path: 'news',  // child route path
                title: "ArticleDetail",
                component: ArticleDetailComponent,  // child route component that the router renders
            },
            //     {
            //         path: 'register',
            //         title: 'Register',
            //         component: RegisterComponent,  // another child route component that the router renders
            //     },
            //     {
            //         path: '',
            //         redirectTo: 'login', pathMatch: 'full'
            //     }
        ],
    },
];
export default articleRoutes;