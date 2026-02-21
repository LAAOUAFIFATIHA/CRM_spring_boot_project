import { useState } from "react";
import { AlertCircle, CheckCircle, Clock, FileText, Filter, MoreHorizontal } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { KpiCard } from "../components/KpiCard";
import { StatusBadge } from "../components/StatusBadge";
import { DataTable } from "../components/DataTable";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from "recharts";
import { Modal } from "../components/ui/modal";
import { useToast } from "../components/ui/toast-context";
import { Label } from "../components/ui/label";

// Mock Data
const reclamationStatsByType = [
    { name: "Technique", value: 18 },
    { name: "Admin", value: 12 },
    { name: "Financière", value: 11 },
    { name: "Autre", value: 7 },
];

const reclamationEvolution = [
    { day: "08 Fév", open: 8, resolved: 5 },
    { day: "09 Fév", open: 12, resolved: 10 },
    { day: "10 Fév", open: 12, resolved: 13 },
    { day: "11 Fév", open: 11, resolved: 14 },
    { day: "12 Fév", open: 9, resolved: 10 },
    { day: "13 Fév", open: 10, resolved: 11 },
    { day: "14 Fév", open: 17, resolved: 14 },
    { day: "15 Fév", open: 16, resolved: 14 },
];

interface Reclamation {
    id: string;
    date: string;
    residence: string;
    coproprietaire: string;
    type: string;
    priority: string;
    status: string;
}

const reclamationsData: Reclamation[] = [
    { id: "REC-001", date: "15/02", residence: "Jardins Carthage", coproprietaire: "Ahmed Ben Salah", type: "Technique", priority: "Haute", status: "En cours" },
    { id: "REC-002", date: "15/02", residence: "El Menzah", coproprietaire: "Fatma Khaled", type: "Technique", priority: "Urgent", status: "Ouvert" },
    { id: "REC-003", date: "14/02", residence: "Parc du Lac", coproprietaire: "Mohamed Trabelsi", type: "Admin", priority: "Basse", status: "Résolu" },
    { id: "REC-004", date: "13/02", residence: "Jardins Carthage", coproprietaire: "Mariam Souissi", type: "Financière", priority: "Haute", status: "En cours" },
    { id: "REC-005", date: "12/02", residence: "El Menzah", coproprietaire: "Salim Boutheina", type: "Autre", priority: "Basse", status: "Résolu" },
];

export default function ReclamationsPage() {
    const { addToast } = useToast();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCreate = (e: React.FormEvent) => {
        e.preventDefault();
        setIsModalOpen(false);
        addToast("Nouvelle réclamation enregistrée", "success");
    };

    const columns = [
        {
            header: "",
            id: "select",
            className: "w-[40px] px-2",
            cell: () => <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
        },
        {
            header: "Réf.",
            accessorKey: "id" as keyof Reclamation,
            className: "font-medium text-blue-600 cursor-pointer hover:underline"
        },
        { header: "Date", accessorKey: "date" as keyof Reclamation, className: "text-gray-500" },
        { header: "Résidence", accessorKey: "residence" as keyof Reclamation, className: "text-gray-900" },
        { header: "Copropriétaire", accessorKey: "coproprietaire" as keyof Reclamation, className: "text-gray-900" },
        { header: "Type", accessorKey: "type" as keyof Reclamation, className: "text-gray-500" },
        {
            header: "Priorité",
            accessorKey: "priority" as keyof Reclamation,
            cell: (item: Reclamation) => <StatusBadge status={item.priority} />
        },
        {
            header: "Statut",
            accessorKey: "status" as keyof Reclamation,
            cell: (item: Reclamation) => <StatusBadge status={item.status} />
        },
    ];

    return (
        <div className="p-8 space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Gestion des Réclamations</h1>
                    <p className="text-gray-500 mt-1">Suivi et traitement des demandes</p>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={() => setIsModalOpen(true)}>
                    + Nouvelle Réclamation
                </Button>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Nouvelle Réclamation">
                <form onSubmit={handleCreate} className="space-y-4">
                    <div className="grid gap-2">
                        <Label htmlFor="residence">Résidence concernée</Label>
                        <select id="residence" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                            <option>Les Jardins Carthage</option>
                            <option>Résidence El Menzah</option>
                        </select>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="copro">Copropriétaire</Label>
                        <Input id="copro" placeholder="Nom ou référence du lot" required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="type">Type</Label>
                            <select id="type" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                                <option>Technique</option>
                                <option>Administratif</option>
                                <option>Financier</option>
                                <option>Autre</option>
                            </select>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="priorite">Priorité</Label>
                            <select id="priorite" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                                <option>Basse</option>
                                <option>Moyenne</option>
                                <option>Haute</option>
                                <option>Urgente</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="description">Description</Label>
                        <Input id="description" placeholder="Détails de la réclamation..." required />
                    </div>
                    <div className="flex justify-end gap-3 pt-4">
                        <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>Annuler</Button>
                        <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">Enregistrer</Button>
                    </div>
                </form>
            </Modal>

            {/* Filters */}
            <div className="flex flex-col xl:flex-row gap-4 bg-white p-4 rounded-lg border shadow-sm items-center">
                <div className="relative flex-1 w-full">
                    <Input placeholder="Recherche..." className="pl-8" />
                    <Filter className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                </div>
                <div className="flex flex-wrap gap-2 w-full xl:w-auto">
                    <select className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
                        <option>Tous les statuts</option>
                        <option>Ouvert</option>
                        <option>En cours</option>
                        <option>Résolu</option>
                    </select>
                    <select className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
                        <option>Toutes priorités</option>
                        <option>Urgent</option>
                        <option>Haute</option>
                        <option>Basse</option>
                    </select>
                    <select className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
                        <option>Toutes résidences</option>
                    </select>
                    <select className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
                        <option>Toutes dates</option>
                    </select>
                </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <KpiCard title="Réclamations ouvertes" value="48" icon={FileText} color="orange" />
                <KpiCard title="Délai moyen traitement" value="3.2 jours" icon={Clock} color="blue" />
                <KpiCard title="Taux résolution" value="94%" icon={CheckCircle} color="green" />
                <KpiCard title="Réclamations urgentes" value="12" icon={AlertCircle} color="red" />
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold text-gray-800">Réclamations par type</CardTitle>
                    </CardHeader>
                    <CardContent className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={reclamationStatsByType} layout="vertical">
                                <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                                <XAxis type="number" hide />
                                <YAxis dataKey="name" type="category" width={100} tick={{ fontSize: 12 }} />
                                <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                                <Bar dataKey="value" fill="#3b82f6" radius={[0, 4, 4, 0]} barSize={20} label={{ position: 'right', fill: '#666', fontSize: 12 }} />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold text-gray-800">Évolution mensuelle (Ouvertes vs Résolues)</CardTitle>
                        <CardDescription>Du 08 Fév au 15 Fév</CardDescription>
                    </CardHeader>
                    <CardContent className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={reclamationEvolution}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
                                <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
                                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                                <Legend iconType="circle" />
                                <Line type="monotone" dataKey="open" name="Ouvertes" stroke="#f97316" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                                <Line type="monotone" dataKey="resolved" name="Résolues" stroke="#22c55e" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </div>

            {/* Data Table */}
            <DataTable
                columns={columns}
                data={reclamationsData}
                actions={() => (
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4 text-gray-500" />
                    </Button>
                )}
            />
        </div >
    );
}
