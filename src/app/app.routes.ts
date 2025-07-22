import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Login } from './login/login';
import { Loan1 } from './loan1/loan1';
import { Menu } from './menu/menu';
import { Loan2 } from './loan2/loan2';
import { Loan3 } from './loan3/loan3';
import { Members } from './members/members';
import { Staff } from './staff/staff';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: Login},
    {path: 'menu', component: Menu, children: [
        {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
        {path: 'dashboard', component: Dashboard},
        {path: 'loan1', component: Loan1},
        {path: 'loan2', component: Loan2},
        {path: 'loan3', component: Loan3},
        {path: 'members', component: Members},
        {path: 'staff', component: Staff}
    ]},
]
