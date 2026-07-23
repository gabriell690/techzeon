import { Outlet } from "react-router-dom";

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-zinc-950">

      <Sidebar />

      <div className="flex min-h-screen flex-col lg:ml-72">

        <Header />

        <main
          className="
            flex-1
            overflow-y-auto
            p-4
            sm:p-6
            lg:p-8
          "
        >
          <Outlet />
        </main>

      </div>

    </div>
  );
}