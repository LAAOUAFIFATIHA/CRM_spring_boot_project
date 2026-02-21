import { useState } from "react";
import { User, Bell, Lock, Paintbrush, Link2, Camera, Save, Settings } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Label } from "../components/ui/label";

export default function ParametresPage() {
    const [activeTab, setActiveTab] = useState("profile");

    return (
        <div className="p-8 space-y-8 animate-in fade-in duration-500">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Paramètres</h1>
                <p className="text-gray-500 mt-1">Gérez vos préférences et la configuration de votre compte</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar Menu */}
                <aside className="w-full lg:w-64 space-y-1">
                    <Button
                        variant={activeTab === "profile" ? "secondary" : "ghost"}
                        className="w-full justify-start"
                        onClick={() => setActiveTab("profile")}
                    >
                        <User className="mr-2 h-4 w-4" /> Profil utilisateur
                    </Button>
                    <Button
                        variant={activeTab === "notifications" ? "secondary" : "ghost"}
                        className="w-full justify-start"
                        onClick={() => setActiveTab("notifications")}
                    >
                        <Bell className="mr-2 h-4 w-4" /> Notifications
                    </Button>
                    <Button
                        variant={activeTab === "security" ? "secondary" : "ghost"}
                        className="w-full justify-start"
                        onClick={() => setActiveTab("security")}
                    >
                        <Lock className="mr-2 h-4 w-4" /> Sécurité
                    </Button>
                    <Button
                        variant={activeTab === "appearance" ? "secondary" : "ghost"}
                        className="w-full justify-start"
                        onClick={() => setActiveTab("appearance")}
                    >
                        <Paintbrush className="mr-2 h-4 w-4" /> Apparence
                    </Button>
                    <Button
                        variant={activeTab === "integrations" ? "secondary" : "ghost"}
                        className="w-full justify-start"
                        onClick={() => setActiveTab("integrations")}
                    >
                        <Link2 className="mr-2 h-4 w-4" /> Intégrations
                    </Button>
                </aside>

                {/* Content Area */}
                <div className="flex-1 max-w-2xl">
                    {activeTab === "profile" && (
                        <Card>
                            <CardHeader>
                                <CardTitle>Profil utilisateur</CardTitle>
                                <CardDescription>Mettez à jour vos informations personnelles.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="h-20 w-20 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold ring-4 ring-white shadow-sm">
                                        N
                                    </div>
                                    <Button variant="outline" size="sm">
                                        <Camera className="mr-2 h-4 w-4" /> Changer la photo
                                    </Button>
                                </div>

                                <div className="grid gap-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="name">Nom complet</Label>
                                        <Input id="name" defaultValue="Nassim Admin" />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" defaultValue="admin@syndicpro.ma" />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="role">Rôle</Label>
                                        <Input id="role" defaultValue="Direction Générale" disabled className="bg-gray-50 text-gray-500" />
                                    </div>
                                </div>

                                <div className="flex justify-end pt-4">
                                    <Button className="bg-blue-600 hover:bg-blue-700">
                                        <Save className="mr-2 h-4 w-4" /> Sauvegarder les modifications
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    )}
                    {activeTab !== "profile" && (
                        <Card className="border-dashed border-2">
                            <CardContent className="flex flex-col items-center justify-center p-12 text-center text-gray-500">
                                <Settings className="h-12 w-12 text-gray-300 mb-4" />
                                <h3 className="text-lg font-medium text-gray-900">Section en construction</h3>
                                <p className="mt-1">Les paramètres de {activeTab} seront disponibles bientôt.</p>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    );
}
