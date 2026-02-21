import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import ResidencesPage from "./pages/ResidencesPage";
import CoproprietairesPage from "./pages/CoproprietairesPage";
import ReclamationsPage from "./pages/ReclamationsPage";
import FinancePage from "./pages/FinancePage";
import PrestatairesPage from "./pages/PrestatairesPage";
import ReportingPage from "./pages/ReportingPage";
import ParametresPage from "./pages/ParametresPage";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        {/* Protected Routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="residences" element={<ResidencesPage />} />
          <Route path="coproprietaires" element={<CoproprietairesPage />} />
          <Route path="reclamations" element={<ReclamationsPage />} />
          <Route path="finance" element={<FinancePage />} />
          <Route path="prestataires" element={<PrestatairesPage />} />
          <Route path="reporting" element={<ReportingPage />} />
          <Route path="parametres" element={<ParametresPage />} />
        </Route>

        {/* Catch all - Redirect to dashboard which will handle auth check */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
