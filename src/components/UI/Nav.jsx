import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/components/Nav.module.css";

export default function Nav() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <div className={styles.navContainer}>
            <nav className={styles.navBar}>
                <p className={styles.navBrand}>Habit Tracker</p>
                <button
                    className={`${styles.navToggler} ${isNavOpen ? styles.open : ""}`}
                    onClick={toggleNav}
                    aria-label="Toggle navigation"
                >
                    <span className={`${styles.navTogglerIcon} ${styles.line1}`}></span>
                    <span className={`${styles.navTogglerIcon} ${styles.line2}`}></span>
                    <span className={`${styles.navTogglerIcon} ${styles.line3}`}></span>
                </button>

                <div className={`${styles.navCollapse} ${isNavOpen ? styles.show : ""}`}>
                    <div className={styles.navLinks}>
                        <Link to="/" className={styles.navLink} onClick={toggleNav}>Home</Link>
                        <Link to="/registro" className={styles.navLink} onClick={toggleNav}>Registrarse</Link>
                        <Link to="/login" className={styles.navLink} onClick={toggleNav}>Iniciar Sesión</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}
