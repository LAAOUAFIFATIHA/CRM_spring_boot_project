import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
    const router = inject(Router);
    const token = localStorage.getItem('syndic_token');

    if (token) {
        const role = localStorage.getItem('user_role');
        const url = state.url;

        // Si c'est un copropriétaire qui essaie d'accéder aux routes principales, on le redirige
        if (role === 'coproprietaire' && !url.startsWith('/coproprietaire')) {
            setTimeout(() => router.navigate(['/coproprietaire/dashboard']), 0);
            return false;
        }

        // Si ce n'est PAS un copropriétaire qui essaie d'accéder aux routes copropriétaires
        if (role !== 'coproprietaire' && url.startsWith('/coproprietaire')) {
            setTimeout(() => router.navigate(['/dashboard']), 0);
            return false;
        }

        return true;
    }

    // Not authenticated, redirect to login
    router.navigate(['/login']);
    return false;
};

export const loginGuard: CanActivateFn = (route, state) => {
    // Pour éviter d'être bloqué en phase de test, si on va sur /login, on nettoie tout
    localStorage.removeItem('syndic_token');
    localStorage.removeItem('user_role');

    return true;
};
