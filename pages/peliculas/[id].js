import Head from "next/head";
import Layout from "../../components/Layout";
import { NextUIProvider } from '@nextui-org/react';
import { createTheme } from "@nextui-org/react"
import { useRouter } from "next/router";
import PeliculaInfo from "../../components/Pelicula/PeliculaInfo";

const Pelicula = ({data, dataImg, cast, similar}) => {

    const darkTheme = createTheme({
        type: 'dark'
    });
    
    const router = useRouter()
    const {id} = router.query;

    return (
        <div>
          <Head>
            <title>allFilms - Peliculas</title>
            <meta name="description" content="Films" />
            <link rel="icon" href="/favicon.png" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
          </Head>
          <NextUIProvider theme={darkTheme}>
            <Layout>
                <PeliculaInfo
                id={id} data={data} img={dataImg} cast={cast} similares={similar}
                />
            </Layout>
          </NextUIProvider>
        </div>
      )
}

export async function getStaticPaths () {
    const apiKey = "8c04e8d54f6cd03989b2ce231b026efa";

    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es&page=1`)
    const data = await response.json()
    const pageUno = data.results.map(({id}) => ({params: {id: `${id}`}}))

    const responseDos = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es&page=2`)
    const dataDos = await responseDos.json()
    const pageDos = dataDos.results.map(({id}) => ({params: {id: `${id}`}}))

    const responseTres = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es&page=3`)
    const dataTres = await responseTres.json()
    const pageTres = dataTres.results.map(({id}) => ({params: {id: `${id}`}}))

    const responseCuatro = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es&page=4`)
    const dataCuatro = await responseCuatro.json()
    const pageCuatro = dataCuatro.results.map(({id}) => ({params: {id: `${id}`}}))

    const responseCinco = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es&page=5`)
    const dataCinco = await responseCinco.json()
    const pageCinco = dataCinco.results.map(({id}) => ({params: {id: `${id}`}}))

    return {
      paths: [...pageUno, ...pageDos, ...pageTres, ...pageCuatro, ...pageCinco],
      fallback: false
    }
}

export async function getStaticProps({params}){
    const apiKey = "8c04e8d54f6cd03989b2ce231b026efa";

    const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${apiKey}&language=es`)
    const data = await response.json()
    
    console.log(data)

    const images = await fetch(`
    https://api.themoviedb.org/3/movie/${params.id}/images?api_key=${apiKey}&language=es`)
    const dataImg = await images.json()

    const cast = await fetch(`
    https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=${apiKey}&language=es`)
    const dataCast = await cast.json()

    const similar = await fetch(`https://api.themoviedb.org/3/movie/${params.id}/similar?api_key=${apiKey}&language=en-US&page=1`)
    const dataSimilar = await similar.json()


    return{
        props: {
            data,
            dataImg,
            cast: dataCast.cast,
            similar: dataSimilar.results
        }
    }
}

export default Pelicula;