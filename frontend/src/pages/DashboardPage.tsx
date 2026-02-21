import { ArrowDown, ArrowUp, BarChart3, Building, CreditCard, DollarSign, FileText, LayoutDashboard, Users } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { KpiCard } from "../components/KpiCard";
import { StatusBadge } from "../components/StatusBadge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

// Mock Data
const financialData = [
    { month: "Jan", budget: 450, real: 420 },
    { month: "Fév", budget: 460, real: 470 },
    { month: "Mar", budget: 480, real: 460 },
    { month: "Avr", budget: 500, real: 590 },
    { month: "Mai", budget: 460, real: 510 },
    { month: "Juin", budget: 470, real: 460 },
];

const reclamationData = [
    { month: "Jan", new: 12, resolved: 8 },
    { month: "Fév", new: 15, resolved: 11 },
    { month: "Mar", new: 18, resolved: 14 },
    { month: "Avr", new: 16, resolved: 16 },
    { month: "Mai", new: 16, resolved: 14 },
    { month: "Juin", new: 10, resolved: 9 },
];

const topResidences = [
    { id: 1, name: "Les Jardins Carthage", rate: 18.5, amount: "124,500 MAD" },
    { id: 2, name: "Résidence El Menzah", rate: 15.2, amount: "98,200 MAD" },
    { id: 3, name: "Parc du Lac", rate: 12.8, amount: "76,400 MAD" },
    { id: 4, name: "Les Berges", rate: 11.3, amount: "62,100 MAD" },
    { id: 5, name: "Résidence Ennasr", rate: 9.7, amount: "51,300 MAD" },
];

const recentReclamations = [
    { id: "REC-001", residence: "Les Jardins Carthage", copro: "Ahmed Ben Salah", type: "Fuite d'eau", status: "Urgent" },
    { id: "REC-002", residence: "Résidence El Menzah", copro: "Fatma Khaled", type: "Ascenseur", status: "En cours" },
    { id: "REC-003", residence: "Parc du Lac", copro: "Mohamed Trabelsi", type: "Éclairage", status: "Ouvert" },
    { id: "REC-004", residence: "Les Berges", copro: "Sonia Mejri", type: "Nuisances", status: "Résolu" },
    { id: "REC-005", residence: "Résidence Ennasr", copro: "Karim Bouazidi", type: "Infiltration", status: "Urgent" },
];

export default function DashboardPage() {
    return (
        <div className="p-8 space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-blue-900 uppercase tracking-tight">TABLEAU DE BORD DIRECTION GÉNÉRALE</h1>
                    <p className="text-gray-500 mt-1">Vue consolidée - Toutes résidences</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="text-gray-600">
                        Période <ArrowDown className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="text-gray-600">Exporter</Button>
                </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                <KpiCard
                    title="Résidences"
                    value="124"
                    icon={Building}
                    color="blue"
                />
                <KpiCard
                    title="Recouvrement"
                    value="87.3%"
                    trend={{ value: "+2.1%", isPositive: true }}
                    icon={CreditCard}
                    color="green"
                />
                <KpiCard
                    title="Taux d'imp."
                    value="12.7%"
                    trend={{ value: "-0.8%", isPositive: true }}
                    icon={DollarSign}
                    color="red"
                />
                <KpiCard
                    title="Réclamations"
                    value="48"
                    trend={{ value: "+6", isNeutral: true }}
                    icon={FileText}
                    color="orange"
                />
                <KpiCard
                    title="Budget"
                    value="94.2%"
                    details="Stable"
                    icon={BarChart3}
                    color="purple"
                />
                <KpiCard
                    title="Satisfaction"
                    value="4.2/5"
                    trend={{ value: "+0.1", isPositive: true }}
                    icon={Users}
                    color="blue"
                />
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold text-gray-800">SITUATION FINANCIÈRE: Budget vs Réel</CardTitle>
                        <CardDescription>Données en milliers MAD (Jan - Juin)</CardDescription>
                    </CardHeader>
                    <CardContent className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={financialData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                                <YAxis tickLine={false} axisLine={false} tickFormatter={(value) => `${value}k`} />
                                <Tooltip
                                    formatter={(value: number) => [`${value}k MAD`, '']}
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                />
                                <Legend />
                                <Bar dataKey="budget" name="Budget prévu" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                                <Bar dataKey="real" name="Réalisé" fill="#22c55e" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold text-gray-800">ÉVOLUTION DES RÉCLAMATIONS</CardTitle>
                        <CardDescription>Nouvelles vs Résolues (Jan - Juin)</CardDescription>
                    </CardHeader>
                    <CardContent className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={reclamationData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                                <YAxis tickLine={false} axisLine={false} />
                                <Tooltip
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                />
                                <Legend />
                                <Bar dataKey="new" name="Nouvelles" fill="#f97316" radius={[4, 4, 0, 0]} />
                                <Bar dataKey="resolved" name="Résolues" fill="#22c55e" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </div>

            {/* Bottom Layout */}
            <div className="flex flex-col xl:flex-row gap-8">
                {/* Left Column (Tables) */}
                <div className="flex-1 space-y-8">
                    {/* Top Residences Table */}
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle className="flex items-center gap-2 text-lg text-gray-800">
                                <span className="text-yellow-500">⚠️</span> TOP RÉSIDENCES - TAUX D'IMPAYÉS ÉLEVÉS
                            </CardTitle>
                            <Button variant="link" className="text-blue-600">Voir tout →</Button>
                        </CardHeader>
                        <CardContent>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead className="text-gray-500 border-b">
                                        <tr>
                                            <th className="text-left py-3 font-medium">Résidence</th>
                                            <th className="text-right py-3 font-medium">Taux d'imp.</th>
                                            <th className="text-right py-3 font-medium">Montant</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y">
                                        {topResidences.map((res) => (
                                            <tr key={res.id}>
                                                <td className="py-3 font-medium text-gray-900">{res.name}</td>
                                                <td className="py-3 text-right text-red-600 font-bold">{res.rate}%</td>
                                                <td className="py-3 text-right text-gray-600">{res.amount}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Recent Reclamations Table */}
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle className="text-lg text-gray-800">DERNIÈRES RÉCLAMATIONS (5 plus récentes)</CardTitle>
                            <Button variant="link" className="text-blue-600">Voir toutes les réclamations →</Button>
                        </CardHeader>
                        <CardContent>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead className="text-gray-500 border-b">
                                        <tr>
                                            <th className="text-left py-3 font-medium">RÉF.</th>
                                            <th className="text-left py-3 font-medium">RÉSIDENCE</th>
                                            <th className="text-left py-3 font-medium">COPROPRIÉTAIRE</th>
                                            <th className="text-left py-3 font-medium">TYPE</th>
                                            <th className="text-left py-3 font-medium">STATUT</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y">
                                        {recentReclamations.map((rec) => (
                                            <tr key={rec.id} className="group hover:bg-gray-50 transition-colors">
                                                <td className="py-3 font-medium text-gray-900">{rec.id}</td>
                                                <td className="py-3 text-gray-600">{rec.residence}</td>
                                                <td className="py-3 text-gray-600">{rec.copro}</td>
                                                <td className="py-3 text-gray-600">{rec.type}</td>
                                                <td className="py-3">
                                                    <StatusBadge status={rec.status} />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Sidebar (Alerts) */}
                <div className="w-full xl:w-[320px] space-y-4">
                    <h3 className="text-lg font-bold text-gray-900 uppercase tracking-tight mb-4">ALERTES CRITIQUES</h3>

                    <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-4 shadow-sm">
                        <h4 className="font-bold text-red-800 flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse"></span>
                            RÉSIDENCE OASIS
                        </h4>
                        <p className="mt-1 text-sm text-red-700">Dépassement budget &gt;15%</p>
                        <p className="text-sm text-red-700 font-medium">Taux impayés: 22%</p>
                    </div>

                    <div className="rounded-lg border-l-4 border-orange-500 bg-orange-50 p-4 shadow-sm">
                        <h4 className="font-bold text-orange-800 flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-orange-600"></span>
                            RÉSIDENCE ATLAS
                        </h4>
                        <p className="mt-1 text-sm text-orange-700">Recouvrement &lt; 70%</p>
                        <p className="text-sm text-orange-700 font-medium">Actuellement: 68%</p>
                    </div>

                    <div className="rounded-lg border-l-4 border-orange-500 bg-orange-50 p-4 shadow-sm">
                        <h4 className="font-bold text-orange-800 flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-orange-600"></span>
                            CONTRAT MAINTENANCE
                        </h4>
                        <p className="mt-1 text-sm text-orange-700">3 retards cette semaine</p>
                        <p className="text-sm text-orange-700 font-medium">Prestataire: Élévateur+</p>
                    </div>

                    <div className="rounded-lg border-l-4 border-yellow-500 bg-yellow-50 p-4 shadow-sm">
                        <h4 className="font-bold text-yellow-800 flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-yellow-600"></span>
                            RÉCLAMATIONS
                        </h4>
                        <p className="mt-1 text-sm text-yellow-700">48 ouvertes</p>
                        <p className="text-sm text-yellow-700 font-medium">12 en retard (&gt;7 jours)</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
