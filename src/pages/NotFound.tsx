
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-school-600">404</h1>
        <h2 className="text-3xl font-semibold text-gray-900 mt-4">
          Page non trouvée
        </h2>
        <p className="text-gray-600 mt-2 max-w-md mx-auto">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Button
          className="mt-6 bg-school-600 hover:bg-school-700"
          onClick={() => navigate("/")}
        >
          Retourner au tableau de bord
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
