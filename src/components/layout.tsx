import React from "react";
import styles from "./layout.module.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <h1 className={styles.header1}>Headder</h1>
      {children}
      <h1 className={styles.header1}>Footer</h1>
    </>
  );
};

export default Layout;
