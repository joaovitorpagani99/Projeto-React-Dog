import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header}>
      <nav className={styles.container}>
        <Link to="/">Home</Link>
        <Link to="/login">Login / Criar</Link>
        <Link to="/">Home</Link>

      </nav>
    </div>
  );
};

export default Header;