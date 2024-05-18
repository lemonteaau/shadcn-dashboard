import { cn } from "@/lib/utils";

interface DashboardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Dashboard({ className }: DashboardProps) {
  return (
    <div className={cn("m-7 flex-grow space-y-8", className)}>
      <div className="rounded-2xl bg-white">
        <h1>Dashboard 1</h1>
      </div>
      <div className="rounded-2xl bg-white">
        <h1>Dashboard 2</h1>
      </div>
    </div>
  );
}
