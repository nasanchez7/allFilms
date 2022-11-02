import Image from "next/image";
import styles from "./Pelicula.module.scss";

const PeliculaInfo = ({data, img, cast, similares}) => {

    const imagen = "https://image.tmdb.org/t/p/original";

    const newCast = cast.slice(0, 4);

    const newSimilares = similares.slice(0, 6);

    return(
        <div className={styles.container} >
            {img.backdrops || img.posters === undefined ?
            <div style={{
                background: `
                linear-gradient(357deg, rgba(0,0,0,1) 0%, rgba(51,120,255,0) 100%),
                rgba(0, 0, 0, 0.7)`
            }} className={styles.portada} >
                <div className={styles.imgInfo} >
                    <div className={styles.info} >
                        <h2> {data.original_title} </h2>
                        <ul> {data.genres.map((g)=>{
                            return(
                                <li key={g.id}> {g.name} </li>
                            )
                        })} </ul>
                        <h4> {data.overview} </h4>
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
                        <Image
                        src={`${imagen}${img?.posters[0].file_path}`}
                        width={300}
                        height={450}
                        />
                        <div className={styles.info} >
                            <h2> {data.original_title} </h2>
                            <ul> {data.genres.map((g)=>{
                                return(
                                    <li key={g.id}> {g.name} </li>
                                )
                            })} </ul>
                            <h4> {data.overview} </h4>
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
                                <h3>{s.title}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default PeliculaInfo;