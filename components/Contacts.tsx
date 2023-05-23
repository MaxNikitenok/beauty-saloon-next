import styles from "../styles/Contacts.module.css";

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.wrapper}>
        <div className={styles.contacts_title}>Контакты</div>
        <iframe
          className={styles.map}
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d116085.73758156416!2d30.320203587123263!3d53.87382411870579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sby!4v1683753756764!5m2!1sru!2sby"
          loading="lazy"
        ></iframe>
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
                Новоостровский проспект, дом 36 лит. С
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
                Новоостровский проспект, дом 36 лит. С
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
