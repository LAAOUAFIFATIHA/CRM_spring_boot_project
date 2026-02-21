import { cn } from "../lib/utils";

export type StatusType =
    | "Actif"
    | "Inactif"
    | "Attention"
    | "À relancer"
    | "Urgent"
    | "En cours"
    | "Ouvert"
    | "Résolu"
    | "En négociation";

interface StatusBadgeProps {
    status: StatusType | string;
    className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
    const getStyles = (s: string) => {
        switch (s) {
            case "Actif":
            case "Résolu":
                return "bg-green-100 text-green-700";
            case "Inactif":
                return "bg-gray-100 text-gray-700";
            case "Attention":
            case "Ouvert":
            case "À relancer":
                return "bg-orange-100 text-orange-700";
            case "Urgent":
                return "bg-red-100 text-red-700";
            case "Haute":
                return "bg-yellow-100 text-yellow-800";
            case "En cours":
                return "bg-blue-100 text-blue-700";
            case "En négociation":
                return "bg-yellow-100 text-yellow-700";
            default:
                return "bg-gray-100 text-gray-700";
        }
    };

    return (
        <span
            className={cn(
                "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
                getStyles(status),
                className
            )}
        >
            {status}
        </span>
    );
}
