'use client'

import { useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/state";
import { Archive, CircleDollarSign, Clipboard, Layout, LucideIcon, Menu, SlidersHorizontal, User } from "lucide-react"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isCollapsed: boolean;
}

const SidebarLink = ({
  href,
  icon: Icon,
  label,
  isCollapsed,
}: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive =
    pathname === href || (pathname === "/" && href === "/dashboard");

  return (
    <Link href={href}>
      <div
        className={`cursor-pointer flex items-center ${
          isCollapsed ? "justify-center py-4" : "justify-start px-8 py-4"
        }
        hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors ${
          isActive ? "bg-blue-200 text-white" : ""
        }
      }`}
      >
        <Icon className="w-6 h-6 !text-gray-700" />

        <span
          className={`${
            isCollapsed ? "hidden" : "block"
          } font-medium text-gray-700`}
        >
          {label}
        </span>
      </div>
    </Link>
  );
};

const Sidebar = () => {
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );
  const dispatch = useDispatch();

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  }

  const sidebarClassNames = `fixed flex flex-col ${isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"} bg-white transition-all duration-300 ease-in-out overflow-hidden h-full shadow-md z-50`;

  return (
    <div className={sidebarClassNames}>
      {/* TOP LOGO */}
      <div className={`flex justify-between md:justify-normal items-center gap-3 pt-8 ${isSidebarCollapsed ? "px-5" : "px-8"}`}>
        <div className="">Logo</div>
        <h1 className={`${isSidebarCollapsed ? "hidden" : "block"} font-extrabold text-2xl`}>MRMAN</h1>
        <button className="md:hidden bg-gray-100 rounded-full px-3 py-3 hover:bg-blue-100" onClick={toggleSidebar}>
          <Menu size={20} />
        </button>
      </div>

      {/* LINKS */}
      <div className="flex-grow mt-8">
      <SidebarLink
          href="/dashboard"
          icon={Layout}
          label="Dashboard"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/inventory"
          icon={Archive}
          label="Inventory"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/products"
          icon={Clipboard}
          label="Products"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/users"
          icon={User}
          label="Users"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/settings"
          icon={SlidersHorizontal}
          label="Settings"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/expenses"
          icon={CircleDollarSign}
          label="Expenses"
          isCollapsed={isSidebarCollapsed}
        />
      </div>

      {/* FOOTER */}
      <div className={`${isSidebarCollapsed ? "hidden" : "block"}`}>
        <p className="text-center text-xs text-gray-500 ">&copy; MRMAN 2024</p>
      </div>
    </div>
  )
}

export default Sidebar
