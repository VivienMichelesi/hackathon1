import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Navbar from "../components/Navbar";
import ShopLesson from "../components/ShopLesson";
import VideoCards from "../components/VideoCards";
import Coaching from "./coaching/Coaching";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Coaching></Coaching>
      
    </div>
  );
}
