import { ArrowDown, AlertCircle, TrendingUp, DollarSign, Wallet } from "lucide-react";
import { Button } from "../components/ui/button";
import { KpiCard } from "../components/KpiCard";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

// Mock Data
const recoveryData = [
    { month: "Jan", expected: 2050, collected: 1750 },
    { month: "Fev", expected: 2100, collected: 1950 },
    { month: "Mar", expected: 2050, collected: 1950 },
    { month: "Avr", expected: 2450, collected: 2400 },
    { month: "Mai", expected: 1950, collected: 2050 },
    { month: "Jun", expected: 2350, collected: 2400 },
];

const unpaidByResidence = [
    { name: "Les Jardins Carthage", value: 125, color: "#ef4444" },
    { name: "Résidence El Menzah", value: 98, color: "#f97316" },
    { name: "Parc du Lac", value: 67, color: "#3b82f6" },
    { name: "Résidence Jasmine", value: 30, color: "#94a3b8" },
];

const upcomingPayments = [
    { residence: "Les Jardins Carthage", owner: "Mohammed Ali", amount: "45,000 MAD", date: "2024-02-28", daysLeft: 5, status: "orange" },
    { residence: "Résidence El Menzah", owner: "Fatima Bennani", amount: "38,500 MAD", date: "2024-02-25", daysLeft: 2, status: "red" },
    { residence: "Parc du Lac", owner: "Ahmed Khaled", amount: "52,000 MAD", date: "2024-03-05", daysLeft: 12, status: "light-green" },
    { residence: "Résidence Jasmine", owner: "Saida Hassan", amount: "28,700 MAD", date: "2024-03-15", daysLeft: 22, status: "green" },
];

const unpaidTable = [
    { residence: "Les Jardins Carthage", amount: "124,500 MAD", rate: "18.5%", rateColor: "bg-red-100 text-red-700" },
    { residence: "Résidence El Menzah", amount: "98,200 MAD", rate: "15.2%", rateColor: "bg-orange-100 text-orange-700" },
    { residence: "Parc du Lac", amount: "67,300 MAD", rate: "21.8%", rateColor: "bg-red-100 text-red-700" },
    { residence: "Résidence Jasmine", amount: "30,000 MAD", rate: "12.3%", rateColor: "bg-orange-100 text-orange-700" },
];

export default function FinancePage() {
    return (
        <div className="p-8 space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Finance & Recouvrement</h1>
                    <p className="text-gray-500 mt-1">Gestion des finances et suivi du recouvrement des paiements</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="text-gray-600">
                        Mois en cours <ArrowDown className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="text-gray-600">
                        ⬇ Exporter
                    </Button>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                        + Appel de fonds
                    </Button>
                </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <KpiCard title="Total encaissé ce mois" value="2.4M MAD" icon={Wallet} color="green" />
                <KpiCard title="Taux recouvrement global" value="87.3%" icon={TrendingUp} color="blue" />
                <KpiCard title="Impayés total" value="320,000 MAD" icon={AlertCircle} color="red" />
                <KpiCard title="Échéances à venir" value="180,000 MAD" icon={DollarSign} color="orange" />
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold text-gray-800">Évolution du recouvrement</CardTitle>
                        <CardDescription>En milliers MAD</CardDescription>
                    </CardHeader>
                    <CardContent className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={recoveryData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                                <YAxis tickLine={false} axisLine={false} domain={[0, 2600]} />
                                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                                <Legend />
                                <Bar dataKey="collected" name="Encaissé" fill="#22c55e" radius={[4, 4, 0, 0]} />
                                <Bar dataKey="expected" name="Attendu" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold text-gray-800">Répartition impayés par résidence</CardTitle>
                        <CardDescription>Vue d'ensemble des dettes</CardDescription>
                    </CardHeader>
                    <CardContent className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={unpaidByResidence}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={100}
                                    paddingAngle={2}
                                    dataKey="value"
                                >
                                    {unpaidByResidence.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip formatter={(value: any) => `${value}K MAD`} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                                <Legend layout="vertical" verticalAlign="middle" align="right" wrapperStyle={{ fontSize: '12px' }} />
                            </PieChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </div>

            {/* Tables Section */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                {/* Echeances */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold text-gray-800">Échéances à venir</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead className="text-gray-500 border-b">
                                    <tr>
                                        <th className="text-left py-3 font-medium">Résidence</th>
                                        <th className="text-left py-3 font-medium">Copropriétaire</th>
                                        <th className="text-right py-3 font-medium">Montant</th>
                                        <th className="text-right py-3 font-medium">Date</th>
                                        <th className="text-center py-3 font-medium">Jours restants</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y">
                                    {upcomingPayments.map((item, index) => {
                                        let badgeColor = "bg-green-100 text-green-700";
                                        if (item.status === "orange") badgeColor = "bg-orange-100 text-orange-700";
                                        if (item.status === "red") badgeColor = "bg-red-100 text-red-700";
                                        if (item.status === "light-green") badgeColor = "bg-green-50 text-green-600";

                                        return (
                                            <tr key={index}>
                                                <td className="py-3 text-gray-900 font-medium">{item.residence}</td>
                                                <td className="py-3 text-gray-600">{item.owner}</td>
                                                <td className="py-3 text-right font-semibold">{item.amount}</td>
                                                <td className="py-3 text-right text-gray-500">{item.date}</td>
                                                <td className="py-3 text-center">
                                                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${badgeColor}`}>
                                                        {item.daysLeft} jours
                                                    </span>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>

                {/* Impayes */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold text-gray-800">Impayés par résidence</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead className="text-gray-500 border-b">
                                    <tr>
                                        <th className="text-left py-3 font-medium">Résidence</th>
                                        <th className="text-right py-3 font-medium">Montant impayé</th>
                                        <th className="text-center py-3 font-medium">Taux impayé</th>
                                        <th className="text-right py-3 font-medium">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y">
                                    {unpaidTable.map((item, index) => (
                                        <tr key={index}>
                                            <td className="py-3 text-gray-900 font-medium">{item.residence}</td>
                                            <td className="py-3 text-right font-bold text-red-600">{item.amount}</td>
                                            <td className="py-3 text-center">
                                                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${item.rateColor}`}>
                                                    {item.rate}
                                                </span>
                                            </td>
                                            <td className="py-3 text-right">
                                                <Button variant="outline" size="sm" className="h-8 text-xs border-red-200 text-red-600 hover:bg-red-50">
                                                    Relancer
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="flex justify-center gap-8 text-sm pt-4">
                <a href="#" className="text-blue-600 hover:underline font-medium">🔗 Voir historique des paiements</a>
                <a href="#" className="text-blue-600 hover:underline font-medium">🔗 Gestion des appels de fonds</a>
            </div>
        </div>
    );
}
