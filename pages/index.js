import Head from 'next/head'
import Header from '../components/Header/Header'
import Layout from '../components/Layout'
import Proximamente from '../components/Proximamente/Proximamente';
import { NextUIProvider } from '@nextui-org/react';
import { createTheme } from "@nextui-org/react"


export default function Home({info, infoSeries, infoHeader, infoImg}) {

  const darkTheme = createTheme({
    type: 'dark'
  });

  return (
    <div>
      <Head>
        <title>allFilms</title>
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
          <Header movie={infoHeader} img={infoImg} />
          <Proximamente peliculas={info} series={infoSeries} />
        </Layout>
      </NextUIProvider>
    </div>
  )
}

export async function getStaticProps () {
  const apiKey = "8c04e8d54f6cd03989b2ce231b026efa";
  const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es&page=1`)
  const data = await response.json()

  const responseSeries = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=es&page=1`);
  const dataSeries = await responseSeries.json();

  const header = await fetch(`https://api.themoviedb.org/3/movie/718930?api_key=${apiKey}&language=es`)
  const dataHeader = await header.json();

  const imgHeader = await fetch(`https://api.themoviedb.org/3/movie/718930/images?api_key=${apiKey}&language=es`)
  const dataImg = await imgHeader.json()


  return {
    props: {
      info: data.results,
      infoSeries: dataSeries.results,
      infoHeader: dataHeader,
      infoImg: dataImg
    }
  }
}


