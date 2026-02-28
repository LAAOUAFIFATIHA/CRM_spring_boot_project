import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    LucideAngularModule,
    Building2,
    FileText,
    Download,
    CheckCircle2
} from 'lucide-angular';

@Component({
    selector: 'app-coproprietaire-lots',
    standalone: true,
    imports: [CommonModule, LucideAngularModule],
    templateUrl: './coproprietaire-lots.component.html'
})
export class CoproprietaireLotsComponent {
    readonly Building2 = Building2;
    readonly FileText = FileText;
    readonly Download = Download;
    readonly CheckCircle2 = CheckCircle2;
}
