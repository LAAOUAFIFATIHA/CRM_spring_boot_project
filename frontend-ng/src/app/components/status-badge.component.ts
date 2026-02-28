import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-status-badge',
    standalone: true,
    imports: [CommonModule],
    template: `
    <span [ngClass]="getBadgeClasses()">
      {{status}}
    </span>
  `
})
export class StatusBadgeComponent {
    @Input() status!: string;

    getBadgeClasses() {
        const base = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors";
        switch (this.status.toLowerCase()) {
            case 'urgent':
            case 'impériale':
                return `${base} bg-red-100 text-red-800`;
            case 'en cours':
            case 'attente':
                return `${base} bg-blue-100 text-blue-800`;
            case 'ouvert':
                return `${base} bg-orange-100 text-orange-800`;
            case 'résolu':
            case 'payé':
                return `${base} bg-green-100 text-green-800`;
            default:
                return `${base} bg-gray-100 text-gray-800`;
        }
    }
}
