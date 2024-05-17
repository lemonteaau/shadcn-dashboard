import Logo from "@/components/logo";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <main className="grid h-screen grid-cols-5">
      <Sidebar className="col-span-1 h-full" />
      <div className="col-span-4">
        <h1>Dashboard page</h1>
      </div>
    </main>
  );
}
