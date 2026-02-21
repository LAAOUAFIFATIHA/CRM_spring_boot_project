import { useState, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
    CreditCard, LayoutDashboard, Building2, Users, FileText, Wrench, BarChart3, Settings,
    ChevronLeft, ChevronRight, LogOut
} from "lucide-react";
import { cn } from "../lib/utils";

interface SidebarItemProps {
    icon: any;
    label: string;
    href: string;
    active: boolean;
    collapsed: boolean;
}

const SidebarItem = ({ icon: Icon, label, href, active, collapsed }: SidebarItemProps) => {
    const navigate = useNavigate();
    return (
        <button
            onClick={() => navigate(href)}
            className={cn(
                "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                active
                    ? "bg-blue-600 text-white"
                    : "text-gray-400 hover:bg-white/10 hover:text-white",
                collapsed && "justify-center px-2"
            )}
            title={collapsed ? label : undefined}
        >
            <Icon className="h-5 w-5 shrink-0" />
            {!collapsed && <span>{label}</span>}
        </button>
    );
};

export default function MainLayout() {
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("syndic_token");
        if (!token) {
            navigate("/login");
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("syndic_token");
        navigate("/login");
    };


    // Mobile Responsive: Auto-collapse on small screens
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024) {
                setCollapsed(true);
            } else {
                setCollapsed(false);
            }
        };

        // Initial check
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const menuItems = [
        { icon: LayoutDashboard, label: "Tableau de bord", href: "/dashboard" },
        { icon: Building2, label: "Résidences", href: "/residences" },
        { icon: Users, label: "Copropriétaires", href: "/coproprietaires" },
        { icon: FileText, label: "Réclamations", href: "/reclamations" },
        { icon: CreditCard, label: "Finance & Recouvrement", href: "/finance" },
        { icon: Wrench, label: "Prestataires", href: "/prestataires" },
        { icon: BarChart3, label: "Reporting & KPIs", href: "/reporting" },
        { icon: Settings, label: "Paramètres", href: "/parametres" },
    ];

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <aside
                className={cn(
                    "flex flex-col border-r border-gray-800 bg-[#0f0f1a] text-white transition-all duration-300",
                    collapsed ? "w-[60px]" : "w-[260px]"
                )}
            >
                <div className={cn("flex h-16 items-center px-4 py-4", collapsed ? "justify-center" : "justify-between")}>
                    {!collapsed && (
                        <div className="flex items-center gap-2 font-bold text-xl">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                                <Building2 className="h-5 w-5" />
                            </div>
                            <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">SyndicPro</span>
                        </div>
                    )}
                    {collapsed && (
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                            <Building2 className="h-5 w-5" />
                        </div>
                    )}
                    {!collapsed && (
                        <button
                            onClick={() => setCollapsed(!collapsed)}
                            className="rounded-full bg-gray-800 p-1.5 text-gray-400 hover:bg-gray-700 hover:text-white"
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </button>
                    )}
                </div>

                {collapsed && (
                    <div className="flex justify-center pb-2">
                        <button
                            onClick={() => setCollapsed(!collapsed)}
                            className="rounded-full bg-gray-800 p-1.5 text-gray-400 hover:bg-gray-700 hover:text-white"
                        >
                            <ChevronRight className="h-4 w-4" />
                        </button>
                    </div>
                )}

                <nav className="flex-1 space-y-1 overflow-y-auto px-2 py-4 custom-scrollbar">
                    {menuItems.map((item) => (
                        <SidebarItem
                            key={item.href}
                            {...item}
                            active={location.pathname === item.href}
                            collapsed={collapsed}
                        />
                    ))}
                </nav>

                <div className="border-t border-gray-800 p-4">
                    <div className={cn("flex items-center gap-3", collapsed && "justify-center")}>
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-900 text-blue-200 ring-2 ring-blue-900/50">
                            <span className="font-semibold">N</span>
                        </div>
                        {!collapsed && (
                            <div className="overflow-hidden">
                                <p className="truncate text-sm font-medium text-white">Direction Générale</p>
                                <p className="truncate text-xs text-gray-400">v2.4.1</p>
                            </div>
                        )}
                    </div>
                    <button
                        onClick={handleLogout}
                        className={cn(
                            "mt-4 flex w-full items-center gap-2 rounded-lg py-2 text-sm font-medium text-red-400 transition-colors hover:bg-red-950/30 hover:text-red-300",
                            collapsed ? "justify-center" : "px-2"
                        )}
                        title={collapsed ? "Déconnexion" : undefined}
                    >
                        <LogOut className="h-5 w-5 shrink-0" />
                        {!collapsed && <span>Déconnexion</span>}
                    </button>
                </div>
            </aside>

            {/* Mobile Toggle Button (Visible only on small screens) */}
            <button
                className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl lg:hidden hover:bg-blue-700 transition-colors"
                onClick={() => setCollapsed(!collapsed)}
            >
                {collapsed ? <ChevronRight className="h-6 w-6" /> : <ChevronLeft className="h-6 w-6" />}
            </button>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto bg-[#f8f9fa]">
                <Outlet />
            </main>
        </div>
    );
}
