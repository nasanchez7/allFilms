import Head from 'next/head'
import Layout from '../components/Layout'
import { NextUIProvider } from '@nextui-org/react';
import Peliculas from '../components/Peliculas/Peliculas';
import { createTheme } from "@nextui-org/react"

const peliculas = ({info}) => {

    const darkTheme = createTheme({
        type: 'dark'
    });

    return(
        <div>
            <Head>
                <title>allFilms - Peliculas</title>
                <meta name="description" content="Films" />
                <link rel="icon" href="/favicon.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
            </Head>
            <NextUIProvider theme={darkTheme}>
                <Layout>
                    <Peliculas peliculas={info}/>
                </Layout>
            </NextUIProvider>
        </div>
    )
}

export async function getStaticProps(){
    const apiKey = "8c04e8d54f6cd03989b2ce231b026efa";

    const response = await fetch(`
    https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
    const data = await response.json()

    return {
        props: {
            info: data.results
        }
    }
}

export default peliculas;