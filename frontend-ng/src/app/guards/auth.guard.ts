import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
    const router = inject(Router);
    const token = localStorage.getItem('syndic_token');

    if (token) {
        // Basic role check if needed
        const role = localStorage.getItem('user_role');
        const path = route.routeConfig?.path;

        // Optional: Protect specific dashboards based on role
        /*
        if (path === 'dashboard' && role !== 'dg') {
          router.navigate(['/recouvrement']);
          return false;
        }
        if (path === 'recouvrement' && role !== 'recouvrement') {
          router.navigate(['/dashboard']);
          return false;
        }
        */

        return true;
    }

    // Not authenticated, redirect to login
    router.navigate(['/login']);
    return false;
};

export const loginGuard: CanActivateFn = (route, state) => {
    const router = inject(Router);
    const token = localStorage.getItem('syndic_token');

    if (token) {
        const role = localStorage.getItem('user_role');
        if (role === 'dg') {
            router.navigate(['/dashboard']);
        } else {
            router.navigate(['/recouvrement']);
        }
        return false;
    }

    return true;
};
