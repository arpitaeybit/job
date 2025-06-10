import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { JobComponent } from './component/job/job.component';
import { LoginComponent } from './component/auth/login/login.component';
import { authGuard } from './guards/auth.guard';
import { ErrorComponent } from './component/error/error.component';
import { SaveComponent } from './component/save/save.component';
import { JoblistingComponent } from './component/joblisting/joblisting.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent,
        canActivate:[authGuard]
    },
    {
        path:'joblisting',
        component:JoblistingComponent,
        canActivate:[authGuard]
    },
    {
        path:'jobs',
        component:JobComponent,
        canActivate:[authGuard]
    },{
        path:'login',
        component:LoginComponent
    },{
        path:'save',
        component:SaveComponent,
        canActivate:[authGuard]
    },{
        path:'**',
        component:ErrorComponent
    }
];
