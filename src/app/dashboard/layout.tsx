import React, { ReactNode } from "react";
import Navbar from "./components/Navbar";

type Children = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: Children) {
  return (
    <div>
      <h1>Dashboard Layout</h1>
      <Navbar />
      {children}
    </div>
  );
}
