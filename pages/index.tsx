import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header/Header";
import AssestGrid from "../components/AssetGrid/AssestGrid";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />

        <h1 className={styles.title}>List of Algorand Standard Assets on ASAlytics</h1>

        <AssestGrid />
      </main>
    </div>
  );
};

export default Home;
