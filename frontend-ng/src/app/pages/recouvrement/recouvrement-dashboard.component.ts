import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    LucideAngularModule,
    HandCoins,
    UserX,
    MessageSquareWarning,
    History,
    Search,
    Filter,
    ArrowUpRight,
    ArrowDownRight,
    Wallet,
    TrendingUp
} from 'lucide-angular';
import { KpiCardComponent } from '../../components/kpi-card.component';
import { StatusBadgeComponent } from '../../components/status-badge.component';

@Component({
    selector: 'app-recouvrement-dashboard',
    standalone: true,
    imports: [CommonModule, LucideAngularModule, KpiCardComponent, StatusBadgeComponent],
    templateUrl: './recouvrement-dashboard.component.html'
})
export class RecouvrementDashboardComponent {
    // Icons
    readonly HandCoins = HandCoins;
    readonly UserX = UserX;
    readonly MessageSquareWarning = MessageSquareWarning;
    readonly History = History;
    readonly Search = Search;
    readonly Filter = Filter;
    readonly ArrowUpRight = ArrowUpRight;
    readonly ArrowDownRight = ArrowDownRight;
    readonly Wallet = Wallet;
    readonly TrendingUp = TrendingUp;

    // Summary Metrics
    recouvrementRate = 68.5;
    totalToCollect = "1,845,200 MAD";
    collectedThisMonth = "425,000 MAD";
    pendingReclamations = 12;

    // Unpaid Copropriétaires
    unpaidList = [
        {
            id: 1,
            name: "Ahmed Ben Salah",
            residence: "Les Jardins Carthage",
            lot: "A-102",
            amount: "12,400 MAD",
            delay: "45 jours",
            status: "Relance 2 envoyée"
        },
        {
            id: 2,
            name: "Fatma Khaled",
            residence: "Résidence El Menzah",
            lot: "B-205",
            amount: "8,200 MAD",
            delay: "15 jours",
            status: "Promesse de paiement"
        },
        {
            id: 3,
            name: "Mohamed Trabelsi",
            residence: "Parc du Lac",
            lot: "C-05",
            amount: "15,600 MAD",
            delay: "62 jours",
            status: "Dossier contentieux"
        },
        {
            id: 4,
            name: "Sonia Mejri",
            residence: "Les Berges",
            lot: "D-11",
            amount: "4,500 MAD",
            delay: "10 jours",
            status: "Nouveau"
        },
        {
            id: 5,
            name: "Karim Bouazidi",
            residence: "Résidence Ennasr",
            lot: "E-301",
            amount: "22,800 MAD",
            delay: "90 jours",
            status: "Mise en demeure"
        }
    ];

    // Reclamations related to Recouvrement/CRM
    relatedReclamations = [
        {
            id: "REC-102",
            copro: "Ahmed Ben Salah",
            subject: "Contestation charges ascenseur",
            date: "14/02/2026",
            status: "En cours"
        },
        {
            id: "REC-115",
            copro: "Mohamed Trabelsi",
            subject: "Demande d'échelonnement",
            date: "20/02/2026",
            status: "Approuvé"
        },
        {
            id: "REC-128",
            copro: "Karim Bouazidi",
            subject: "Problème relevé compteur eau",
            date: "22/02/2026",
            status: "Urgent"
        }
    ];

    // Recent Payments
    recentPayments = [
        { name: "Myriam Fassi", amount: "5,400 MAD", mode: "Virement", date: "Aujourd'hui, 09:30" },
        { name: "Youssef Alaoui", amount: "3,200 MAD", mode: "Chèque", date: "Hier, 16:45" },
        { name: "Salma Mansouri", amount: "8,900 MAD", mode: "Versement Cash", date: "Hier, 11:20" }
    ];

    getProgressBarColor(): string {
        if (this.recouvrementRate < 40) return 'bg-red-500';
        if (this.recouvrementRate < 75) return 'bg-amber-500';
        return 'bg-green-500';
    }
}
