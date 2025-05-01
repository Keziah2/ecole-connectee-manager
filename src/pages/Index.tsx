
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardPage from "./DashboardPage";

const Index = () => {
  const navigate = useNavigate();
  
  // Pour la démo, on redirige vers la page de connexion
  // Dans une implémentation réelle, on vérifierait si l'utilisateur est connecté
  useEffect(() => {
    // Uncomment this to test login flow
    // navigate("/login");
  }, [navigate]);

  return <DashboardPage />;
};

export default Index;
