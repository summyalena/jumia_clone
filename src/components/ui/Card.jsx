import React from "react";

import styles from "./ui.module.css";

function Card({ children, className }) {
  return (
    <div className={`flex flex-col gap-sm ${styles.card} ${className}`}>
      {children}
    </div>
  );
}

export default Card;
