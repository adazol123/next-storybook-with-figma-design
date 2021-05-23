import Head from 'next/head'
import Image from 'next/image'
import { Button } from '../components/Button/Button'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Adazolhub</title>
        <meta name="description" content="Next JS with Figma design integrated to Storybook" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;600;700&family=Nunito:wght@200;300;400;600;700;800&display=swap" rel="stylesheet"/>
      </Head>

      <main className={styles.main}>
          <Button label="Test"/>
      </main>


    </div>
  )
}
