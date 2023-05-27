"use client";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import styles from "../styles/Contacts.module.css";

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.wrapper}>
        <div className={styles.contacts_title}>Контакты</div>
        <YMaps>
          <div>
            <Map
              defaultState={{
                center: [53.89927, 30.337509],
                zoom: 17,
                controls: ["zoomControl", "fullscreenControl"],
              }}
              modules={["control.ZoomControl", "control.FullscreenControl"]}
              className={styles.map}
            >
              <Placemark defaultGeometry={[53.89927, 30.337509]} />
            </Map>
          </div>
        </YMaps>
        <div className={styles.info}>
          <div className={styles.info_part}>
            <div className={styles.info_item}>
              <div className={styles.info_title}>Контакты</div>
              <div className={styles.info_description}>
                <a href="tel:12345678">+7 (812) 123-45-67</a>
              </div>
              <div className={styles.info_description}>
                <a href="tel:12345678">+7 (812) 123-45-67</a>
              </div>
              <div className={styles.info_description}>
                улица Ленинская, дом 30
              </div>
            </div>
            <div className={styles.info_item}>
              <div className={styles.info_title}>Режим работы</div>
              <div className={styles.info_description}>
                C 10:00 до 21:00 (Пн-Пт)
              </div>
              <div className={styles.info_description}>
                С 11:00 до 20:00 (Сб-Вс)
              </div>
            </div>
          </div>
          <div className={styles.info_part}>
            <div className={styles.info_item}>
              <div className={styles.info_title}>Контакты</div>
              <div className={styles.info_description}>
                <a href="tel:12345678">+7 (812) 123-45-67</a>
              </div>
              <div className={styles.info_description}>
                <a href="tel:12345678">+7 (812) 123-45-67</a>
              </div>
              <div className={styles.info_description}>
              улица Ленинская, дом 30
              </div>
            </div>
            <div className={styles.info_item}>
              <div className={styles.info_title}>Режим работы</div>
              <div className={styles.info_description}>
                C 10:00 до 21:00 (Пн-Пт)
              </div>
              <div className={styles.info_description}>
                С 11:00 до 20:00 (Сб-Вс)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
