import styles from "./Nav.module.scss";
import Link from "next/link";
import { Input } from '@nextui-org/react';

const Nav = ( ) => {
    return(
        <nav className={styles.nav}>
            <div>
                <Link href={"/"}>
                    <div className={styles.logo}>
                        <h3>all</h3>
                        <h2>Films</h2>
                    </div>
                </Link>
            </div>
            <ul className={styles.items}>
                <Link href={"/peliculas"}>Peliculas</Link>
                <Link href={"/series"}>Series</Link>
                
            </ul>
            <div>
                <Input clearable bordered initialValue="Buscar.." color="success"/>
            </div>
            <div className={styles.avatar}>
            <Link href="https://developers.themoviedb.org/4/getting-started" passHref={true}>
                <button>API</button>
            </Link>    
            </div>
        </nav>
    )
}

export default Nav;