import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
    selector: 'app-kpi-card',
    standalone: true,
    imports: [CommonModule, LucideAngularModule],
    template: `
    <div class="rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
        <div class="flex items-center justify-between">
            <div [ngClass]="'p-2 rounded-lg bg-' + color + '-100 text-' + color + '-600'">
                <lucide-icon [name]="icon" class="h-6 w-6"></lucide-icon>
            </div>
            <div *ngIf="trend" class="flex items-center gap-1 text-sm" 
                 [ngClass]="trend.isPositive ? 'text-green-600' : (trend.isNeutral ? 'text-gray-500' : 'text-red-600')">
                <span>{{trend.value}}</span>
                <span *ngIf="trend.isPositive">↑</span>
                <span *ngIf="!trend.isPositive && !trend.isNeutral">↓</span>
            </div>
        </div>
        <div class="mt-4">
            <p class="text-sm font-medium text-gray-500">{{title}}</p>
            <div class="flex items-baseline gap-2">
                <h3 class="text-2xl font-bold text-gray-900">{{value}}</h3>
                <span *ngIf="details" class="text-xs text-gray-400">{{details}}</span>
            </div>
        </div>
    </div>
  `
})
export class KpiCardComponent {
    @Input() title!: string;
    @Input() value!: string;
    @Input() icon!: any;
    @Input() color: string = 'blue';
    @Input() trend?: { value: string; isPositive?: boolean; isNeutral?: boolean };
    @Input() details?: string;
}
