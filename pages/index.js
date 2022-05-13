import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>jessieismessie</title>
        <meta name="description" content="Twitch Streamer who is grabbin thighs and eatting nuggets." />
		<meta property="og:type" content="website" />
		<meta property="og:image" content="/jim-twitterimage.png"/>
		<meta name="twitter:card" content="summary_large_image"/>
		<meta name="twitter:image" content="/jim-twitterimage.png" />

        <link rel="icon" href="/jim-favicon.ico" />
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" />
		
      </Head>

      <main className={styles.main}>
        <header>
			<div>
				<Image src="/jessieismessieText.svg" alt="jessieismessie Logo" />
			</div>
		</header>
      </main>

 
    </div>
  )
}
