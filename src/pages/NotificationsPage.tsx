
import React from "react";
import Layout from "@/components/Layout";
import { Bell } from "lucide-react";

const NotificationsPage = () => {
  return (
    <Layout>
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Notifications</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-center flex-col py-12">
            <Bell className="h-16 w-16 text-gray-400 mb-4" />
            <p className="text-gray-600">
              Vous n'avez pas de nouvelles notifications.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotificationsPage;
