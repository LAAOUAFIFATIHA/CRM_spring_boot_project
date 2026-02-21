import { useState } from "react";
import { Building, Home } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { KpiCard } from "../components/KpiCard";
import { StatusBadge } from "../components/StatusBadge";
import { DataTable } from "../components/DataTable";
import { Modal } from "../components/ui/modal";
import { useToast } from "../components/ui/toast-context";
import { Label } from "../components/ui/label";

interface Residence {
    id: number;
    name: string;
    address: string;
    lots: number;
    owners: number;
    rate: number;
    status: string;
}

const data: Residence[] = [
    { id: 1, name: "Les Jardins Carthage", address: "Rue X, Tunis", lots: 248, owners: 189, rate: 87, status: "Actif" },
    { id: 2, name: "Résidence El Menzah", address: "Avenue Y, Tunis", lots: 156, owners: 142, rate: 92, status: "Actif" },
    { id: 3, name: "Parc du Lac", address: "Rue Z, Tunis", lots: 312, owners: 278, rate: 76, status: "Attention" },
    { id: 4, name: "Résidence Jasmine", address: "Boulevard A, Tunis", lots: 189, owners: 156, rate: 89, status: "Actif" },
    { id: 5, name: "Villa Résidence", address: "Rue B, Tunis", lots: 127, owners: 112, rate: 71, status: "Inactif" },
];

export default function ResidencesPage() {
    const { addToast } = useToast();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCreate = (e: React.FormEvent) => {
        e.preventDefault();
        setIsModalOpen(false);
        addToast("Nouvelle résidence créée avec succès", "success");
    };

    const columns = [
        {
            header: "Nom", accessorKey: "name" as keyof Residence, className: "font-medium text-gray-900",
            cell: (item: Residence) => (
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                        <Building className="h-5 w-5" />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-900">{item.name}</p>
                        <p className="text-xs text-gray-500">RES-{item.id.toString().padStart(3, '0')}</p>
                    </div>
                </div>
            )
        },
        { header: "Adresse", accessorKey: "address" as keyof Residence, className: "text-gray-500" },
        { header: "Lots", accessorKey: "lots" as keyof Residence, className: "text-right" },
        { header: "Copropriétaires", accessorKey: "owners" as keyof Residence, className: "text-right" },
        {
            header: "Taux recouvrement", accessorKey: "rate" as keyof Residence, className: "text-right",
            cell: (item: Residence) => (
                <div className="flex items-center justify-end gap-3">
                    <div className={`relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors ${item.rate >= 80 ? "bg-green-500" : "bg-gray-300"}`}>
                        <span className={`inline-block h-3 w-3 transform rounded-full bg-white shadow-lg transition-transform ${item.rate >= 80 ? "translate-x-5" : "translate-x-1"}`} />
                    </div>
                    <span className="font-semibold w-8">{item.rate}%</span>
                </div>
            )
        },
        {
            header: "Statut", accessorKey: "status" as keyof Residence,
            cell: (item: Residence) => <StatusBadge status={item.status} />
        },
    ];

    return (
        <div className="p-8 space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Gestion des Résidences</h1>
                    <p className="text-gray-500 mt-1">Gérez l'ensemble de vos copropriétés</p>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={() => setIsModalOpen(true)}>
                    + Nouvelle Résidence
                </Button>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Nouvelle Résidence">
                <form onSubmit={handleCreate} className="space-y-4">
                    <div className="grid gap-2">
                        <Label htmlFor="nom">Nom de la résidence</Label>
                        <Input id="nom" placeholder="Ex: Les Jardins de Carthage" required />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="adresse">Adresse complète</Label>
                        <Input id="adresse" placeholder="Ex: 12 Rue des Fleurs, Tunis" required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="lots">Nombre de lots</Label>
                            <Input id="lots" type="number" placeholder="Ex: 45" required />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="copros">Nb Copropriétaires</Label>
                            <Input id="copros" type="number" placeholder="Ex: 40" required />
                        </div>
                    </div>
                    <div className="flex justify-end gap-3 pt-4">
                        <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>Annuler</Button>
                        <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">Créer</Button>
                    </div>
                </form>
            </Modal>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <KpiCard title="Total Résidences" value="42" icon={Building} color="blue" />
                <KpiCard title="Taux d'occupation" value="94%" icon={Home} color="green" />
                <KpiCard title="Total Lots" value="3,240" icon={Building} color="purple" />
                <KpiCard title="Résidences actives" value="38" icon={Building} color="orange" />
            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-lg border shadow-sm">
                <Input placeholder="Rechercher une résidence..." className="max-w-md" />
                <select className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                    <option>Tous les statuts</option>
                    <option>Actif</option>
                    <option>Inactif</option>
                    <option>Attention</option>
                </select>
            </div>

            {/* Data Table */}
            <DataTable
                columns={columns}
                data={data}
                actions={() => (
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <span className="sr-only">Ouvrir menu</span>
                        <span className="text-gray-500 font-bold text-lg">...</span>
                    </Button>
                )}
            />
        </div >
    );
}
