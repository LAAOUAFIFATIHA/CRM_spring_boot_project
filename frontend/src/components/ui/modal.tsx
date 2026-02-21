import { X } from "lucide-react";
import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { cn } from "../../lib/utils"

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-lg bg-white rounded-lg shadow-lg animate-in zoom-in-95 duration-200">
                <div className="flex items-center justify-between border-b px-6 py-4">
                    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                    <button
                        onClick={onClose}
                        className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500 transition-colors"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>
                <div className="p-6">{children}</div>
            </div>
        </div>,
        document.body
    );
}
