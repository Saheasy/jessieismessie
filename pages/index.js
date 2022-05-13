import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>jessieismessie</title>
        <meta name="description" content="Twitch Streamer who is grabbin' thighs and eatting nuggets." />
		<meta property="og:type" content="website">
		<meta property="og:image" content="/jim-ogimage">
		<meta name="twitter:card" content="summary_large_image">
		<meta name="twitter:image" content="/jim-twitterimage">

        <link rel="icon" href="/jim-favicon.ico" />
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
		
      </Head>

      <main className={styles.main}>
        <header>
			<div>
				<Image src="/jessieismessieText.svg" alt="jessieismessie Logo" layout="responsive" width={200} height={50} />
			</div>
			<nav className="grid">
				
				<nav><a href="https://www.youtube.com/channel/UCo0GhoY3rYBUI5tNl7AkoUA" target="_blank" className="my-style">

				<svg xmlns="http://www.w3.org/2000/svg" width=1rem height=1rem fill="currentColor" class="my-style bi bi-youtube" viewBox="0 0 16 16">
			  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
			</svg>

		</header>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
