import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Sidebar({ className }: SidebarProps) {
  return (
    <div
      className={cn("flex flex-col justify-center gap-6 px-8 py-8", className)}
    >
      <Button>Home</Button>
      <Button>Supplier</Button>
      <Button>Customer</Button>
      <Button>Product</Button>
    </div>
  );
}
