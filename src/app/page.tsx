import { Dashboard } from "@/components/dashboard";
import Sidebar from "@/components/sidebar";
import { Topbar } from "@/components/topbar";

export default function Home() {
  return (
    <main className="grid h-screen grid-cols-7">
      <Sidebar className="col-span-1 border-r" />
      <div className="col-span-6 flex flex-col bg-gray-100">
        <Topbar className="h-24 border-b bg-white" />
        <Dashboard className="flex-grow" />
      </div>
    </main>
  );
}
