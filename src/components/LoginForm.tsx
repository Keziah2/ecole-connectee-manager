
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { toast } from "sonner";

interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
}

const LoginForm = ({ onLogin }: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login for demo
    setTimeout(() => {
      if (email === "admin@ecole-connectee.com" && password === "admin123") {
        toast.success("Connexion réussie");
        onLogin(email, password);
      } else {
        toast.error("Identifiants incorrects");
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Card className="w-[350px] shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-semibold text-school-700">
          École Connectée
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Adresse e-mail</Label>
            <Input
              id="email"
              type="email"
              placeholder="admin@ecole-connectee.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Mot de passe</Label>
              <a href="#" className="text-xs text-school-600 hover:underline">
                Mot de passe oublié?
              </a>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-school-600 hover:bg-school-700"
            disabled={isLoading}
          >
            {isLoading ? "Connexion en cours..." : "Se connecter"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center text-xs text-gray-500">
        École Connectée © 2025
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
