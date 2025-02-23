import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />  {/* ✅ Include the common Header */}
      <main>{children}</main> {/* ✅ Render pages here */}
    </div>
  );
};

export default Layout;
