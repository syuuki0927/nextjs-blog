import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <h1>Headder</h1>
      {children}
      <h1>Footer</h1>
    </>
  );
};

export default Layout;
