import Head from "next/head";
import Problem from "../components/Problem";
import TitleScreen from "../components/TitleScreen";
import Video from "../components/Video";
import Product from "../components/Product";
import BusinessModel from "../components/BusinessModel";
import FAQ from "../components/FAQ";
import ContactUsForm from "../components/ContactUsForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>Drone Co</title>
        <meta
          name="description"
          content="Providing a solution for your current and future drone needs."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TitleScreen />
      <Product />
      <Video />
      <Problem />
      <BusinessModel />
      <ContactUsForm />
      <FAQ />
    </>
  );
}
