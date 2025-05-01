import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { UserPlus, Search, Edit, Trash, UserCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import UserForm from "./UserForm";

// Types pour les rôles d'utilisateur
type UserRole = "super_admin" | "directeur" | "enseignant" | "tresorier" | "parent" | "eleve";

// Interface pour les données utilisateur
interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: "active" | "inactive"; // Ensure this is strictly typed
  lastLogin?: string;
}

const UserManagement = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  const [isEditUserOpen, setIsEditUserOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // Données de démonstration pour les utilisateurs avec le statut correctement typé
  const [users, setUsers] = useState<User[]>([
    {
      id: "1",
      name: "Amadou Diallo",
      email: "a.diallo@ecole-connectee.ci",
      role: "super_admin",
      status: "active",
      lastLogin: "2023-08-01 10:30",
    },
    {
      id: "2",
      name: "Fatou Touré",
      email: "f.toure@ecole-connectee.ci",
      role: "directeur",
      status: "active",
      lastLogin: "2023-07-29 14:15",
    },
    {
      id: "3",
      name: "Moussa Koné",
      email: "m.kone@ecole-connectee.ci",
      role: "enseignant",
      status: "active",
      lastLogin: "2023-07-25 09:45",
    },
    {
      id: "4",
      name: "Aminata Bamba",
      email: "a.bamba@ecole-connectee.ci",
      role: "tresorier",
      status: "inactive",
      lastLogin: "2023-06-15 11:20",
    },
    {
      id: "5",
      name: "Ibrahim Coulibaly",
      email: "i.coulibaly@ecole-connectee.ci",
      role: "parent",
      status: "active",
      lastLogin: "2023-07-30 16:05",
    },
    {
      id: "6",
      name: "Aya Konaté",
      email: "a.konate@ecole-connectee.ci",
      role: "eleve",
      status: "active",
      lastLogin: "2023-07-28 08:30",
    },
  ]);

  const filteredUsers = users.filter((user) => {
    return (
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.role.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const handleAddUser = (userData: Omit<User, "id" | "lastLogin">) => {
    const newUser: User = {
      ...userData,
      id: Math.random().toString(36).substring(2, 9),
    };
    setUsers([...users, newUser]);
    setIsAddUserOpen(false);
    toast({
      title: "Utilisateur ajouté",
      description: `${userData.name} a été ajouté avec succès.`,
    });
  };

  const handleEditUser = (userData: Omit<User, "id" | "lastLogin">) => {
    if (!currentUser) return;
    
    const updatedUsers = users.map((user) =>
      user.id === currentUser.id ? { ...user, ...userData } : user
    );
    setUsers(updatedUsers);
    setIsEditUserOpen(false);
    toast({
      title: "Utilisateur mis à jour",
      description: `${userData.name} a été mis à jour avec succès.`,
    });
  };

  const handleDeleteUser = (userId: string) => {
    const userToDelete = users.find((user) => user.id === userId);
    if (!userToDelete) return;

    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
    toast({
      title: "Utilisateur supprimé",
      description: `${userToDelete.name} a été supprimé avec succès.`,
      variant: "destructive",
    });
  };

  const openEditDialog = (user: User) => {
    setCurrentUser(user);
    setIsEditUserOpen(true);
  };

  const toggleUserStatus = (userId: string) => {
    const updatedUsers = users.map((user) =>
      user.id === userId
        ? {
            ...user,
            status: user.status === "active" ? "inactive" : "active",
          }
        : user
    );
    setUsers(updatedUsers);
    
    const updatedUser = updatedUsers.find((user) => user.id === userId);
    toast({
      title: `Statut mis à jour`,
      description: `${updatedUser?.name} est maintenant ${
        updatedUser?.status === "active" ? "actif" : "inactif"
      }.`,
    });
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Gestion des Utilisateurs</h1>
        <Button onClick={() => setIsAddUserOpen(true)}>
          <UserPlus className="mr-2" /> Ajouter un utilisateur
        </Button>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Rechercher par nom, email ou rôle..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nom</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Rôle</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead>Dernière connexion</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-10">
                  Aucun utilisateur trouvé
                </TableCell>
              </TableRow>
            ) : (
              filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <span className="capitalize">{user.role.replace("_", " ")}</span>
                  </TableCell>
                  <TableCell>
                    <span
                      className={`inline-block px-2 py-1 rounded-full text-xs ${
                        user.status === "active"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {user.status === "active" ? "Actif" : "Inactif"}
                    </span>
                  </TableCell>
                  <TableCell>{user.lastLogin || "Jamais"}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => toggleUserStatus(user.id)}
                        title={
                          user.status === "active"
                            ? "Désactiver l'utilisateur"
                            : "Activer l'utilisateur"
                        }
                      >
                        <UserCheck />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => openEditDialog(user)}
                      >
                        <Edit />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleDeleteUser(user.id)}
                      >
                        <Trash />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Dialogue pour ajouter un utilisateur */}
      <Dialog open={isAddUserOpen} onOpenChange={setIsAddUserOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Ajouter un utilisateur</DialogTitle>
            <DialogDescription>
              Créez un nouvel utilisateur dans le système
            </DialogDescription>
          </DialogHeader>
          <UserForm
            onSubmit={handleAddUser}
            onCancel={() => setIsAddUserOpen(false)}
          />
        </DialogContent>
      </Dialog>

      {/* Dialogue pour éditer un utilisateur */}
      <Dialog open={isEditUserOpen} onOpenChange={setIsEditUserOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Modifier l'utilisateur</DialogTitle>
            <DialogDescription>
              Modifiez les informations de l'utilisateur
            </DialogDescription>
          </DialogHeader>
          {currentUser && (
            <UserForm
              initialData={{
                name: currentUser.name,
                email: currentUser.email,
                role: currentUser.role,
                status: currentUser.status,
              }}
              onSubmit={handleEditUser}
              onCancel={() => setIsEditUserOpen(false)}
              isEditing={true}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UserManagement;
