import Image from 'next/image';
import styles from './page.module.css';
import { CgScrollV } from 'react-icons/cg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import OurWorks from '../components/OurWorks';
import Services from '@/components/Services';

const Home = () => {
  return (
    <>
      <main className={styles.main}>
        <Navbar/>
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
      <Services/>
      <div className={styles.cosmetics}>
        <div className={styles.cosmetics_item}>
          <Image src="/kevin.png" width={69} height={108} alt="Kevin Murphy" />
        </div>
        <div className={styles.cosmetics_item}>
          <Image src="/oribe.png" width={90} height={120} alt="Oribe" />
        </div>
        <div className={styles.cosmetics_item}>
          <Image src="/alterna.png" width={190} height={98} alt="Alterna" />
        </div>
        <div className={styles.cosmetics_item}>
          <Image src="/aldo.png" width={110} height={108} alt="Aldo Coppola" />
        </div>
      </div>
      <OurWorks/>
      <Footer/>
      <div className={styles.copyright}>Copyright © 2017 - 2022</div>
    </>
  );
};

export default Home;
