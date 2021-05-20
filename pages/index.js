import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home_note from "../components/Home_note";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>People list | Homepage</title>
        <meta name="description" content="people" />
      </Head>
      <div>
        <Home_note></Home_note>
        <Link href="/people">
          <a>See list</a>
        </Link>
      </div>
    </>
  );
}
