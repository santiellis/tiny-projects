import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" type="images" href="/images/favicon.ico" />
      </Head> */}

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my projects
        </h1>
        <div className={styles.grid}>
          <a
            href="https://santiagoellis.dev/cloudinary/cloudinaryHome"
            className={styles.card}
          >
            <h2>Cloudinary &rarr;</h2>
            <p>
             Add images, look at them from the main page.
            </p>
          </a>
        </div>
        <div className={styles.grid}>
          <a
            href="https://santiagoellis.dev/tic-tac-toe/tic-tac-toe"
            className={styles.card}
          >
            <h2>Tic-Tac-Toe &rarr;</h2>
            <p>
             Play a game of Tic-Tac-Toe.
            </p>
          </a>
        </div>
        <div className={styles.grid}>
          <a
          href='https://santiagoellis.dev/pc-presentation/pc-presentation'
          className={styles.card}
          >
            <h2>PC Presentation &rarr;</h2>
            <p>
              Landing page and css for a computer style page.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/santiellis"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by Santiago Ellis
          <span className={styles.logo}>
          </span>
        </a>
      </footer>
    </div>
  )
}
