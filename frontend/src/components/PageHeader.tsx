import React from "react";

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    children?: React.ReactNode;
}

export function PageHeader({ title, subtitle, children }: PageHeaderProps) {
    return (
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
                <h1 className="text-2xl font-bold tracking-tight text-gray-900">{title}</h1>
                {subtitle && <p className="text-gray-500 mt-1">{subtitle}</p>}
            </div>
            <div className="flex items-center gap-2">{children}</div>
        </div>
    );
}
