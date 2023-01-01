import Head from "next/head";
import Mission from "../components/Mission";
import Problem from "../components/Problem";
import TitleScreen from "../components/TitleScreen";
import Video from "../components/Video";
import Product from "../components/Product";
import BusinessModel from "../components/BusinessModel";
import Uses from "../components/Uses";
import FAQ from "../components/FAQ";
import { useInView } from "react-intersection-observer";
import ContactUsForm from "../components/ContactUsForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>Drone Co</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <TitleScreen />
      <Product />
      <Video />
      <Problem />
      <BusinessModel />
      {/* <Mission /> */}
      {/* <Uses /> */}
      <ContactUsForm />
      <FAQ />
    </>
  );
}