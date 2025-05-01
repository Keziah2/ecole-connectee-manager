
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  School,
  Plus,
  MoreHorizontal,
  PenSquare,
  Trash,
  Eye,
  Search,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Sample schools data
const schools = [
  {
    id: 1,
    name: "Lycée Excellence",
    director: "Mme. Koné Fatoumata",
    students: 1250,
    teachers: 45,
    status: "active",
    location: "Abidjan, Cocody",
  },
  {
    id: 2,
    name: "Collège Central",
    director: "M. Touré Ibrahim",
    students: 845,
    teachers: 32,
    status: "active",
    location: "Abidjan, Plateau",
  },
  {
    id: 3,
    name: "École Primaire Est",
    director: "Mme. Diallo Aissatou",
    students: 620,
    teachers: 24,
    status: "active",
    location: "Abidjan, Yopougon",
  },
  {
    id: 4,
    name: "Institut Technique",
    director: "M. Camara Mohammed",
    students: 385,
    teachers: 18,
    status: "active",
    location: "Abidjan, Adjamé",
  },
  {
    id: 5,
    name: "École Bilingue Internationale",
    director: "Mme. Bah Mariama",
    students: 490,
    teachers: 22,
    status: "maintenance",
    location: "Abidjan, Marcory",
  },
  {
    id: 6,
    name: "Centre de Formation Professionnelle",
    director: "M. Diallo Ousmane",
    students: 320,
    teachers: 15,
    status: "inactive",
    location: "Abidjan, Treichville",
  },
];

const SchoolsList = () => {
  return (
    <div className="p-6 animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Établissements</h1>
        <Button className="bg-school-600 hover:bg-school-700">
          <Plus className="mr-2 h-4 w-4" /> Ajouter un établissement
        </Button>
      </div>

      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Rechercher un établissement..."
                className="pl-10"
              />
            </div>
            <div className="flex items-center space-x-2">
              <label htmlFor="status" className="text-sm whitespace-nowrap">
                Statut:
              </label>
              <select
                id="status"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="all">Tous les statuts</option>
                <option value="active">Actif</option>
                <option value="maintenance">En maintenance</option>
                <option value="inactive">Inactif</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <label htmlFor="location" className="text-sm whitespace-nowrap">
                Lieu:
              </label>
              <select
                id="location"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="all">Tous les lieux</option>
                <option value="cocody">Cocody</option>
                <option value="plateau">Plateau</option>
                <option value="yopougon">Yopougon</option>
                <option value="adjame">Adjamé</option>
                <option value="marcory">Marcory</option>
                <option value="treichville">Treichville</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="py-4">
          <CardTitle className="text-xl font-semibold">
            Tous les établissements ({schools.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nom</TableHead>
                <TableHead>Directeur</TableHead>
                <TableHead>Élèves</TableHead>
                <TableHead>Enseignants</TableHead>
                <TableHead>Lieu</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {schools.map((school) => (
                <TableRow key={school.id}>
                  <TableCell>
                    <div className="flex items-center">
                      <div className="h-9 w-9 rounded-full bg-school-100 text-school-600 flex items-center justify-center mr-3">
                        <School className="h-5 w-5" />
                      </div>
                      <span className="font-medium">{school.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{school.director}</TableCell>
                  <TableCell>{school.students}</TableCell>
                  <TableCell>{school.teachers}</TableCell>
                  <TableCell>{school.location}</TableCell>
                  <TableCell>
                    <StatusBadge status={school.status} />
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          <span>Voir les détails</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <PenSquare className="mr-2 h-4 w-4" />
                          <span>Modifier</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash className="mr-2 h-4 w-4" />
                          <span>Supprimer</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

interface StatusBadgeProps {
  status: string;
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
  switch (status) {
    case "active":
      return (
        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
          Actif
        </Badge>
      );
    case "maintenance":
      return (
        <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
          En maintenance
        </Badge>
      );
    case "inactive":
      return (
        <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
          Inactif
        </Badge>
      );
    default:
      return (
        <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
          {status}
        </Badge>
      );
  }
};

export default SchoolsList;
