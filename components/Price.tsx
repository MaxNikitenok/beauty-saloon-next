import Image from 'next/image';
import styles from '../styles/Price.module.css';

const Price = () => {
  return (
    <div className={styles.price}>
      <div className={styles.price_block}>
        <div className={styles.block_image}>
          <Image
            src="/price_images/img-1.png"
            width={636}
            height={536}
            alt="image"
          />
        </div>
        <div className={styles.block_list}>
          <div className={styles.list_item}>
            <div className={styles.item_title}>Женская укладка</div>
            <div className={styles.item_cost}>1 000 ₽ </div>
            <div className={styles.item_description}>+ обработка кончинков волос</div>
          </div>
          <div className={styles.list_item}>
            <div className={styles.item_title}>Женская укладка</div>
            <div className={styles.item_cost}>1 000 ₽ </div>
            <div className={styles.item_description}>+ обработка кончинков волос</div>
          </div>
          <div className={styles.list_item}>
            <div className={styles.item_title}>Женская укладка</div>
            <div className={styles.item_cost}>1 000 ₽ </div>
            <div className={styles.item_description}>+ обработка кончинков волос</div>
          </div>
          <div className={styles.list_item}>
            <div className={styles.item_title}>Женская укладка</div>
            <div className={styles.item_cost}>1 000 ₽ </div>
            <div className={styles.item_description}>+ обработка кончинков волос</div>
          </div>
        </div>
      </div>
      <div className={styles.price_block}>
        <div className={styles.block_image}>
          <Image
            src="/price_images/img-1.png"
            width={636}
            height={536}
            alt="image"
          />
        </div>
        <div className={styles.block_list}>
          <div className={styles.list_item}>
            <div className={styles.item_title}>Женская укладка</div>
            <div className={styles.item_cost}>1 000 ₽ </div>
            <div className={styles.item_description}>+ обработка кончинков волос</div>
          </div>
          <div className={styles.list_item}>
            <div className={styles.item_title}>Женская укладка</div>
            <div className={styles.item_cost}>1 000 ₽ </div>
            <div className={styles.item_description}>+ обработка кончинков волос</div>
          </div>
          <div className={styles.list_item}>
            <div className={styles.item_title}>Женская укладка</div>
            <div className={styles.item_cost}>1 000 ₽ </div>
            <div className={styles.item_description}>+ обработка кончинков волос</div>
          </div>
          <div className={styles.list_item}>
            <div className={styles.item_title}>Женская укладка</div>
            <div className={styles.item_cost}>1 000 ₽ </div>
            <div className={styles.item_description}>+ обработка кончинков волос</div>
          </div>
        </div>
      </div>
      <div className={styles.price_block}>
        <div className={styles.block_image}>
          <Image
            src="/price_images/img-1.png"
            width={636}
            height={536}
            alt="image"
          />
        </div>
        <div className={styles.block_list}>
          <div className={styles.list_item}>
            <div className={styles.item_title}>Женская укладка</div>
            <div className={styles.item_cost}>1 000 ₽ </div>
            <div className={styles.item_description}>+ обработка кончинков волос</div>
          </div>
          <div className={styles.list_item}>
            <div className={styles.item_title}>Женская укладка</div>
            <div className={styles.item_cost}>1 000 ₽ </div>
            <div className={styles.item_description}>+ обработка кончинков волос</div>
          </div>
          <div className={styles.list_item}>
            <div className={styles.item_title}>Женская укладка</div>
            <div className={styles.item_cost}>1 000 ₽ </div>
            <div className={styles.item_description}>+ обработка кончинков волос</div>
          </div>
          <div className={styles.list_item}>
            <div className={styles.item_title}>Женская укладка</div>
            <div className={styles.item_cost}>1 000 ₽ </div>
            <div className={styles.item_description}>+ обработка кончинков волос</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
