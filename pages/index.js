import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>jessieismessie</title>
        <meta name="description" content="Twitch Streamer who is grabbin thighs and eatting nuggets." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/jim-twitterimage.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/jim-twitterimage.png" />

        <link rel="icon" href="/jim-favicon.ico" />
        

      </Head>
      <main className={styles.main}>
        <div className={styles.gridcontainer}>
          <div className={styles.headerlogo}>
            <img src='/jim-logo.svg' height="100%" alt='Logo of jessieismessie' />
          </div>
          <div className={styles.headersocials}>
            <nav><a href="https://www.twitch.tv/jessieismessie" target="noopener">Twitch</a></nav>
            <nav><a href="https://www.youtube.com/channel/UCol1Sq9iELLdtK5U90mvrYw" target="noopener">YouTube</a></nav>
            <nav><a href="https://twitter.com/jessieismessie_" target="noopener">Twitter</a></nav>
            <nav><a href="https://discord.gg/r3TR3h89xx" target="noopener">Discord Server</a></nav>
          </div>
        </div>
        <div className={styles.content}>
          <h1>Main</h1>
        </div>
      </main>


    </div>
  )
}
