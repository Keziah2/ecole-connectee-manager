
import React from "react";
import { cn } from "@/lib/utils";
import {
  Users,
  School,
  Wallet,
  UserSquare,
  BarChart2,
  Settings,
  LogOut,
  BookOpen,
  Calendar,
  Bell,
  UserCog,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface SidebarProps {
  collapsed?: boolean;
  onToggleCollapse?: () => void;
}

const Sidebar = ({ collapsed = false, onToggleCollapse }: SidebarProps) => {
  const navigate = useNavigate();
  
  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div
      className={cn(
        "flex flex-col h-screen bg-sidebar text-sidebar-foreground transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex items-center p-4">
        {!collapsed && (
          <span className="text-xl font-bold">École Connectée</span>
        )}
        {collapsed && (
          <span className="text-xl font-bold mx-auto">EC</span>
        )}
      </div>

      <div className="flex-1 py-4">
        <nav className="space-y-1 px-2">
          <SidebarItem
            icon={BarChart2}
            title="Tableau de bord"
            collapsed={collapsed}
            onClick={() => handleNavigation("/")}
          />
          <SidebarItem
            icon={School}
            title="Établissements"
            collapsed={collapsed}
            onClick={() => handleNavigation("/schools")}
          />
          <SidebarItem
            icon={Users}
            title="Utilisateurs"
            collapsed={collapsed}
            onClick={() => handleNavigation("/users")}
          />
          <SidebarItem
            icon={Users}
            title="Élèves"
            collapsed={collapsed}
            onClick={() => handleNavigation("/students")}
          />
          <SidebarItem
            icon={UserSquare}
            title="Enseignants"
            collapsed={collapsed}
            onClick={() => handleNavigation("/teachers")}
          />
          <SidebarItem
            icon={Users}
            title="Parents"
            collapsed={collapsed}
            onClick={() => handleNavigation("/parents")}
          />
          <SidebarItem
            icon={BookOpen}
            title="Classes"
            collapsed={collapsed}
            onClick={() => handleNavigation("/classes")}
          />
          <SidebarItem
            icon={Calendar}
            title="Calendrier"
            collapsed={collapsed}
            onClick={() => handleNavigation("/calendar")}
          />
          <SidebarItem
            icon={Wallet}
            title="Comptabilité"
            collapsed={collapsed}
            onClick={() => handleNavigation("/finance")}
          />
          <SidebarItem
            icon={Bell}
            title="Notifications"
            collapsed={collapsed}
            onClick={() => handleNavigation("/notifications")}
          />
        </nav>
      </div>

      <div className="p-4 border-t border-sidebar-border">
        <nav className="space-y-1">
          <SidebarItem
            icon={UserCog}
            title="Profil"
            collapsed={collapsed}
            onClick={() => handleNavigation("/profile")}
          />
          <SidebarItem
            icon={Settings}
            title="Paramètres"
            collapsed={collapsed}
            onClick={() => handleNavigation("/settings")}
          />
          <SidebarItem
            icon={LogOut}
            title="Déconnexion"
            collapsed={collapsed}
            onClick={() => handleNavigation("/login")}
          />
        </nav>
      </div>
    </div>
  );
};

interface SidebarItemProps {
  icon: React.ElementType;
  title: string;
  collapsed?: boolean;
  onClick?: () => void;
}

const SidebarItem = ({
  icon: Icon,
  title,
  collapsed = false,
  onClick,
}: SidebarItemProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center w-full p-2 rounded-md text-sidebar-foreground hover:bg-sidebar-accent transition-colors",
        "focus:outline-none focus:ring-2 focus:ring-sidebar-ring"
      )}
    >
      <Icon className="h-5 w-5" />
      {!collapsed && <span className="ml-3">{title}</span>}
    </button>
  );
};

export default Sidebar;
