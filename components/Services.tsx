import styles from '../styles/Services.module.css';
import Image from 'next/image';

const Services = () => {
  return (
    <div className={styles.services}>
      <div className={styles.services_item}>
        <div className={styles.item_imageWrapper}>
          <div className={styles.item_imageFrame}></div>
          <div className={styles.item_image}>
            <Image
              src="/hairdressers.png"
              width={396}
              height={300}
              alt="hairdressers"
            />
          </div>
        </div>
        <div className={styles.item_title}>Парикмахерские услуги</div>
      </div>
      <div className={styles.services_item}>
        <div className={styles.item_imageWrapper}>
          <div className={styles.item_imageFrame}></div>
          <div className={styles.item_image}>
            <Image
              src="/manicure.png"
              width={396}
              height={300}
              alt="manicure"
            />
          </div>
        </div>
        <div className={styles.item_title}>Маникюр</div>
      </div>
      <div className={styles.services_item}>
        <div className={styles.item_imageWrapper}>
          <div className={styles.item_imageFrame}></div>
          <div className={styles.item_image}>
            <Image
              src="/pedicure.png"
              width={396}
              height={300}
              alt="pedicure"
            />
          </div>
        </div>
        <div className={styles.item_title}>Педикюр</div>
      </div>
      <div className={styles.services_item}>
        <div className={styles.item_imageWrapper}>
          <div className={styles.item_imageFrame}></div>
          <div className={styles.item_image}>
            <Image
              src="/cosmetology.png"
              width={396}
              height={300}
              alt="cosmetology"
            />
          </div>
        </div>
        <div className={styles.item_title}>Косметология</div>
      </div>
      <div className={styles.services_item}>
        <div className={styles.item_imageWrapper}>
          <div className={styles.item_imageFrame}></div>
          <div className={styles.item_image}>
            <Image
              src="/aesthetist.png"
              width={396}
              height={300}
              alt="aesthetist"
            />
          </div>
        </div>
        <div className={styles.item_title}>Эстетист по телу</div>
      </div>
      <div className={styles.services_item}>
        <div className={styles.item_imageWrapper}>
          <div className={styles.item_imageFrame}></div>
          <div className={styles.item_image}>
            <Image src="/visage.png" width={396} height={300} alt="visage" />
          </div>
        </div>
        <div className={styles.item_title}>Визаж</div>
      </div>
    </div>
  );
};

export default Services;
