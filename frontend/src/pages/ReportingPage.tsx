import { ArrowDown, Calendar, Download, FileText, Settings, TrendingUp, CheckCircle, AlertCircle, Clock, Star, Bell } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { KpiCard } from "../components/KpiCard";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { cn } from "../lib/utils";

// Mock Data for Charts
const annualTrends = [
    { month: "Jan", recovery: 82, satisfaction: 4.1, complaints: 140 },
    { month: "Fev", recovery: 85, satisfaction: 4.2, complaints: 135 },
    { month: "Mar", recovery: 84, satisfaction: 4.1, complaints: 160 },
    { month: "Avr", recovery: 88, satisfaction: 4.3, complaints: 120 },
    { month: "Mai", recovery: 86, satisfaction: 4.2, complaints: 130 },
    { month: "Jun", recovery: 90, satisfaction: 4.4, complaints: 115 },
    { month: "Juil", recovery: 89, satisfaction: 4.3, complaints: 125 },
    { month: "Aou", recovery: 85, satisfaction: 4.1, complaints: 145 },
    { month: "Sep", recovery: 88, satisfaction: 4.2, complaints: 130 },
    { month: "Oct", recovery: 92, satisfaction: 4.5, complaints: 110 },
    { month: "Nov", recovery: 91, satisfaction: 4.4, complaints: 118 },
    { month: "Dec", recovery: 94, satisfaction: 4.6, complaints: 105 },
];

const comparativeData = [
    { residence: "Jardins Carthage", recovery: "87%", impact: "18.5%", delay: "2.8j", satisfaction: "4.5/5", trend: "+5%", trendPositive: true },
    { residence: "El Menzah", recovery: "92%", impact: "15.2%", delay: "2.1j", satisfaction: "4.3/5", trend: "+3%", trendPositive: true },
    { residence: "Parc du Lac", recovery: "76%", impact: "12.8%", delay: "4.2j", satisfaction: "3.8/5", trend: "-2%", trendPositive: false },
    { residence: "Les Berges", recovery: "89%", impact: "11.3%", delay: "3.1j", satisfaction: "4.1/5", trend: "+1%", trendPositive: true },
    { residence: "Ennasr", recovery: "94%", impact: "9.7%", delay: "1.9j", satisfaction: "4.6/5", trend: "+4%", trendPositive: true },
    { residence: "Oasis", recovery: "68%", impact: "22%", delay: "5.3j", satisfaction: "3.2/5", trend: "-8%", trendPositive: false },
];

const reports = [
    { name: "Rapport mensuel - Janvier 2026", date: "01/02/2026" },
    { name: "Rapport mensuel - Décembre 2025", date: "02/01/2026" },
    { name: "Rapport trimestriel - Q4 2025", date: "05/01/2026" },
    { name: "Analyse comparative - 2025", date: "15/12/2025" },
    { name: "Suivi des réclamations - Annuel", date: "20/12/2025" },
];

export default function ReportingPage() {
    const handleExport = (format: string) => {
        // Mock export function
        alert(`Export ${format} lancé...`);
    };

    return (
        <div className="p-8 space-y-8 animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Reporting & KPIs</h1>
                    <p className="text-gray-500 mt-1">Tableau de bord stratégique - Indicateurs de performance</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="text-gray-600 bg-white">
                        <Calendar className="mr-2 h-4 w-4" /> Année 2026 <ArrowDown className="ml-2 h-4 w-4" />
                    </Button>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={() => handleExport("Global")}>
                        <Download className="mr-2 h-4 w-4" /> Exporter
                    </Button>
                </div>
            </div>

            {/* KPI Section */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">KPIs PRINCIPAUX</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Row 1 */}
                    <KpiCard title="Recouvrement global" value="87.3%" trend={{ value: "+2.1%", isPositive: true }} icon={TrendingUp} color="green" />
                    <KpiCard title="Taux d'impact" value="12.7%" trend={{ value: "-0.8%", isPositive: false }} icon={AlertCircle} color="red" />
                    <KpiCard title="Budget respecté" value="94.2%" details="Stable" icon={CheckCircle} color="blue" />
                    <KpiCard title="Délai traitement" value="3.2 jours" trend={{ value: "-0.5j", isPositive: true }} icon={Clock} color="green" />

                    {/* Row 2 */}
                    <KpiCard title="Satisfaction" value="4.2/5" trend={{ value: "+0.1", isPositive: true }} icon={Star} color="orange" />
                    <KpiCard title="Réactivité" value="94%" trend={{ value: "+2%", isPositive: true }} icon={TrendingUp} color="green" />
                    <KpiCard title="Proactivité" value="78%" trend={{ value: "+5%", isPositive: true }} icon={TrendingUp} color="green" />
                    <KpiCard title="Réclamations" value="156/mois" trend={{ value: "-12%", isPositive: true }} icon={Bell} color="orange" />
                </div>
            </div>

            {/* Analysis & Trends Section */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                {/* Comparative Table */}
                <Card className="hover:shadow-md transition-shadow">
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold text-gray-800">ANALYSE COMPARATIVE ENTRE RÉSIDENCES</CardTitle>
                        <CardDescription>Performance par résidence</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="text-gray-500 border-b">
                                    <tr>
                                        <th className="py-3 font-medium">Résidence</th>
                                        <th className="py-3 font-medium text-right">Recouv.</th>
                                        <th className="py-3 font-medium text-right">Impact</th>
                                        <th className="py-3 font-medium text-right">Délai</th>
                                        <th className="py-3 font-medium text-right">Satisf.</th>
                                        <th className="py-3 font-medium text-right">Tendance</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y">
                                    {comparativeData.map((res, i) => (
                                        <tr key={i} className="group hover:bg-gray-50 transition-colors">
                                            <td className="py-3 font-medium text-gray-900">{res.residence}</td>
                                            <td className="py-3 text-right">{res.recovery}</td>
                                            <td className="py-3 text-right">{res.impact}</td>
                                            <td className="py-3 text-right">{res.delay}</td>
                                            <td className="py-3 text-right">{res.satisfaction}</td>
                                            <td className="py-3 text-right">
                                                <span className={cn("inline-flex items-center px-2 py-0.5 rounded text-xs font-medium", res.trendPositive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700")}>
                                                    {res.trend}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>

                {/* Trends Chart */}
                <Card className="hover:shadow-md transition-shadow">
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold text-gray-800">TENDANCES ANNUELLES</CardTitle>
                        <CardDescription>Vue d'ensemble 2026</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[350px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={annualTrends}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
                                <YAxis yAxisId="left" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} domain={[0, 100]} />
                                <YAxis yAxisId="right" orientation="right" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} domain={[0, 200]} hide />
                                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                                <Legend />
                                <Line yAxisId="left" type="monotone" dataKey="recovery" name="Recouvrement (%)" stroke="#22c55e" strokeWidth={2} dot={false} />
                                <Line yAxisId="left" type="monotone" dataKey="satisfaction" name="Satisfaction (x20)" stroke="#3b82f6" strokeWidth={2} dot={false} />
                                <Line yAxisId="right" type="monotone" dataKey="complaints" name="Réclamations (Vol)" stroke="#f97316" strokeWidth={2} dot={false} />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </div>

            {/* Reports and Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1 space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800 uppercase tracking-wide">RAPPORTS DISPONIBLES</h3>
                    <div className="space-y-3">
                        {reports.map((report, i) => (
                            <Card key={i} className="hover:shadow-sm transition-shadow cursor-pointer border-l-4 border-l-blue-500">
                                <CardContent className="p-4 flex justify-between items-center">
                                    <div>
                                        <p className="font-medium text-gray-900 text-sm">{report.name}</p>
                                        <p className="text-xs text-gray-500 mt-1">Généré le {report.date}</p>
                                    </div>
                                    <Button variant="ghost" size="sm" className="h-8 w-8 text-gray-400 hover:text-blue-600">
                                        <Download className="h-4 w-4" />
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <Button variant="outline" className="w-full border-dashed border-gray-400 text-gray-600 hover:bg-gray-50 hover:text-blue-600">
                        Générer nouveau rapport <ArrowDown className="ml-2 h-4 w-4" />
                    </Button>
                </div>

                <div className="lg:col-span-2 space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800 uppercase tracking-wide">ACTIONS RAPIDES</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <Button variant="outline" className="h-24 flex flex-col gap-2 bg-white hover:bg-blue-50 hover:border-blue-200 transition-all text-gray-700 hover:text-blue-700" onClick={() => handleExport("PDF")}>
                            <Download className="h-6 w-6" />
                            Exporter PDF
                        </Button>
                        <Button variant="outline" className="h-24 flex flex-col gap-2 bg-white hover:bg-green-50 hover:border-green-200 transition-all text-gray-700 hover:text-green-700" onClick={() => handleExport("Excel")}>
                            <FileText className="h-6 w-6" />
                            Exporter Excel
                        </Button>
                        <Button variant="outline" className="h-24 flex flex-col gap-2 bg-white hover:bg-purple-50 hover:border-purple-200 transition-all text-gray-700 hover:text-purple-700">
                            <Calendar className="h-6 w-6" />
                            Programmer
                        </Button>
                        <Button variant="outline" className="h-24 flex flex-col gap-2 bg-white hover:bg-orange-50 hover:border-orange-200 transition-all text-gray-700 hover:text-orange-700">
                            <TrendingUp className="h-6 w-6" />
                            Tableau DG
                        </Button>
                        <Button variant="outline" className="h-24 flex flex-col gap-2 bg-white hover:bg-cyan-50 hover:border-cyan-200 transition-all text-gray-700 hover:text-cyan-700">
                            <FileText className="h-6 w-6" />
                            Voir détails
                        </Button>
                        <Button variant="outline" className="h-24 flex flex-col gap-2 bg-white hover:bg-gray-100 hover:border-gray-300 transition-all text-gray-700 hover:text-gray-900">
                            <Settings className="h-6 w-6" />
                            Paramètres
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
