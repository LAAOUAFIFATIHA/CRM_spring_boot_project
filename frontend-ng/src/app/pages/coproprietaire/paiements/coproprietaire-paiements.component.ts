import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    LucideAngularModule,
    CreditCard,
    CheckCircle2,
    Clock,
    Calendar,
    ArrowUpRight,
    Download
} from 'lucide-angular';

@Component({
    selector: 'app-coproprietaire-paiements',
    standalone: true,
    imports: [CommonModule, LucideAngularModule],
    templateUrl: './coproprietaire-paiements.component.html'
})
export class CoproprietairePaiementsComponent {
    readonly CreditCard = CreditCard;
    readonly CheckCircle2 = CheckCircle2;
    readonly Clock = Clock;
    readonly Calendar = Calendar;
    readonly ArrowUpRight = ArrowUpRight;
    readonly Download = Download;

    historique = [
        { periode: 'T1 2026', montant: '3 570 MAD', status: 'Payé', statusClass: 'bg-green-100 text-green-700', date: '05/02/2026' },
        { periode: 'T4 2025', montant: '3 570 MAD', status: 'Payé', statusClass: 'bg-green-100 text-green-700', date: '10/11/2025' },
        { periode: 'T3 2025', montant: '3 570 MAD', status: 'Payé', statusClass: 'bg-green-100 text-green-700', date: '15/08/2025' },
        { periode: 'T2 2025', montant: '3 570 MAD', status: 'Payé', statusClass: 'bg-green-100 text-green-700', date: '21/05/2025' },
        { periode: 'T1 2025', montant: '3 600 MAD', status: 'Payé', statusClass: 'bg-green-100 text-green-700', date: '08/02/2025' },
    ];

    chargesAnnee = [
        { annee: '2025', prevu: '14 310 MAD', reel: '14 310 MAD', ecart: '0 MAD', status: 'Clôturé' },
        { annee: '2024', prevu: '14 000 MAD', reel: '14 000 MAD', ecart: '0 MAD', status: 'Clôturé' },
        { annee: '2023', prevu: '13 500 MAD', reel: '13 500 MAD', ecart: '0 MAD', status: 'Clôturé' }
    ];
}
