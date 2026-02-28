import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
    LucideAngularModule,
    Building2,
    Mail,
    Lock,
    ArrowRight,
    ShieldCheck,
    HandCoins
} from 'lucide-angular';

@Component({
    selector: 'app-login-page',
    standalone: true,
    imports: [CommonModule, FormsModule, LucideAngularModule],
    templateUrl: './login-page.component.html'
})
export class LoginPageComponent {
    readonly Building2 = Building2;
    readonly Mail = Mail;
    readonly Lock = Lock;
    readonly ArrowRight = ArrowRight;
    readonly ShieldCheck = ShieldCheck;
    readonly HandCoins = HandCoins;

    email = '';
    password = '';
    selectedRole = 'dg'; // Default role
    isLoading = false;
    errorMessage = '';

    constructor(private router: Router) { }

    selectRole(role: string) {
        this.selectedRole = role;
    }

    onLogin() {
        if (!this.email || !this.password) {
            this.errorMessage = 'Veuillez remplir tous les champs.';
            return;
        }

        this.isLoading = true;
        this.errorMessage = '';

        // Simulate API call
        setTimeout(() => {
            this.isLoading = false;

            // For demo: any non-empty credentials work
            localStorage.setItem('syndic_token', 'demo-token-' + Math.random());
            localStorage.setItem('user_role', this.selectedRole);

            if (this.selectedRole === 'dg') {
                this.router.navigate(['/dashboard']);
            } else {
                this.router.navigate(['/recouvrement']);
            }
        }, 1500);
    }
}
