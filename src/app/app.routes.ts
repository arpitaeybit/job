import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./component/home/home.component').then(m => m.HomeComponent),
        canActivate: [authGuard]
    },
    {
        path: 'joblisting',
        loadComponent: () => import('./component/joblisting/joblisting.component').then(m => m.JoblistingComponent),
        canActivate: [authGuard]
    },
    {
        path: 'jobs',
        loadComponent: () => import('./component/job/job.component').then(m => m.JobComponent),
        canActivate: [authGuard]
    }, {
        path: 'login',
        loadComponent: () => import('./component/auth/login/login.component').then(m => m.LoginComponent),
    }, {
        path: 'save',
        loadComponent: () => import('./component/save/save.component').then(m => m.SaveComponent),
        canActivate: [authGuard]
    }, {
        path: '**',
        loadComponent: () => import('./component/error/error.component').then(m => m.ErrorComponent)
    }
];
