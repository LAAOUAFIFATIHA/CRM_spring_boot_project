import { useState } from "react";
import { Building, MoreHorizontal, User, Users } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { KpiCard } from "../components/KpiCard";
import { StatusBadge } from "../components/StatusBadge";
import { DataTable } from "../components/DataTable";
import { Modal } from "../components/ui/modal";
import { useToast } from "../components/ui/toast-context";
import { Label } from "../components/ui/label";

interface Coproprietaire {
    id: number;
    name: string;
    cin: string;
    residence: string;
    lots: string;
    contact: string;
    status: string;
}

const data: Coproprietaire[] = [
    { id: 1, name: "Ben Salah Ahmed", cin: "AB123456", residence: "Jardins Carthage", lots: "A12, A14", contact: "ahmed@email.com", status: "Actif" },
    { id: 2, name: "Khaled Fatma", cin: "CD789012", residence: "El Menzah", lots: "B45", contact: "fatma@email.com", status: "Actif" },
    { id: 3, name: "Trabelsi Mohamed", cin: "EF345678", residence: "Parc du Lac", lots: "C23,C24,C25", contact: "contact inactive", status: "Inactif" },
    { id: 4, name: "Souissi Mariam", cin: "GH567890", residence: "Jardins Carthage", lots: "A08", contact: "mariam@email.com", status: "À relancer" },
    { id: 5, name: "Boutheina Salim", cin: "IJ901234", residence: "El Menzah", lots: "B67, B68", contact: "salim@email.com", status: "Actif" },
];

export default function CoproprietairesPage() {
    const { addToast } = useToast();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCreate = (e: React.FormEvent) => {
        e.preventDefault();
        setIsModalOpen(false);
        addToast("Nouveau copropriétaire ajouté avec succès", "success");
    };

    const columns = [
        {
            header: "Nom & Prénom", accessorKey: "name" as keyof Coproprietaire, className: "font-medium text-gray-900",
            cell: (item: Coproprietaire) => (
                <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                        {item.name.charAt(0)}
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-900">{item.name}</p>
                        <p className="text-xs text-gray-500">{item.cin}</p>
                    </div>
                </div>
            )
        },
        { header: "Résidence(s)", accessorKey: "residence" as keyof Coproprietaire, className: "text-gray-500" },
        { header: "Lots", accessorKey: "lots" as keyof Coproprietaire, className: "font-mono text-xs" },
        {
            header: "Contact", accessorKey: "contact" as keyof Coproprietaire,
            cell: (item: Coproprietaire) => (
                <span className={item.contact === "contact inactive" ? "text-gray-400 italic" : "text-gray-600"}>
                    {item.contact}
                </span>
            )
        },
        {
            header: "Statut", accessorKey: "status" as keyof Coproprietaire,
            cell: (item: Coproprietaire) => <StatusBadge status={item.status} />
        },
    ];

    return (
        <div className="p-8 space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Gestion des Copropriétaires</h1>
                    <p className="text-gray-500 mt-1">Liste consolidée de tous les propriétaires</p>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={() => setIsModalOpen(true)}>
                    + Nouveau Copropriétaire
                </Button>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Nouveau Copropriétaire">
                <form onSubmit={handleCreate} className="space-y-4">
                    <div className="grid gap-2">
                        <Label htmlFor="nom">Nom & Prénom</Label>
                        <Input id="nom" placeholder="Ex: Ahmed Ben Salah" required />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="cin">CIN</Label>
                        <Input id="cin" placeholder="Ex: AB123456" required />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="contact">Email / Téléphone</Label>
                        <Input id="contact" placeholder="Ex: ahmed@email.com" required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="residence">Résidence</Label>
                            <select id="residence" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                                <option>Les Jardins Carthage</option>
                                <option>Résidence El Menzah</option>
                            </select>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="lots">Lots</Label>
                            <Input id="lots" placeholder="Ex: A12, A14" required />
                        </div>
                    </div>
                    <div className="flex justify-end gap-3 pt-4">
                        <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>Annuler</Button>
                        <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">Ajouter</Button>
                    </div>
                </form>
            </Modal>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <KpiCard title="Total Copropriétaires" value="1,240" icon={Users} color="blue" />
                <KpiCard title="Copropriétaires multiples lots" value="86" icon={Building} color="purple" />
                <KpiCard title="Taux de réponse moyen" value="78%" icon={User} color="green" />
            </div>

            {/* Filters */}
            <div className="flex flex-col lg:flex-row gap-4 bg-white p-4 rounded-lg border shadow-sm">
                <Input placeholder="Rechercher par nom, CIN, résidence..." className="flex-1" />
                <div className="flex gap-4">
                    <select className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 w-full lg:w-48">
                        <option>Par résidence</option>
                        <option>Les Jardins Carthage</option>
                        <option>Résidence El Menzah</option>
                    </select>
                    <select className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 w-full lg:w-48">
                        <option>Par statut</option>
                        <option>Actif</option>
                        <option>Inactif</option>
                        <option>À relancer</option>
                    </select>
                </div>
            </div>

            {/* Data Table */}
            <DataTable
                columns={columns}
                data={data}
                actions={() => (
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4 text-gray-500" />
                    </Button>
                )}
            />
        </div >
    );
}
