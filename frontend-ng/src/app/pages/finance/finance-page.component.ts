import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    LucideAngularModule,
    TrendingUp,
    CheckCircle,
    Calendar,
    ArrowUpRight,
    ArrowDownRight,
    Download,
    Filter,
    FileText,
    History,
    Wallet
} from 'lucide-angular';
import { KpiCardComponent } from '../../components/kpi-card.component';

interface MonthlyRecovery {
    month: string;
    target: string;
    collected: string;
    rate: number;
    status: 'Clôturé' | 'En cours' | 'Partiel';
    dateCloture?: string;
}

@Component({
    selector: 'app-finance-page',
    standalone: true,
    imports: [CommonModule, LucideAngularModule, KpiCardComponent],
    templateUrl: './finance-page.component.html'
})
export class FinancePageComponent {
    // Icons
    readonly TrendingUp = TrendingUp;
    readonly CheckCircle = CheckCircle;
    readonly Calendar = Calendar;
    readonly ArrowUpRight = ArrowUpRight;
    readonly ArrowDownRight = ArrowDownRight;
    readonly Download = Download;
    readonly Filter = Filter;
    readonly FileText = FileText;
    readonly History = History;
    readonly Wallet = Wallet;

    // Data for recovered months
    recoveredMonths: MonthlyRecovery[] = [
        {
            month: 'Janvier 2026',
            target: '1,200,000 MAD',
            collected: '1,245,000 MAD',
            rate: 103.7,
            status: 'Clôturé',
            dateCloture: '02/02/2026'
        },
        {
            month: 'Décembre 2025',
            target: '1,100,000 MAD',
            collected: '1,110,000 MAD',
            rate: 100.9,
            status: 'Clôturé',
            dateCloture: '05/01/2026'
        },
        {
            month: 'Novembre 2025',
            target: '950,000 MAD',
            collected: '960,000 MAD',
            rate: 101.1,
            status: 'Clôturé',
            dateCloture: '03/12/2025'
        },
        {
            month: 'Octobre 2025',
            target: '950,000 MAD',
            collected: '950,000 MAD',
            rate: 100.0,
            status: 'Clôturé',
            dateCloture: '02/11/2025'
        }
    ];

    // Stats for overview
    totalCollectedYTD = "4,265,000 MAD";
    avgRecoveryRate = 101.4;
    totalMonthsRecovered = 4;

    getRateColor(rate: number): string {
        if (rate >= 100) return 'text-green-600';
        if (rate >= 80) return 'text-amber-600';
        return 'text-red-600';
    }

    getRateBg(rate: number): string {
        if (rate >= 100) return 'bg-green-100';
        if (rate >= 80) return 'bg-amber-100';
        return 'bg-red-100';
    }
}
