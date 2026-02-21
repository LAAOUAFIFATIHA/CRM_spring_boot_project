import React, { createContext, useContext, useState } from "react";
import { CheckCircle, AlertCircle, Info, X } from "lucide-react";
import { cn } from "../../lib/utils";

type ToastType = "success" | "error" | "info";

interface Toast {
    id: number;
    message: string;
    type: ToastType;
}

interface ToastContextType {
    addToast: (message: string, type: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const addToast = (message: string, type: ToastType) => {
        const id = Date.now();
        setToasts((prev) => [...prev, { id, message, type }]);

        // Auto-remove after 3 seconds
        setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== id));
        }, 3000);
    };

    const removeToast = (id: number) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    };

    return (
        <ToastContext.Provider value={{ addToast }}>
            {children}
            <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
                {toasts.map((toast) => (
                    <div
                        key={toast.id}
                        className={cn(
                            "flex items-center gap-3 rounded-lg px-4 py-3 shadow-lg text-sm font-medium animate-in slide-in-from-right-full fade-in duration-300",
                            toast.type === "success" && "bg-green-50 text-green-700 border border-green-100",
                            toast.type === "error" && "bg-red-50 text-red-700 border border-red-100",
                            toast.type === "info" && "bg-blue-50 text-blue-700 border border-blue-100"
                        )}
                    >
                        {toast.type === "success" && <CheckCircle className="h-5 w-5 text-green-500" />}
                        {toast.type === "error" && <AlertCircle className="h-5 w-5 text-red-500" />}
                        {toast.type === "info" && <Info className="h-5 w-5 text-blue-500" />}
                        <span>{toast.message}</span>
                        <button
                            onClick={() => removeToast(toast.id)}
                            className="ml-4 hover:opacity-75"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    );
}

export function useToast() {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error("useToast must be used within a ToastProvider");
    }
    return context;
}
