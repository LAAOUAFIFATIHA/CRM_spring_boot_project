import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {
  LucideAngularModule,
  LayoutDashboard,
  Building2,
  Users,
  FileText,
  CreditCard,
  Wrench,
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight,
  LogOut,
  ArrowDown,
  Building,
  DollarSign,
  MessageSquareWarning,
  Calendar,
  Download,
  Eye,
  Plus,
  User,
  CheckCircle2,
  Phone
} from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(LucideAngularModule.pick({
      LayoutDashboard,
      Building2,
      Users,
      FileText,
      CreditCard,
      Wrench,
      BarChart3,
      Settings,
      ChevronLeft,
      ChevronRight,
      LogOut,
      ArrowDown,
      Building,
      DollarSign,
      MessageSquareWarning,
      Calendar,
      Download,
      Eye,
      Plus,
      User,
      CheckCircle2,
      Phone
    }))
  ]
};
