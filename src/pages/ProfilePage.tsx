
import React from "react";
import Layout from "@/components/Layout";
import { UserSquare } from "lucide-react";

const ProfilePage = () => {
  return (
    <Layout>
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Profil Utilisateur</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="bg-gray-100 p-6 rounded-full">
              <UserSquare className="h-20 w-20 text-gray-500" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Utilisateur</h2>
              <p className="text-gray-600">utilisateur@example.com</p>
              <p className="mt-4 text-gray-700">
                Informations du profil à venir...
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
