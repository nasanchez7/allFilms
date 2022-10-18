import Image from "next/image";
import Link from "next/link"
import styles from "./Header.module.scss";


export default function Header ({movie, img}){

    const imagen = "https://image.tmdb.org/t/p/original";

    return(
        <header className={styles.header}>
            <div className={styles.proximamente} style={{
                background: `
                linear-gradient(357deg, rgba(0,0,0,1) 0%, rgba(51,120,255,0) 100%),
                rgba(0, 0, 0, 0.7) url(${imagen}${img?.backdrops[0].file_path})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: "100vh",
            }} >
                <div className={styles.info}>
                    <h2> {movie.title} </h2>
                    <div className={styles.genres} >
                        <ul> {movie.genres.map((g)=>{
                                return(
                                    <li key={g.id}> {g.name} </li>
                                )
                        })} </ul>
                    </div>
                    <h4> {movie.overview} </h4>
                    <div className={styles.trailer}>
                        <Link href="https://www.youtube.com/watch?v=jUPwb7yz1Nk&ab_channel=SensaCineTRAILERS" passHref={true}>
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



