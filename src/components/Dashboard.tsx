
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart3,
  Users,
  School,
  CreditCard,
  TrendingUp,
  Calendar,
  BookOpen,
  UserSquare,
} from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Sample data for the chart
const revenueData = [
  { name: 'Jan', amount: 4000 },
  { name: 'Fév', amount: 3000 },
  { name: 'Mar', amount: 5000 },
  { name: 'Avr', amount: 2780 },
  { name: 'Mai', amount: 1890 },
  { name: 'Jun', amount: 2390 },
  { name: 'Jul', amount: 3490 },
  { name: 'Aoû', amount: 3200 },
  { name: 'Sep', amount: 2800 },
  { name: 'Oct', amount: 2400 },
  { name: 'Nov', amount: 2200 },
  { name: 'Déc', amount: 3100 },
];

const Dashboard = () => {
  return (
    <div className="p-6 animate-fade-in">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Tableau de bord</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Élèves"
          value="4,287"
          icon={Users}
          trend="+12%"
          trendUp={true}
          description="vs. mois précédent"
        />
        <StatCard
          title="Établissements"
          value="6"
          icon={School}
          description="Actifs"
        />
        <StatCard
          title="Revenu mensuel"
          value="27,500,000 FCFA"
          icon={CreditCard}
          trend="+5.2%"
          trendUp={true}
          description="vs. mois précédent"
        />
        <StatCard
          title="Frais impayés"
          value="4,200,000 FCFA"
          icon={TrendingUp}
          trend="-2.5%"
          trendUp={false}
          description="vs. mois précédent"
        />
      </div>
      
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle className="text-lg font-medium">Revenus annuels</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={revenueData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="amount" stroke="#3b65f5" fill="#92b7fe" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-medium">Événements à venir</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <EventCard
                title="Réunion des parents"
                date="18 Mai 2025"
                icon={Calendar}
              />
              <EventCard
                title="Fin du trimestre"
                date="30 Mai 2025"
                icon={BookOpen}
              />
              <EventCard
                title="Conseil des enseignants"
                date="5 Juin 2025"
                icon={UserSquare}
              />
              <EventCard
                title="Distribution des bulletins"
                date="8 Juin 2025"
                icon={BookOpen}
              />
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Recent Payments Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-medium">Paiements récents</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left h-12 px-4">Élève</th>
                  <th className="text-left h-12 px-4">École</th>
                  <th className="text-left h-12 px-4">Type</th>
                  <th className="text-right h-12 px-4">Montant</th>
                  <th className="text-right h-12 px-4">Date</th>
                </tr>
              </thead>
              <tbody>
                <TableRow
                  student="Koné Aminata"
                  school="Lycée Excellence"
                  type="Scolarité"
                  amount="150,000 FCFA"
                  date="15/05/2025"
                />
                <TableRow
                  student="Touré Ibrahim"
                  school="Collège Central"
                  type="Inscription"
                  amount="75,000 FCFA"
                  date="14/05/2025"
                />
                <TableRow
                  student="Diallo Fatou"
                  school="Lycée Excellence"
                  type="Cantine"
                  amount="35,000 FCFA"
                  date="13/05/2025"
                />
                <TableRow
                  student="Camara Mohammed"
                  school="École Primaire Est"
                  type="Scolarité"
                  amount="90,000 FCFA"
                  date="12/05/2025"
                />
                <TableRow
                  student="Bah Mariama"
                  school="Collège Central"
                  type="Transport"
                  amount="25,000 FCFA"
                  date="11/05/2025"
                />
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ElementType;
  trend?: string;
  trendUp?: boolean;
  description?: string;
}

const StatCard = ({
  title,
  value,
  icon: Icon,
  trend,
  trendUp,
  description,
}: StatCardProps) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-muted-foreground">{title}</span>
          <Icon className="h-5 w-5 text-school-600" />
        </div>
        <div className="space-y-2">
          <p className="text-2xl font-bold">{value}</p>
          {trend && (
            <div className="flex items-center">
              <span
                className={`text-xs font-medium ${
                  trendUp ? "text-green-600" : "text-red-600"
                }`}
              >
                {trend}
              </span>
              <span className="text-xs text-muted-foreground ml-2">
                {description}
              </span>
            </div>
          )}
          {!trend && description && (
            <p className="text-xs text-muted-foreground">{description}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

interface EventCardProps {
  title: string;
  date: string;
  icon: React.ElementType;
}

const EventCard = ({ title, date, icon: Icon }: EventCardProps) => {
  return (
    <div className="flex items-center p-2 rounded-lg hover:bg-gray-50">
      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-school-100 text-school-600 mr-3">
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-muted-foreground">{date}</p>
      </div>
    </div>
  );
};

interface TableRowProps {
  student: string;
  school: string;
  type: string;
  amount: string;
  date: string;
}

const TableRow = ({ student, school, type, amount, date }: TableRowProps) => {
  return (
    <tr className="border-b hover:bg-muted/50">
      <td className="p-4">{student}</td>
      <td className="p-4">{school}</td>
      <td className="p-4">{type}</td>
      <td className="p-4 text-right font-medium">{amount}</td>
      <td className="p-4 text-right text-muted-foreground">{date}</td>
    </tr>
  );
};

export default Dashboard;
