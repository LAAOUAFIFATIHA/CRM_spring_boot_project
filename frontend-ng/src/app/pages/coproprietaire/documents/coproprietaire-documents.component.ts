import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    LucideAngularModule,
    Search,
    Download,
    FileText,
    File,
    Folder
} from 'lucide-angular';

@Component({
    selector: 'app-coproprietaire-documents',
    standalone: true,
    imports: [CommonModule, LucideAngularModule],
    templateUrl: './coproprietaire-documents.component.html'
})
export class CoproprietaireDocumentsComponent {
    readonly Search = Search;
    readonly Download = Download;
    readonly FileText = FileText;
    readonly File = File;
    readonly Folder = Folder;

    documentsLegaux = [
        { nom: 'Titre de propriété A12', taille: '2.4 MB', date: '16/03/2021' },
        { nom: 'Titre de propriété A14', taille: '1.8 MB', date: '15/03/2021' },
        { nom: 'Règlement de copropriété', taille: '5.1 MB', date: '01/01/2020' }
    ];

    documentsFinanciers = [
        { nom: 'Appel de charges Q1 2026', taille: '450 KB', date: '15/01/2026' },
        { nom: 'Appel de charges Q4 2025', taille: '420 KB', date: '10/10/2025' }
    ];

    procesVerbaux = [
        { nom: 'PV AG Mixte 2025', taille: '1.2 MB', date: '20/06/2025' },
        { nom: 'PV AG Ordinaire 2024', taille: '1.1 MB', date: '18/06/2024' }
    ];
}
