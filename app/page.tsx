import Image from "next/image";
import styles from "./page.module.css";
import { CgScrollV } from "react-icons/cg";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OurWorks from "../components/OurWorks";
import Services from "@/components/Services";
import Cosmetics from "@/components/Cosmetics";

const Home = () => {
  return (
    <>
      <main className={styles.main}>
        <Header />
        <h1 className={styles.main_title}>
          Салон красоты
          <br />
          «Delote-Beauty»
          <br />
          на Крестовском
        </h1>
        <div className={styles.scroll}>
          <CgScrollV size={30} />
          <span>Прокрутите вниз</span>
        </div>
      </main>
      <div className={styles.about}>
        <div className={styles.about_title}>
          <Image src="/comma.png" width={80} height={64} alt="comma" />
        </div>
        <div className={styles.about_description}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu
            nibh vitae amet. Ipsum, pharetra donec ornare velit. Id at quisque
            accumsan risus ac ipsum ut. Sit elit, facilisi proin non malesuada
            sociis tristique. Viverra augue lorem ut quisque quam tortor,
            malesuada iaculis.
          </p>
          <p>
            Et elementum at nulla venenatis, faucibus integer. Auctor neque
            eros, viverra rutrum. Fames ultrices condimentum tortor nec
            penatibus. Velit imperdiet sapien fringilla vestibulum sit fames.
          </p>
        </div>
      </div>
      <Services />
      <Cosmetics />
      <OurWorks />
      <Footer />
    </>
  );
};

export default Home;
