import Image from "next/image";
import styles from "./Proximamente.module.scss";

const Proximamente = ({peliculas, series}) => {

    const img500 = "https://image.tmdb.org/t/p/w500"; 

    return(
        <div className={styles.container}>
            <div className={styles.title}>
                <h3>Peliculas destacadas</h3>
            </div>
            <div className={styles.listMovies}>
                {peliculas.map((p, index)=> {
                    return(
                        <div
                        key={index}
                        className={styles.movie}
                        >
                            <Image
                            src={img500+p.poster_path}
                            width={250}
                            height={350}
                            />
                            <h3> {p.title} </h3>
                            <div className={styles.vote}>
                                <i className='bx bxs-star'></i>
                                <h4> {p.vote_average} </h4>
                            </div>
                            <div className={styles.play}>
                                <i className='bx bx-play-circle play'></i>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={styles.title}>
                <h3>Series destacadas</h3>
            </div>
            <div className={styles.listMovies}>
                {series.map((s, index)=>{
                    return(
                        <div
                        key={index}
                        className={styles.movie}
                        >
                            <Image
                            src={img500+s.poster_path}
                            width={250}
                            height={350}
                            />
                            <h3> {s.original_name} </h3>
                            <div className={styles.vote}>
                                <i className='bx bxs-star'></i>
                                <h4> {s.vote_average} </h4>
                            </div>
                            <div className={styles.play}>
                                <i className='bx bx-play-circle play'></i>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div>
            </div>
        </div>
    )
}

export default Proximamente;