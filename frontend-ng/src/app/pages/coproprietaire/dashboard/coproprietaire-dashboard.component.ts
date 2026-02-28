import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    LucideAngularModule,
    Building2,
    DollarSign,
    Phone,
    Calendar,
    Briefcase,
    FileText,
    Download
} from 'lucide-angular';

@Component({
    selector: 'app-coproprietaire-dashboard',
    standalone: true,
    imports: [CommonModule, LucideAngularModule],
    templateUrl: './coproprietaire-dashboard.component.html'
})
export class CoproprietaireDashboardComponent {
    readonly Building2 = Building2;
    readonly DollarSign = DollarSign;
    readonly Phone = Phone;
    readonly Calendar = Calendar;
    readonly Briefcase = Briefcase;
    readonly FileText = FileText;
    readonly Download = Download;

    // Data corresponding to the specifications
    lots = [
        { name: 'A12', type: 'Appartement 3p', surface: '85 m²', tardives: 45, status: 'Occupé', statusClass: 'bg-green-100 text-green-700' },
        { name: 'A14', type: 'Appartement 2p', surface: '72 m²', tardives: 38, status: 'Loué', statusClass: 'bg-blue-100 text-blue-700' }
    ];

    reclamations = [
        { date: '15/02/2026', type: 'Technique', typeClass: 'bg-red-100 text-red-700', description: 'Fuite d\'eau', status: 'En cours', statusClass: 'bg-orange-100 text-orange-700 border border-orange-200' },
        { date: '10/02/2026', type: 'Admin', typeClass: 'bg-gray-100 text-gray-700', description: 'Demande attestation', status: 'Résolu', statusClass: 'bg-green-100 text-green-700 border border-green-200' },
        { date: '05/02/2026', type: 'Financière', typeClass: 'bg-yellow-100 text-yellow-700', description: 'Erreur facture', status: 'En cours', statusClass: 'bg-orange-100 text-orange-700 border border-orange-200' }
    ];
}
