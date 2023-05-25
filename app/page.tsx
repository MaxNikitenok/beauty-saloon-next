import Image from "next/image";
import styles from "./page.module.css";
import { CgScrollV } from "react-icons/cg";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OurWorks from "../components/OurWorks";
import Services from "@/components/Services";
import Cosmetics from "@/components/Cosmetics";
import Main from "@/components/Main";
import About from "@/components/About";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.wrapper}>
        <Header />
        <Main />
        <About />
        <Services />
        <Cosmetics />
        <OurWorks />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
