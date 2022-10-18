import styles from "./Footer.module.scss"
import Link from "next/link"

const Footer = ( ) => {
    return(
        <footer className={styles.footer} >
            <div className={styles.uno}>
                <div className={styles.logo} >
                        <h3>all</h3>
                        <h2>Films</h2>
                </div>
                <div className={styles.contacto} >
                    <Link href="https://www.linkedin.com/in/nadirsanchez/" passHref={true}>
                        <a>Contacto</a>   
                    </Link>
                    <Link href="https://nadirsanchez.netlify.app/" passHref={true}>
                        <a>Portafolio</a>   
                    </Link>
                    <Link href="https://developers.themoviedb.org/3" passHref={true}>
                        <a>Documentacion API</a>   
                    </Link>
                </div>
                <div className={styles.links} >
                    <Link href="https://www.linkedin.com/in/nadirsanchez/" passHref={true}>
                        <i class='bx bxl-linkedin-square'></i>
                    </Link>
                    <Link href="https://github.com/nasanchez7" passHref={true}>
                        <i class='bx bxl-github'></i>
                    </Link>
                </div>
            </div>
            <div className={styles.dos} >
                <p>© 2022 AllFilms, Inc.</p>
            </div>
        </footer>
    )
}

export default Footer;