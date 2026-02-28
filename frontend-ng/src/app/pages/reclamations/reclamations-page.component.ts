import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    LucideAngularModule,
    Search,
    Filter,
    Plus,
    Calendar,
    User,
    Building,
    CheckCircle2,
    Clock,
    AlertCircle,
    MoreVertical,
    Eye,
    Phone,
    Mail,
    Smartphone,
    MessageSquare,
    X,
    ChevronRight,
    ArrowLeft
} from 'lucide-angular';
import { StatusBadgeComponent } from '../../components/status-badge.component';

interface Reclamation {
    id: string;
    title: string;
    description: string;
    coproprietaire: string;
    residence: string;
    lot: string;
    date: string;
    status: 'Traité' | 'En cours' | 'Urgent' | 'Nouveau';
    source: 'App' | 'Téléphone' | 'Email' | 'SMS' | 'Direct';
}

@Component({
    selector: 'app-reclamations-page',
    standalone: true,
    imports: [CommonModule, LucideAngularModule, StatusBadgeComponent],
    templateUrl: './reclamations-page.component.html'
})
export class ReclamationsPageComponent {
    // Icons
    readonly Search = Search;
    readonly Filter = Filter;
    readonly Plus = Plus;
    readonly Calendar = Calendar;
    readonly User = User;
    readonly Building = Building;
    readonly CheckCircle2 = CheckCircle2;
    readonly Clock = Clock;
    readonly AlertCircle = AlertCircle;
    readonly MoreVertical = MoreVertical;
    readonly Eye = Eye;
    readonly Phone = Phone;
    readonly Mail = Mail;
    readonly Smartphone = Smartphone;
    readonly MessageSquare = MessageSquare;
    readonly X = X;
    readonly ChevronRight = ChevronRight;
    readonly ArrowLeft = ArrowLeft;

    reclamations: Reclamation[] = [
        {
            id: 'REC-2026-001',
            title: "Problème d'étanchéité terrasse",
            description: "Infiltration d'eau importante au niveau du salon après les dernières pluies. Le plafond commence à se détériorer.",
            coproprietaire: 'Ahmed Ben Salah',
            residence: 'Les Jardins Carthage',
            lot: 'A-102',
            date: '27/02/2026, 09:45',
            status: 'Urgent',
            source: 'App'
        },
        {
            id: 'REC-2026-002',
            title: "Ascenseur en panne (Bloc B)",
            description: "L'ascenseur du bloc B est bloqué au 3ème étage depuis hier soir. Plusieurs résidents se sont plaints.",
            coproprietaire: 'Fatma Khaled',
            residence: 'Résidence El Menzah',
            lot: 'B-205',
            date: '26/02/2026, 17:30',
            status: 'En cours',
            source: 'Téléphone'
        },
        {
            id: 'REC-2026-003',
            title: "Éclairage parking défectueux",
            description: "Trois lampadaires à l'entrée du parking sous-sol ne fonctionnent plus, zone dangereuse la nuit.",
            coproprietaire: 'Mohamed Trabelsi',
            residence: 'Parc du Lac',
            lot: 'C-05',
            date: '25/02/2026, 11:20',
            status: 'Traité',
            source: 'Email'
        },
        {
            id: 'REC-2026-004',
            title: "Bruit nocturne (Appart 402)",
            description: "Nuisances sonores répétées venant du 4ème étage après 23h. Demande d'intervention du syndic.",
            coproprietaire: 'Sonia Mejri',
            residence: 'Les Berges',
            lot: 'D-11',
            date: '24/02/2026, 08:15',
            status: 'Nouveau',
            source: 'SMS'
        },
        {
            id: 'REC-2026-005',
            title: "Interphone débranché",
            description: "L'interphone de l'appartement E-301 ne sonne plus. Vérification du câblage nécessaire.",
            coproprietaire: 'Karim Bouazidi',
            residence: 'Résidence Ennasr',
            lot: 'E-301',
            date: '23/02/2026, 14:00',
            status: 'En cours',
            source: 'Direct'
        }
    ];

    selectedReclamation: Reclamation | null = null;
    isModalOpen = false;

    viewDetails(reclamation: Reclamation) {
        this.selectedReclamation = reclamation;
        this.isModalOpen = true;
    }

    closeModal() {
        this.isModalOpen = false;
        setTimeout(() => {
            this.selectedReclamation = null;
        }, 300);
    }

    getSourceIcon(source: string) {
        switch (source) {
            case 'App': return this.Smartphone;
            case 'Téléphone': return this.Phone;
            case 'Email': return this.Mail;
            case 'SMS': return this.MessageSquare;
            default: return this.User;
        }
    }

    getStatusColor(status: string) {
        switch (status) {
            case 'Urgent': return 'text-red-600 bg-red-100';
            case 'En cours': return 'text-blue-600 bg-blue-100';
            case 'Traité': return 'text-green-600 bg-green-100';
            default: return 'text-gray-600 bg-gray-100';
        }
    }
}
