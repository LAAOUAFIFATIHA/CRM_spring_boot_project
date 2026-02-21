import type { LucideIcon } from "lucide-react";
import { cn } from "../lib/utils";
import { Card, CardContent } from "./ui/card";

interface KpiCardProps {
    title: string;
    value: string;
    trend?: {
        value: string;
        isPositive?: boolean;
        isNeutral?: boolean;
    };
    icon: LucideIcon;
    color: "blue" | "green" | "orange" | "red" | "purple";
    details?: string;
}

const colorStyles = {
    blue: "bg-blue-50 text-blue-600",
    green: "bg-green-50 text-green-600",
    orange: "bg-orange-50 text-orange-600",
    red: "bg-red-50 text-red-600",
    purple: "bg-purple-50 text-purple-600",
};

export function KpiCard({ title, value, trend, icon: Icon, color, details }: KpiCardProps) {
    return (
        <Card className="overflow-hidden">
            <CardContent className="p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-gray-500">{title}</p>
                        <h3 className="mt-2 text-2xl font-bold text-gray-900">{value}</h3>
                    </div>
                    <div className={cn("rounded-lg p-2", colorStyles[color])}>
                        <Icon className="h-6 w-6" />
                    </div>
                </div>
                {(trend || details) && (
                    <div className="mt-4 flex items-center text-sm">
                        {trend && (
                            <span
                                className={cn(
                                    "font-medium",
                                    trend.isNeutral
                                        ? "text-gray-500"
                                        : trend.isPositive
                                            ? "text-green-600"
                                            : "text-red-600"
                                )}
                            >
                                {trend.value}
                            </span>
                        )}
                        {details && <span className="ml-2 text-gray-500">{details}</span>}
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
