import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaRegBell } from "react-icons/fa";

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}

import { Button } from "@/components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="rounded-full" variant="outline" size="icon">
          <FaRegBell size="20px" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Notifications</h4>
            <p className="text-sm text-muted-foreground">
              You have no new notifications.
            </p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

interface TopbarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Topbar({ className }: TopbarProps) {
  return (
    <nav className={cn("flex items-center justify-between p-10", className)}>
      <Link href="/" className="text-2xl font-bold">
        Home
      </Link>
      <div className="flex items-center gap-4">
        <PopoverDemo />
        <h1 className="font-bold">lemontea</h1>
        <AvatarDemo />
      </div>
    </nav>
  );
}
