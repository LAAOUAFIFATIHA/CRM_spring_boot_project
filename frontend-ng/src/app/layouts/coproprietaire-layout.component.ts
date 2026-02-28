import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import {
    LucideAngularModule,
    Building2,
    LayoutDashboard,
    FileText,
    CreditCard,
    MessageSquareWarning,
    Settings,
    LogOut,
    User
} from 'lucide-angular';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-coproprietaire-layout',
    standalone: true,
    imports: [CommonModule, RouterModule, LucideAngularModule],
    templateUrl: './coproprietaire-layout.component.html'
})
export class CoproprietaireLayoutComponent implements OnInit {
    readonly Building2 = Building2;
    readonly LayoutDashboard = LayoutDashboard;
    readonly FileText = FileText;
    readonly CreditCard = CreditCard;
    readonly MessageSquareWarning = MessageSquareWarning;
    readonly Settings = Settings;
    readonly LogOut = LogOut;
    readonly User = User;

    currentRoute = '';

    menuItems = [
        { path: '/coproprietaire/dashboard', icon: LayoutDashboard, label: 'Tableau de bord' },
        { path: '/coproprietaire/lots', icon: Building2, label: 'Mes Lots' },
        { path: '/coproprietaire/reclamations', icon: MessageSquareWarning, label: 'Mes Réclamations' },
        { path: '/coproprietaire/paiements', icon: CreditCard, label: 'Mes Paiements' },
        { path: '/coproprietaire/documents', icon: FileText, label: 'Mes Documents' },
    ];

    constructor(private router: Router) {
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe((event: any) => {
            this.currentRoute = event.urlAfterRedirects;
        });
    }

    ngOnInit() {
        this.currentRoute = this.router.url;
    }

    logout() {
        localStorage.removeItem('syndic_token');
        localStorage.removeItem('user_role');
        this.router.navigate(['/login']);
    }
}
