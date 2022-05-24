import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>NRadtke</title>
        <meta name="description" content="Radtke Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my portfolio, its a bit of a work in progress...
        </h1>

        <p className={styles.description}>
          NRadtke
        </p>

        <div className={styles.grid}>
        
        </div>
      </main>

      <footer className={styles.footer}>
        <a
        >
          Powered by Coffee
  
        </a>
      </footer>
    </div>
  )
}

export default Home
