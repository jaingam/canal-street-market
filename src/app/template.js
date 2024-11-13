
import React from "react";
import localFont from "next/font/local";
import "./globals.css";

const Template=({ children }) => {
  return (
    <div className="page-transition">
     
          {children}
    </div>
  );
}
export default Template;
