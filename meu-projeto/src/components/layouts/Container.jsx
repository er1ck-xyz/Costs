import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./Container.module.css";

export default function Container({ customClass }) {
  return (
    <div className={`${styles.container} ${styles[customClass] || ""}`}>
      <Outlet />
    </div>
  );
}
