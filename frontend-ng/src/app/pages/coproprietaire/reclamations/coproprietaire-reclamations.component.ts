import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
    LucideAngularModule,
    Plus,
    Search,
    Filter,
    Download,
    Eye,
    ChevronLeft,
    ChevronRight,
    CheckCircle2,
    MessageSquareWarning,
    RefreshCw
} from 'lucide-angular';

@Component({
    selector: 'app-coproprietaire-reclamations',
    standalone: true,
    imports: [CommonModule, FormsModule, LucideAngularModule],
    templateUrl: './coproprietaire-reclamations.component.html'
})
export class CoproprietaireReclamationsComponent {
    readonly Plus = Plus;
    readonly Search = Search;
    readonly Filter = Filter;
    readonly Download = Download;
    readonly Eye = Eye;
    readonly ChevronLeft = ChevronLeft;
    readonly ChevronRight = ChevronRight;
    readonly CheckCircle2 = CheckCircle2;
    readonly MessageSquareWarning = MessageSquareWarning;
    readonly RefreshCw = RefreshCw;

    reclamations = [
        { ref: 'REC-001', date: '15/02/2026', type: 'Technique', typeClass: 'bg-red-100 text-red-700 border-red-200', desc: 'Fuite d\'eau salle de bain', prio: 'Haute', prioClass: 'bg-red-50 text-red-600', status: 'En cours', statusClass: 'bg-orange-100 text-orange-700 border-orange-200' },
        { ref: 'REC-004', date: '13/02/2026', type: 'Financière', typeClass: 'bg-yellow-100 text-yellow-700 border-yellow-200', desc: 'Erreur sur facture', prio: 'Haute', prioClass: 'bg-red-50 text-red-600', status: 'En cours', statusClass: 'bg-orange-100 text-orange-700 border-orange-200' },
        { ref: 'REC-002', date: '10/02/2026', type: 'Administrative', typeClass: 'bg-blue-100 text-blue-700 border-blue-200', desc: 'Demande attestation', prio: 'Moyenne', prioClass: 'bg-slate-100 text-slate-600', status: 'Résolu', statusClass: 'bg-green-100 text-green-700 border-green-200' },
        { ref: 'REC-003', date: '01/02/2026', type: 'Technique', typeClass: 'bg-red-100 text-red-700 border-red-200', desc: 'Problème éclairage', prio: 'Basse', prioClass: 'bg-blue-50 text-blue-600', status: 'Résolu', statusClass: 'bg-green-100 text-green-700 border-green-200' },
        { ref: 'REC-005', date: '28/01/2026', type: 'Autre', typeClass: 'bg-slate-100 text-slate-700 border-slate-200', desc: 'Bruit voisinage', prio: 'Moyenne', prioClass: 'bg-slate-100 text-slate-600', status: 'Résolu', statusClass: 'bg-green-100 text-green-700 border-green-200' }
    ];
}
