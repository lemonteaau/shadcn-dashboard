import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <main className="grid grid-cols-5">
      <Sidebar className="col-span-1" />
      <div className="col-span-4">
        <div>
          <h1>Dashboard page</h1>
        </div>
      </div>
    </main>
  );
}
