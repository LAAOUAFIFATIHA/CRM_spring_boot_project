import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout.component';
import { CoproprietaireLayoutComponent } from './layouts/coproprietaire-layout.component';
import { DashboardPageComponent } from './pages/dashboard-page.component';
import { RecouvrementDashboardComponent } from './pages/recouvrement/recouvrement-dashboard.component';
import { LoginPageComponent } from './pages/login/login-page.component';
import { ReclamationsPageComponent } from './pages/reclamations/reclamations-page.component';
import { FinancePageComponent } from './pages/finance/finance-page.component';
import { authGuard, loginGuard } from './guards/auth.guard';

// Coproprietaire Pages
import { CoproprietaireDashboardComponent } from './pages/coproprietaire/dashboard/coproprietaire-dashboard.component';
import { CoproprietaireLotsComponent } from './pages/coproprietaire/lots/coproprietaire-lots.component';
import { CoproprietaireReclamationsComponent } from './pages/coproprietaire/reclamations/coproprietaire-reclamations.component';
import { CoproprietairePaiementsComponent } from './pages/coproprietaire/paiements/coproprietaire-paiements.component';
import { CoproprietaireDocumentsComponent } from './pages/coproprietaire/documents/coproprietaire-documents.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginPageComponent,
        canActivate: [loginGuard]
    },
    {
        path: 'coproprietaire',
        component: CoproprietaireLayoutComponent,
        canActivate: [authGuard],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: CoproprietaireDashboardComponent },
            { path: 'lots', component: CoproprietaireLotsComponent },
            { path: 'reclamations', component: CoproprietaireReclamationsComponent },
            { path: 'paiements', component: CoproprietairePaiementsComponent },
            { path: 'documents', component: CoproprietaireDocumentsComponent }
        ]
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
    { path: '**', redirectTo: 'login' }
];
