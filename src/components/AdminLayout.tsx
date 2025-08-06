import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, LogOut, Moon, Sun } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from '@/utils/AuthProvider';
import { useTheme } from '@/utils/themeContext';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { trackEvent } from '@/utils/analytics';

interface AdminLayoutProps {
  children: React.ReactNode;
  activeNavItem?: string;
  headerContent?: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, activeNavItem = 'dashboard', headerContent }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const { theme, toggleDarkMode } = useTheme();
  const { pathname } = useLocation();
  
  console.log("AdminLayout rendered, user:", user);
  
  const handleLogout = () => {
    signOut();
    navigate('/login');
  };

  // Safe access to user data
  const displayName = user?.name || (user?.email ? user.email.split('@')[0] : 'User');
  
  return (
    <>
      <div className="min-h-[60vh] bg-premium-dark">
      <div className="p-4 mb-10 flex justify-between items-center relative">
      </div>

      <div className="flex">

        {/* Main content */}
        <div
          className="flex-1 transition-all duration-300 ease-in-out px-10">
          {children}
        </div>
      </div>
    </div>
    <div className="border-b border-premium-light/10 flex justify-between items-center relative">

<div className="flex items-center ml-4">
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" className="relative h-10 w-10 rounded-full">
        <Avatar className="h-10 w-10">
          <AvatarFallback className="bg-premium-gradient text-white">
            {displayName.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56" align="end">
      <DropdownMenuLabel>
        <div className="flex flex-col">
          <span>{displayName}</span>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem 
        onClick={handleLogout}
        className="text-white bg-red-500 hover:bg-red-600 focus:text-white hover:text-white"
      >
        <LogOut className="mr-2 h-4 w-4" />
        <span>Wyloguj</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</div>
</div>
    </>
  );
};

export default AdminLayout;
