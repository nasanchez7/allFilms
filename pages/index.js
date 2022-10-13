import Head from 'next/head'
import Header from '../components/Header/Header'
import Layout from '../components/Layout'
import Proximamente from '../components/Proximamente/Proximamente';

export default function Home({info, infoSeries}) {
  return (
    <div>
      <Head>
        <title>allFilms</title>
        <meta name="description" content="Films" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      </Head>
      <Layout>
        <Header/>
        <Proximamente peliculas={info} series={infoSeries} />
      </Layout>
    </div>
  )
}

export async function getStaticProps () {
  const apiKey = "8c04e8d54f6cd03989b2ce231b026efa";
  const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es&page=1`)
  const data = await response.json()

  const responseSeries = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=es&page=1`);
  const dataSeries = await responseSeries.json();
  console.log(dataSeries.results)

  return {
    props: {
      info: data.results,
      infoSeries: dataSeries.results
    }
  }
}


