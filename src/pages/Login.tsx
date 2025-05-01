
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "@/components/LoginForm";

const Login = () => {
  const navigate = useNavigate();
  
  const handleLogin = (email: string, password: string) => {
    // Simuler une connexion
    setTimeout(() => {
      // Rediriger vers le tableau de bord après connexion
      navigate("/");
    }, 1000);
  };
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-school-100 to-school-50">
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-school-700">École Connectée</h1>
        <p className="text-gray-600 text-center mt-2">
          Plateforme de gestion scolaire
        </p>
      </div>
      
      <LoginForm onLogin={handleLogin} />
      
      <footer className="mt-10 text-center text-sm text-gray-500">
        <p>© 2025 École Connectée. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default Login;
