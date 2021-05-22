import Head from 'next/head'
import Image from 'next/image'
import ButtonTest from '../components/Button/ButtonTest'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Adazolhub</title>
        <meta name="description" content="Next JS with Figma design integrated to Storybook" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <ButtonTest label="Test"/>
      </main>


    </div>
  )
}
