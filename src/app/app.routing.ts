import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { ForgotPasswordComponent } from './forgot-password';
import { AuthGuard } from './_guards';

const appRoutes: Routes = [
    { path: 'home', loadChildren: './userhome/userhome.module', canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },

    // otherwise redirect to login
    { path: '**', redirectTo: 'login' }
];

export const routing = RouterModule.forRoot(appRoutes);