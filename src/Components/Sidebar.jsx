import {
  LayoutDashboard,
  Users,
  BookOpen,
  ClipboardCheck,
  GraduationCap
} from "lucide-react";

import { NavLink } from "react-router-dom";

function Sidebar() {

  const menuItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: LayoutDashboard
    },
    {
      name: "Students",
      path: "/students",
      icon: Users
    },
    {
      name: "Courses",
      path: "/courses",
      icon: BookOpen
    },
    {
      name: "Attendance",
      path: "/attendance",
      icon: ClipboardCheck
    },
    {
      name: "Marks",
      path: "/marks",
      icon: GraduationCap
    }
  ];

  return (
    <aside className="sidebar">

      <div className="sidebar-title">
        Menu
      </div>

      <nav>

        {menuItems.map((item) => {

          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "menu-item active"
                  : "menu-item"
              }
            >

              <Icon size={15} />

              <span>{item.name}</span>

            </NavLink>
          );

        })}

      </nav>

    </aside>
  );
}

export default Sidebar;