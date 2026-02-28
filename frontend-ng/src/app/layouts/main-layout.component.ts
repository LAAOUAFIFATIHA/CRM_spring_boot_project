import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import {
    LucideAngularModule,
    LayoutDashboard,
    Building2,
    Users,
    FileText,
    CreditCard,
    Wrench,
    BarChart3,
    Settings,
    ChevronLeft,
    ChevronRight,
    LogOut,
    HandCoins
} from 'lucide-angular';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-main-layout',
    standalone: true,
    imports: [CommonModule, RouterModule, LucideAngularModule],
    templateUrl: './main-layout.component.html',
    styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit, OnDestroy {
    collapsed = false;
    currentPath = '';
    userRole = 'dg';
    userLabel = 'Direction Générale';

    readonly LayoutDashboard = LayoutDashboard;
    readonly Building2 = Building2;
    readonly Users = Users;
    readonly FileText = FileText;
    readonly CreditCard = CreditCard;
    readonly Wrench = Wrench;
    readonly BarChart3 = BarChart3;
    readonly Settings = Settings;
    readonly ChevronLeft = ChevronLeft;
    readonly ChevronRight = ChevronRight;
    readonly LogOut = LogOut;
    readonly HandCoins = HandCoins;

    menuItems = [
        { icon: LayoutDashboard, label: 'Tableau de bord', href: '/dashboard' },
        { icon: HandCoins, label: 'Recouvrement', href: '/recouvrement' },
        { icon: Building2, label: 'Résidences', href: '/residences' },
        { icon: Users, label: 'Copropriétaires', href: '/coproprietaires' },
        { icon: FileText, label: 'Réclamations', href: '/reclamations' },
        { icon: CreditCard, label: 'Finance & Recouvrement', href: '/finance' },
        { icon: Wrench, label: 'Prestataires', href: '/prestataires' },
        { icon: BarChart3, label: 'Reporting & KPIs', href: '/reporting' },
        { icon: Settings, label: 'Paramètres', href: '/parametres' },
    ];

    constructor(private router: Router) {
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe((event: any) => {
            this.currentPath = event.urlAfterRedirects;
        });
    }

    ngOnInit() {
        this.userRole = localStorage.getItem('user_role') || 'dg';
        this.userLabel = this.userRole === 'dg' ? 'Direction Générale' : 'Gestionnaire Recouvrement';

        // Filter menu items for Recouvrement role
        if (this.userRole === 'recouvrement') {
            this.menuItems = [
                { icon: HandCoins, label: 'Recouvrement', href: '/recouvrement' },
                { icon: FileText, label: 'Réclamations', href: '/reclamations' },
                { icon: CreditCard, label: 'Finance', href: '/finance' },
            ];
        }

        this.checkAuth();
        this.handleResize();
        window.addEventListener('resize', () => this.handleResize());
    }

    ngOnDestroy() {
        window.removeEventListener('resize', () => this.handleResize());
    }

    checkAuth() {
        const token = localStorage.getItem('syndic_token');
        if (!token && !this.router.url.includes('/login')) {
            // this.router.navigate(['/login']); // Commented out for now to allow development without full login
        }
    }

    handleResize() {
        this.collapsed = window.innerWidth < 1024;
    }

    toggleSidebar() {
        this.collapsed = !this.collapsed;
    }

    logout() {
        localStorage.removeItem('syndic_token');
        this.router.navigate(['/login']);
    }

    isActive(href: string): boolean {
        return this.currentPath.startsWith(href);
    }
}
