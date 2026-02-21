import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Building } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (email === "admin@syndicpro.ma" && password === "admin123") {
            localStorage.setItem("syndic_token", "fake-jwt-token");
            navigate("/dashboard");
        } else {
            setError("Identifiants incorrects");
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4">
            <Card className="w-full max-w-md border-gray-700 bg-white/95 shadow-2xl backdrop-blur supports-[backdrop-filter]:bg-white/60">
                <CardHeader className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
                        <Building className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-3xl font-bold tracking-tight text-gray-900">SyndicPro</CardTitle>
                    <CardDescription className="text-gray-500">Connectez-vous pour accéder à votre espace</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email professionnel</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="admin@syndicpro.ma"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="bg-white"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Mot de passe</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="bg-white"
                            />
                        </div>
                        {error && <p className="text-sm font-medium text-red-500">{error}</p>}
                        <Button type="submit" className="w-full bg-blue-600 py-6 text-base hover:bg-blue-700">
                            Se connecter au portail
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-center text-xs text-gray-400">
                    SyndicPro Enterprise Solution v2.4.1
                </CardFooter>
            </Card>
        </div>
    );
}
