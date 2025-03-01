import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from '@/routers/constants';
import { ICONS } from '@/constants/icons';

interface SidebarProps {
  onMenuItemClick?: (itemId: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onMenuItemClick = () => {} }) => {
  const [isCollapsed, setIsCollapsed] = useState(() => {
    const saved = localStorage.getItem('sidebarCollapsed');
    return saved ? JSON.parse(saved) : false;
  });

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('sidebarCollapsed', JSON.stringify(isCollapsed));
  }, [isCollapsed]);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: ICONS.DASHBOARD, activeIcon: ICONS.DASHBOARD_ACTIVE, path: ROUTES.DASHBOARD },
    { id: 'users', label: 'Users', icon: ICONS.USERS, activeIcon: ICONS.USERS_ACTIVE, path: ROUTES.USERS },
    { id: 'approvals', label: 'Approvals', icon: ICONS.APPROVALS, activeIcon: ICONS.APPROVALS_ACTIVE, path: ROUTES.APPROVALS },
    { id: 'facilities', label: 'Facilities', icon: ICONS.FACILITIES, activeIcon: ICONS.FACILITIES_ACTIVE, path: ROUTES.FACILITIES },
    { id: 'fields', label: 'Fields', icon: ICONS.FIELDS, activeIcon: ICONS.FIELDS_ACTIVE, path: ROUTES.FIELDS },
    { id: 'services', label: 'Services', icon: ICONS.SERVICES, activeIcon: ICONS.SERVICES_ACTIVE, path: ROUTES.SERVICES },
    { id: 'vouchers', label: 'Vouchers', icon: ICONS.VOUCHERS, activeIcon: ICONS.VOUCHERS_ACTIVE, path: ROUTES.VOUCHERS },
    { id: 'events', label: 'Events', icon: ICONS.EVENTS, activeIcon: ICONS.EVENTS_ACTIVE, path: ROUTES.EVENTS },
    { id: 'reviews', label: 'Reviews', icon: ICONS.REVIEWS, activeIcon: ICONS.REVIEWS_ACTIVE, path: ROUTES.REVIEWS },
    { id: 'supports', label: 'Supports', icon: ICONS.SUPPORTS, activeIcon: ICONS.SUPPORTS_ACTIVE, path: ROUTES.SUPPORTS },
    { id: 'reports', label: 'Reports', icon: ICONS.REPORTS, activeIcon: ICONS.REPORTS_ACTIVE, path: ROUTES.REPORTS },
  ];

  const bottomItems = [
    { id: 'settings', label: 'Settings', icon: ICONS.SETTINGS, activeIcon: ICONS.SETTINGS_ACTIVE, path: ROUTES.SETTINGS },
    { id: 'logout', label: 'Logout', icon: ICONS.LOGOUT, activeIcon: ICONS.LOGOUT_ACTIVE, path: ROUTES.DASHBOARD },
  ];

  const handleItemClick = (path: string, id: string) => {
    onMenuItemClick(id);
    navigate(path);
  };

  const isActiveRoute = (path: string): boolean => {
    return location.pathname === path;
  };

  return (
    <div className={`${isCollapsed ? 'w-20' : 'w-60'} min-h-screen bg-white p-[10px] flex flex-col border-r border-[#d8d8d8] transition-all duration-300`}>
      <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'px-[20px]'} pt-[10px] pb-[20px]`}>
        <img 
          src={ICONS.TOGGLE_SIDEBAR} 
          alt="Toggle Sidebar" 
          className="w-[30px] h-[20px] cursor-pointer"
          onClick={toggleSidebar}
        />
        {!isCollapsed && (
          <div className="border-0 bg-transparent cursor-pointer" onClick={() => navigate(ROUTES.DASHBOARD)}>
            <img src={ICONS.BRAND} alt="Brand" className="w-[120px] h-[60px] ml-[15px]" />
          </div>
        )}
      </div>

      <div className="border-b border-[#d8d8d8] mb-5" />

      <div className="flex-1">
        {menuItems.map((item) => {
          const isActive = isActiveRoute(item.path);
          return (
            <div
              key={item.id}
              onClick={() => handleItemClick(item.path, item.id)}
              className={`flex items-center ${isCollapsed ? 'justify-center' : 'px-5'} p-[10px] mb-3 rounded-[10px] cursor-pointer transition-colors w-full
                ${isActive ? 'bg-[#4880ff] text-white' : 'bg-white text-black hover:bg-[#f5f5f5]'}`}
            >
              <img 
                src={isActive && item.activeIcon ? item.activeIcon : item.icon}
                alt={item.label}
                className={`w-[25px] h-[25px] ${!isCollapsed && 'mr-[10px]'} ${isActive && !item.activeIcon ? 'brightness-0 invert' : ''}`}
              />
              {!isCollapsed && (
                <span className="font-roboto text-xl font-semibold leading-[23px]">
                  {item.label}
                </span>
              )}
            </div>
          );
        })}
      </div>

      <div className="border-t border-[#d8d8d8] mt-5 pt-5">
        {bottomItems.map((item) => {
          const isActive = isActiveRoute(item.path);
          return (
            <div
              key={item.id}
              onClick={() => handleItemClick(item.path, item.id)}
              className={`flex items-center ${isCollapsed ? 'justify-center' : 'px-5'} p-[10px] mb-3 rounded-[10px] cursor-pointer transition-colors w-full
                ${isActive ? 'bg-[#4880ff] text-white' : 'bg-white text-black hover:bg-[#f5f5f5]'}`}
            >
              <img 
                src={item.icon}
                alt={item.label}
                className={`w-[25px] h-[25px] ${!isCollapsed && 'mr-[10px]'} ${isActive ? 'brightness-0 invert' : ''}`}
              />
              {!isCollapsed && (
                <span className="font-roboto text-xl font-semibold leading-[23px]">
                  {item.label}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;

