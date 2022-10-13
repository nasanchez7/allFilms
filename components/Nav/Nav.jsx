import styles from "./Nav.module.scss";

const Nav = ( ) => {
    return(
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <h3>all</h3>
                <h2>Films</h2>
            </div>
            <ul className={styles.items}>
                <li>Peliculas</li>
                <li>Series</li>
            </ul>
            <button>API</button>
        </nav>
    )
}

export default Nav;