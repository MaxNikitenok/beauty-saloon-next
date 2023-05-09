import styles from '../styles/OurWorks.module.css';
import Image from 'next/image';

const OurWorks = () => {
  return (
    <div className={styles.ourWorks}>
        <div className={styles.ourWorks_title}>Наши работы</div>
        <nav className={styles.ourWorks_navigation}>
          <div className={styles.ourWorks_navigation_item}>Показать все</div>
          <div className={styles.ourWorks_navigation_item}>
            Парикмахерские услуги
          </div>
          <div className={styles.ourWorks_navigation_item}>Маникюр</div>
          <div className={styles.ourWorks_navigation_item}>Педикюр</div>
        </nav>
        <div className={styles.ourWorks_works}>
          <div className={styles.works_item}>
            <Image
              src="/works/eyelashes-1.png"
              width={416}
              height={416}
              alt="work item"
            />
          </div>
          <div className={styles.works_item}>
            <Image
              src="/works/eyelashes-2.png"
              width={416}
              height={416}
              alt="work item"
            />
          </div>
          <div className={styles.works_item}>
            <Image
              src="/works/eyelashes-3.png"
              width={416}
              height={416}
              alt="work item"
            />
          </div>
          <div className={styles.works_item}>
            <Image
              src="/works/eyelashes-4.png"
              width={416}
              height={416}
              alt="work item"
            />
          </div>
          <div className={styles.works_item}>
            <Image
              src="/works/hair-1.png"
              width={416}
              height={416}
              alt="work item"
            />
          </div>
          <div className={styles.works_item}>
            <Image
              src="/works/hair-2.png"
              width={416}
              height={416}
              alt="work item"
            />
          </div>
          <div className={styles.works_item}>
            <Image
              src="/works/hair-3.png"
              width={416}
              height={416}
              alt="work item"
            />
          </div>
          <div className={styles.works_item}>
            <Image
              src="/works/manicure-1.png"
              width={416}
              height={416}
              alt="work item"
            />
          </div>
          <div className={styles.works_item}>
            <Image
              src="/works/manicure-2.png"
              width={416}
              height={416}
              alt="work item"
            />
          </div>
        </div>
      </div>
  );
};

export default OurWorks;
