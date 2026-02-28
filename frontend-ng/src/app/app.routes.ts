import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout.component';
import { DashboardPageComponent } from './pages/dashboard-page.component';
import { RecouvrementDashboardComponent } from './pages/recouvrement/recouvrement-dashboard.component';
import { LoginPageComponent } from './pages/login/login-page.component';
import { ReclamationsPageComponent } from './pages/reclamations/reclamations-page.component';
import { FinancePageComponent } from './pages/finance/finance-page.component';
import { authGuard, loginGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginPageComponent,
        canActivate: [loginGuard]
    },
    {
        path: '',
        component: MainLayoutComponent,
        canActivate: [authGuard],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardPageComponent },
            { path: 'recouvrement', component: RecouvrementDashboardComponent },
            // Add more routes as components are created
            { path: 'residences', component: DashboardPageComponent },
            { path: 'coproprietaires', component: DashboardPageComponent },
            { path: 'reclamations', component: ReclamationsPageComponent },
            { path: 'finance', component: FinancePageComponent },
            { path: 'prestataires', component: DashboardPageComponent },
            { path: 'reporting', component: DashboardPageComponent },
            { path: 'parametres', component: DashboardPageComponent },
        ]
    },
    { path: '**', redirectTo: 'dashboard' }
];
