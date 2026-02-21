import { AlertTriangle, Bell, Calendar, CheckCircle, Clock, FileText, Star, Truck } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { KpiCard } from "../components/KpiCard";
import { StatusBadge } from "../components/StatusBadge";
import { DataTable } from "../components/DataTable";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

interface Prestataire {
    id: number;
    name: string;
    type: string;
    residences: string;
    contact: string;
    contractStatus: string;
    nextIntervention: string;
}

const prestatairesData: Prestataire[] = [
    { id: 1, name: "Élévateur Plus", type: "Ascenseurs", residences: "5 résidences", contact: "contact@elevateur.ma", contractStatus: "Actif", nextIntervention: "20/02/2026" },
    { id: 2, name: "Nettoyage Pro", type: "Nettoyage", residences: "8 résidences", contact: "info@nettoyage.ma", contractStatus: "Actif", nextIntervention: "18/02/2026" },
    { id: 3, name: "Sécurité 24/7", type: "Sécurité", residences: "3 résidences", contact: "admin@securite.ma", contractStatus: "En négociation", nextIntervention: "-" },
    { id: 4, name: "Plomberie Rabat", type: "Plomberie", residences: "6 résidences", contact: "contact@plomb.ma", contractStatus: "Actif", nextIntervention: "22/02/2026" },
    { id: 5, name: "Électricité Expert", type: "Électricité", residences: "4 résidences", contact: "info@electric.ma", contractStatus: "Actif", nextIntervention: "25/02/2026" },
];

const performanceData = [
    { name: "Élévateur Plus", interventions: 24, delays: 1, reclamations: 3, score: "4.2/5", scoreColor: "bg-green-100 text-green-700", delayColor: "bg-orange-100 text-orange-700", recColor: "bg-orange-100 text-orange-700" },
    { name: "Nettoyage Pro", interventions: 42, delays: 2, reclamations: 1, score: "4.5/5", scoreColor: "bg-green-100 text-green-700", delayColor: "bg-orange-100 text-orange-700", recColor: "bg-orange-100 text-orange-700" },
    { name: "Sécurité 24/7", interventions: 18, delays: 0, reclamations: 0, score: "4.8/5", scoreColor: "bg-green-100 text-green-700", delayColor: "bg-green-100 text-green-700", recColor: "bg-green-100 text-green-700" },
    { name: "Jardinier Plus", interventions: 12, delays: 3, reclamations: 4, score: "3.5/5", scoreColor: "bg-orange-100 text-orange-700", delayColor: "bg-red-100 text-red-700", recColor: "bg-red-100 text-red-700" },
    { name: "TechClean", interventions: 8, delays: 4, reclamations: 6, score: "2.8/5", scoreColor: "bg-red-100 text-red-700", delayColor: "bg-red-100 text-red-700", recColor: "bg-red-100 text-red-700" },
];

export default function PrestatairesPage() {
    const columns = [
        { header: "Prestataire", accessorKey: "name" as keyof Prestataire, className: "font-medium text-gray-900" },
        { header: "Type", accessorKey: "type" as keyof Prestataire, className: "text-gray-500" },
        { header: "Résidences assignées", accessorKey: "residences" as keyof Prestataire, className: "text-gray-900" },
        { header: "Contact", accessorKey: "contact" as keyof Prestataire, className: "text-gray-500 text-sm" },
        {
            header: "Statut contrat", accessorKey: "contractStatus" as keyof Prestataire,
            cell: (item: Prestataire) => <StatusBadge status={item.contractStatus} />
        },
        { header: "Prochaine intervention", accessorKey: "nextIntervention" as keyof Prestataire, className: "text-gray-900" },
    ];

    return (
        <div className="p-8 space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Gestion des Prestataires</h1>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    + Nouveau Prestataire
                </Button>
            </div>

            {/* Search */}
            <div className="bg-white p-4 rounded-lg border shadow-sm max-w-md">
                <Input placeholder="Rechercher par nom, type..." />
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <KpiCard title="Total Prestataires" value="24" icon={Truck} color="blue" />
                <KpiCard title="Contrats actifs" value="18" icon={FileText} color="green" />
                <KpiCard title="Interventions ce mois" value="42" icon={Clock} color="purple" />
                <KpiCard title="Taux satisfaction" value="4.1/5" icon={Star} color="orange" />
            </div>

            {/* Alerts Section */}
            <Card className="bg-white">
                <CardHeader>
                    <CardTitle className="text-lg font-semibold text-gray-800 uppercase tracking-wide">Alertes & Prochaines Échéances</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg text-red-800 border border-red-100">
                        <AlertTriangle className="h-5 w-5 shrink-0" />
                        <div>
                            <span className="font-bold">RETARD</span>
                            <span className="mx-2 text-red-400">|</span>
                            <span>TechClean - Intervention prévue le 15/02 non effectuée</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg text-orange-800 border border-orange-100">
                        <AlertTriangle className="h-5 w-5 shrink-0" />
                        <div>
                            <span className="font-bold">RENOUVELLEMENT</span>
                            <span className="mx-2 text-orange-400">|</span>
                            <span>Jardinier Plus - Contrat expire le 28/02</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg text-green-800 border border-green-100">
                        <CheckCircle className="h-5 w-5 shrink-0" />
                        <div>
                            <span className="font-bold">INTERVENTION AUJOURD'HUI</span>
                            <span className="mx-2 text-green-400">|</span>
                            <span>Nettoyage Pro - Résidence El Menzah</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg text-yellow-800 border border-yellow-100">
                        <Bell className="h-5 w-5 shrink-0" />
                        <div>
                            <span className="font-bold">RÉCLAMATIONS</span>
                            <span className="mx-2 text-yellow-600">|</span>
                            <span>Élévateur Plus - 3 réclamations ce mois</span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Prestataires Table */}
            <DataTable
                columns={columns}
                data={prestatairesData}
                actions={() => (
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <span className="text-gray-500 font-bold text-lg">...</span>
                    </Button>
                )}
            />

            {/* Performance Section */}
            <Card>
                <CardHeader>
                    <CardTitle className="text-lg font-semibold text-gray-800">PERFORMANCE DES PRESTATAIRES (6 derniers mois)</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead className="text-gray-500 border-b">
                                <tr>
                                    <th className="text-left py-3 font-medium">Prestataire</th>
                                    <th className="text-center py-3 font-medium">Interventions</th>
                                    <th className="text-center py-3 font-medium">Retards</th>
                                    <th className="text-center py-3 font-medium">Réclamations</th>
                                    <th className="text-right py-3 font-medium">Note</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {performanceData.map((item, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="py-3 text-gray-900 font-medium">{item.name}</td>
                                        <td className="py-3 text-center">{item.interventions}</td>
                                        <td className="py-3 text-center">
                                            <span className={`px-2 py-0.5 rounded text-xs font-semibold ${item.delayColor}`}>
                                                {item.delays}
                                            </span>
                                        </td>
                                        <td className="py-3 text-center">
                                            <span className={`px-2 py-0.5 rounded text-xs font-semibold ${item.recColor}`}>
                                                {item.reclamations}
                                            </span>
                                        </td>
                                        <td className="py-3 text-right">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${item.scoreColor}`}>
                                                {item.score}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>

            {/* Quick Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="hover:shadow-md transition-shadow cursor-pointer group">
                    <CardContent className="p-6 flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                            <Calendar className="h-6 w-6 text-blue-600 group-hover:text-white" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">Calendrier des interventions</h3>
                            <p className="text-sm text-gray-500">Planification et suivi</p>
                        </div>
                    </CardContent>
                </Card>
                <Card className="hover:shadow-md transition-shadow cursor-pointer group">
                    <CardContent className="p-6 flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                            <Star className="h-6 w-6 text-orange-600 group-hover:text-white" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">Évaluation des prestataires</h3>
                            <p className="text-sm text-gray-500">Avis et notation</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Bottom Alert */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                    <AlertTriangle className="h-6 w-6 text-yellow-600 shrink-0 mt-1 sm:mt-0" />
                    <div>
                        <h4 className="font-bold text-yellow-900 text-lg">Contrats arrivant à expiration</h4>
                        <p className="text-yellow-800">3 contrats arrivent à expiration dans les 30 prochains jours. Veuillez mettre à jour ou renouveler les contrats.</p>
                    </div>
                </div>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white border-none whitespace-nowrap">
                    Voir les détails
                </Button>
            </div>
        </div>
    );
}
