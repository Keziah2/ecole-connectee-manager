
import React from "react";
import Layout from "@/components/Layout";

const SettingsPage = () => {
  return (
    <Layout>
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Paramètres</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Paramètres généraux</h2>
          <p className="text-gray-600">
            Options de configuration à venir...
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default SettingsPage;
