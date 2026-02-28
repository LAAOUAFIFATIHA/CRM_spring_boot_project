import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    LucideAngularModule,
    ArrowDown,
    ArrowUp,
    Building,
    CreditCard,
    DollarSign,
    FileText,
    BarChart3,
    Users
} from 'lucide-angular';
import { KpiCardComponent } from '../components/kpi-card.component';
import { StatusBadgeComponent } from '../components/status-badge.component';

@Component({
    selector: 'app-dashboard-page',
    standalone: true,
    imports: [CommonModule, LucideAngularModule, KpiCardComponent, StatusBadgeComponent],
    templateUrl: './dashboard-page.component.html'
})
export class DashboardPageComponent {
    readonly Building = Building;
    readonly CreditCard = CreditCard;
    readonly DollarSign = DollarSign;
    readonly FileText = FileText;
    readonly BarChart3 = BarChart3;
    readonly Users = Users;
    readonly ArrowDown = ArrowDown;

    topResidences = [
        { id: 1, name: "Les Jardins Carthage", rate: 18.5, amount: "124,500 MAD" },
        { id: 2, name: "Résidence El Menzah", rate: 15.2, amount: "98,200 MAD" },
        { id: 3, name: "Parc du Lac", rate: 12.8, amount: "76,400 MAD" },
        { id: 4, name: "Les Berges", rate: 11.3, amount: "62,100 MAD" },
        { id: 5, name: "Résidence Ennasr", rate: 9.7, amount: "51,300 MAD" },
    ];

    recentReclamations = [
        { id: "REC-001", residence: "Les Jardins Carthage", copro: "Ahmed Ben Salah", type: "Fuite d'eau", status: "Urgent" },
        { id: "REC-002", residence: "Résidence El Menzah", copro: "Fatma Khaled", type: "Ascenseur", status: "En cours" },
        { id: "REC-003", residence: "Parc du Lac", copro: "Mohamed Trabelsi", type: "Éclairage", status: "Ouvert" },
        { id: "REC-004", residence: "Les Berges", copro: "Sonia Mejri", type: "Nuisances", status: "Résolu" },
        { id: "REC-005", residence: "Résidence Ennasr", copro: "Karim Bouazidi", type: "Infiltration", status: "Urgent" },
    ];
}
