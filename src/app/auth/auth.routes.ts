import { Routes } from '@angular/router';
import { SubComponent } from '../sub/sub.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

export const authRoutes: Routes = [
    {
        path: '', component: AuthLayoutComponent, title: "Authentication",
        children: [
            {
                path: 'login',  // child route path
                title: "Login",
                component: LoginComponent,  // child route component that the router renders
            },
            {
                path: 'register',
                title: 'Register',
                component: RegisterComponent,  // another child route component that the router renders
            },
            {
                path: '',
                redirectTo: 'login', pathMatch: 'full'
            }
        ],
    },
];
export default authRoutes;