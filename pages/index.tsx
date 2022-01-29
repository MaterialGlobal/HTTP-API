import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Stream } from "@cloudflare/stream-react";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HTTP.cfd</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stream autoplay src="918556ff7a08ff3d08a2c01f93018996" />
    </div>
  )
}
