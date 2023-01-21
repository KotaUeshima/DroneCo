import Head from "next/head";
import FAQ from "../homePage/FAQ";
import ContactUs from "../homePage/ContactUs";
import HowItWorks from "../homePage/HowItWorks";
import Specs from "../homePage/Specs";
import Drone from "../homePage/Drone";
import HeroPage from "../homePage/HeroPage";
import Solution from "../homePage/Solution";
import Customers from "../homePage/Customers";

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
      <HeroPage />
      <Drone />
      <Specs />
      <Solution />
      <HowItWorks />
      <Customers />
      <FAQ />
      <ContactUs />
    </>
  );
}
