import React from "react";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Column<T> {
    header: string;
    accessorKey?: keyof T;
    cell?: (item: T) => React.ReactNode;
    className?: string;
}

interface DataTableProps<T> {
    columns: Column<T>[];
    data: T[];
    actions?: (item: T) => React.ReactNode;
}

export function DataTable<T extends { id?: string | number }>({ columns, data, actions }: DataTableProps<T>) {
    return (
        <div className="rounded-lg border bg-white shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead className="bg-gray-50 text-gray-500">
                        <tr>
                            {columns.map((col, i) => (
                                <th key={i} className={cn("px-6 py-3 font-medium", col.className)}>
                                    {col.header}
                                </th>
                            ))}
                            {actions && <th className="px-6 py-3 font-medium text-right">Actions</th>}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {data.map((item, rowIndex) => (
                            <tr key={item.id || rowIndex} className="hover:bg-gray-50/50 transition-colors">
                                {columns.map((col, colIndex) => (
                                    <td key={colIndex} className={cn("px-6 py-4", col.className)}>
                                        {col.cell ? col.cell(item) : (item[col.accessorKey as keyof T] as React.ReactNode)}
                                    </td>
                                ))}
                                {actions && (
                                    <td className="px-6 py-4 text-right">
                                        {actions(item)}
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="border-t bg-gray-50 px-6 py-4 flex items-center justify-between">
                <div className="text-sm text-gray-500">Affichage de 1 à {data.length} sur {data.length + 40} résultats</div>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm" disabled>
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="bg-blue-50 text-blue-600 border-blue-200">1</Button>
                    <Button variant="outline" size="sm">2</Button>
                    <Button variant="outline" size="sm">3</Button>
                    <span className="flex items-center px-2 text-gray-400">...</span>
                    <Button variant="outline" size="sm">
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
