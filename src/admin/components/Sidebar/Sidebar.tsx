import { useState } from "react";

import DesktopSidebar from "./DesktopSidebar";
import MobileSidebar from "./MobileSidebar";
import SidebarDrawer from "./SidebarDrawer";
import SidebarOverlay from "./SidebarOverlay";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <DesktopSidebar />

      <MobileSidebar
        open={open}
        onOpen={() => setOpen(true)}
      />

      <SidebarOverlay
        open={open}
        onClose={() => setOpen(false)}
      />

      <SidebarDrawer
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}