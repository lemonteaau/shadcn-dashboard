import Sidebar from "@/components/sidebar";
import { Topbar } from "@/components/topbar";

export default function Home() {
  return (
    <main className="grid h-screen grid-cols-5">
      <Sidebar className="col-span-1 border-r" />
      <div className="col-span-4 bg-gray-100">
        <Topbar className="h-24 bg-white" />
        <div className="pt-5">
          <h1>Dashboard page</h1>
        </div>
      </div>
    </main>
  );
}
