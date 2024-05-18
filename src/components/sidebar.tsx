import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  FaHome,
  FaUserFriends,
  FaBoxOpen,
  FaClipboardList,
} from "react-icons/fa";
import { MdOutlineSettings, MdOutlineHelpOutline } from "react-icons/md";

import Logo from "@/components/logo";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("flex flex-col justify-between gap-6 p-6", className)}>
      <Logo />
      <nav className="flex flex-col gap-2">
        <Button
          variant="default"
          className="flex items-center justify-start gap-2"
        >
          <FaHome />
          <span>Home</span>
        </Button>
        <Button variant="ghost" className="flex justify-start gap-2">
          <FaUserFriends />
          <span>Supplier</span>
        </Button>
        <Button variant="ghost" className="flex justify-start gap-2">
          <FaClipboardList />
          <span>Order</span>
        </Button>
        <Button variant="ghost" className="flex justify-start gap-2">
          <FaBoxOpen />
          <span>Product</span>
        </Button>
      </nav>
      <div className="flex-grow"></div>
      <nav>
        <Button
          variant="ghost"
          className="flex items-center justify-start gap-2"
        >
          <MdOutlineHelpOutline />
          <span>Help</span>
        </Button>
        <Button
          variant="ghost"
          className="flex items-center justify-start gap-2"
        >
          <MdOutlineSettings />
          <span>Settings</span>
        </Button>
      </nav>
    </div>
  );
}
