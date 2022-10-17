import Image from "next/image";
import Link from "next/link"
import styles from "./Header.module.scss";


export default function Header ({movie}){


    return(
        <header className={styles.header}>
            <div className={styles.proximamente}>
                <div className={styles.info}>
                    <h4>Disponible en 2022</h4>
                    <h2> Avatar 2 : El Camino Del Agua </h2>
                    <div className={styles.trailer}>
                        <Link href="https://www.youtube.com/watch?v=GztSkj2vZ4g&ab_channel=TrailersInSpanish" passHref={true}>
                            <a>
                                <i className='bx bx-play-circle'></i>
                                <h3>Mirar trailer</h3>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}



