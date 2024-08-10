import React, { useState, useEffect } from "react";
import { useScroll } from "framer-motion";
import styles from "./Header.module.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const updateHeader = () => {
      setIsScrolled(scrollY?.get() > 50);
    };

    scrollY?.onChange(updateHeader);
    return () => scrollY?.clearListeners();
  }, [scrollY]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.logo_bg}>
          <div className={styles.logo}>Light In The Dark</div>
        </div>
        <nav>
          <ul className={styles.navList}>
            <li>
              <a href="#" className={styles.navLink}>
                EN
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
