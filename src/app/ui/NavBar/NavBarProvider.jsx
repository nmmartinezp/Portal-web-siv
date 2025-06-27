"use client";
import { useState } from "react";
import NavBar from "./NavBar";

function NavBarProvider() {
  const [open, setOpen] = useState(false);

  return <NavBar menuOpen={open} onToggle={setOpen} />;
}

export default NavBarProvider;
