import Head from "next/head";
import Problem from "../homePage/Problem";
import TitleScreen from "../homePage/TitleScreen";
import Video from "../homePage/Video";
import Product from "../homePage/Product";
import BusinessModel from "../homePage/BusinessModel";
import FAQ from "../homePage/FAQ";
import ContactUsForm from "../homePage/ContactUsForm";

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
