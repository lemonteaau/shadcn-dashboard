import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import Logo from "@/components/logo";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("flex flex-col justify-between gap-6 p-12", className)}>
      <Logo />
      <Button>Home</Button>
      <Button>Supplier</Button>
      <Button>Customer</Button>
      <Button>Product</Button>
      <div className="h-auto w-full grow"></div>
      <Button>Settings</Button>
      <Button>Logout</Button>
    </div>
  );
}
