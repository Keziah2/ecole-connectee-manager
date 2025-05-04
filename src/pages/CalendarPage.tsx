
import React from "react";
import Layout from "@/components/Layout";
import { Calendar } from "@/components/ui/calendar";

const CalendarPage = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Layout>
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Calendrier</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-center md:justify-start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </div>
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-3">Événements à venir</h2>
            <p className="text-gray-600">
              Les événements seront affichés ici...
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CalendarPage;
