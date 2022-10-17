import styles from "../Proximamente/Proximamente.module.scss";
import Image from "next/image";
import { Pagination } from "@nextui-org/react";
import { useState } from 'react';
import { Progress } from "@nextui-org/react";

const Series = ({series}) => {
    const img500 = "https://image.tmdb.org/t/p/w500"; 

    const [data, setData] = useState(series);
    const [loading, setLoading] = useState(false)

    const getData = async (event) => {
        const apiKey = "8c04e8d54f6cd03989b2ce231b026efa";
        const response = await fetch(`
    https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=${event}`)
        const data = await response.json()
        setData(data.results)
        setLoading(false)
    }

    return(
        <div className={styles.container}>
            <div className={styles.title}>
                <h3>Lo mas nuevo</h3>
            </div>
            {loading ? <Progress
            indeterminated
            value={50}
            color="success"
            status="success"
            /> :
            <div className={styles.listMovies}>
                {data.map((s, index)=> {
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
            }
            <div className={styles.pagination}>
                <Pagination total={5} color="success" onChange={(event)=>{
                    setLoading(true)
                    getData(event)
                }} />
            </div>
        </div>
    )
}

export default Series;