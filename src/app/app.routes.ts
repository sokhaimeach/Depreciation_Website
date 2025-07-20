import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Login } from './login/login';
import { Loan1 } from './loan1/loan1';
import { Menu } from './menu/menu';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: Login},
    {path: 'menu', component: Menu, children: [
        {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
        {path: 'dashboard', component: Dashboard},
        {path: 'loan1', component: Loan1}
    ]},
]
