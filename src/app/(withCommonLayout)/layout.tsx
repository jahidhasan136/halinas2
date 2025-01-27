import Navbar from "@/components/shared/Navbar";
import { Toaster } from "@/components/ui/sonner";
import React, { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div>
        <Navbar />
        <div> {children}</div>
        <Toaster />
      </div>
    </>
  );
};

export default CommonLayout;