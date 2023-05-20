import styles from '../styles/Cosmetics.module.css';
import Image from 'next/image';

const Cosmetics = () => {
  return (
    <div className={styles.cosmetics}>
    <div className={styles.cosmetics_item}>
      <Image src="/cosmetics/kevin.png" width={69} height={108} alt="Kevin Murphy" />
    </div>
    <div className={styles.cosmetics_item}>
      <Image src="/cosmetics/oribe.png" width={90} height={120} alt="Oribe" />
    </div>
    <div className={styles.cosmetics_item}>
      <Image src="/cosmetics/alterna.png" width={190} height={98} alt="Alterna" />
    </div>
    <div className={styles.cosmetics_item}>
      <Image src="/cosmetics/aldo.png" width={110} height={108} alt="Aldo Coppola" />
    </div>
  </div>
  );
};

export default Cosmetics;
