import styles from "../Pelicula/Pelicula.module.scss"
import Image from "next/image";

const SerieInfo = ({data, img, cast, similares}) => {

    const imagen = "https://image.tmdb.org/t/p/original";

    const imagenS = "https://image.tmdb.org/t/p/w500";

    const newCast = cast.slice(0, 4);

    const newSimilares = similares.slice(0, 6);

    return(
        <div className={styles.container} >
            {img.backdrops[0] === undefined ?
            <div style={{
                background: `
                linear-gradient(357deg, rgba(0,0,0,1) 0%, rgba(51,120,255,0) 100%),
                rgba(0, 0, 0, 0.7)`,
                height: "100vh",
            }} className={styles.portada} >
                <div className={styles.imgInfo} >
                        <div>
                            <div className={styles.disponible} >
                                {data.networks[0] === undefined ? "" :
                                <h4>Disponible en {data.networks[0].name} </h4>
                                }
                            </div> 
                        </div>
                    <div className={styles.info} >
                        {data.name === undefined ? "" : <h2> {data.name} </h2>}
                        
                        <ul> {data.genres.map((g)=>{
                            return(
                                <li key={g.id}> {g.name} </li>
                            )
                        })} </ul>
                        <h4> {data.overview} </h4>
                        <div className={styles.cast} >
                            <h2>Reparto</h2>
                            {cast[0] === false ? "" :
                            <div className={styles.listActor}>
                                {newCast.map((c, index)=>{
                                    return(
                                        <div key={index} className={styles.actor}>
                                            <Image
                                            src={imagen + c.profile_path}
                                            height={150}
                                            width={100}
                                            />
                                            {c.name === undefined ? "" : <h4> {c?.name} </h4>}
                                        </div>
                                    )
                                })}
                            </div>
                            } 
                        </div>
                    </div>
                </div>
                
            </div>
            :
            <div style={{
                    background: `
                    linear-gradient(357deg, rgba(0,0,0,1) 0%, rgba(51,120,255,0) 100%),
                    rgba(0, 0, 0, 0.7) url(${imagen}${img?.backdrops[0].file_path})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: "100vh",
                }} className={styles.portada} >
                    <div className={styles.imgInfo} >
                        <div>
                            <Image
                            src={`${imagen}${img.posters[0].file_path}`}
                            width={300}
                            height={450}
                            />
                            <div className={styles.disponible} >
                                {data.networks[0] === undefined ? "" :
                                <h4>Disponible en {data.networks[0].name} </h4>
                                }
                            </div>
                        </div>
                        <div className={styles.info} >
                            {data.name === undefined ? "" : <h2> {data.name} </h2>}
                            <ul> {data.genres.map((g)=>{
                                return(
                                    <li key={g.id}> {g.name} </li>
                                )
                            })} </ul>
                            <h4> {data.overview} </h4>
                            <h5> Temporadas: {data.number_of_seasons} </h5>
                            <h5> Capitulos: {data.number_of_episodes} </h5>
                            <div className={styles.cast} >
                                <h2>Reparto</h2>
                                <div className={styles.listActor}>
                                    {newCast.map((c, index)=>{
                                        return(
                                            <div key={index} className={styles.actor}>
                                                <Image
                                                src={imagen + c.profile_path}
                                                height={150}
                                                width={100}
                                                />
                                                <h4> {c.name} </h4>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <div className={styles.temporadas}>
                <h3>Temporadas emitidas</h3>
                <div className={styles.listTemporadas} >
                    {data.seasons.map((s, index)=>{
                        return(
                            <div key={index} className={styles.temporada} >
                                <Image
                                src={imagen+s.poster_path}
                                height={320}
                                width={220}
                                />
                                <h3>{s.name}</h3>
                                <h4> {s.episode_count} capitulos </h4>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={styles.capitulos} >
                <div className={styles.capitulo} >
                    <h2>Ultimo capitulo emitido</h2>
                    <Image
                    src={imagen+data.last_episode_to_air.still_path}
                    height={281}
                    width={500}
                    />
                    <h3> Temporada {data.last_episode_to_air.season_number} </h3>
                    <h4> Capitulo {data.last_episode_to_air.episode_number} - {data.last_episode_to_air.name} </h4>
                </div>
                {data.next_episode_to_air === null ? "" :
                <div className={styles.capitulo} >
                    <h2>Proximo capitulo</h2>
                    <Image
                    src={imagen+data.next_episode_to_air.still_path}
                    height={281}
                    width={500}
                    />
                    <h3> Temporada {data.next_episode_to_air.season_number} </h3>
                    <h4> Capitulo {data.next_episode_to_air.episode_number} - {data.next_episode_to_air.name} </h4>
                </div>
                }
            </div>
            <div className={styles.similares}>
                <h3>Similares</h3>
                <div className={styles.listSimilares} >
                    {newSimilares.map((s, index)=>{
                        return(
                            <div key={index} className={styles.similar} >
                                <Image
                                src={imagen+s.poster_path}
                                height={320}
                                width={220}
                                />
                                <h3>{s.name}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default SerieInfo;