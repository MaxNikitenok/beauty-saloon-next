import styles from "../styles/Footer.module.css";
import { SlSocialInstagram } from "react-icons/sl";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.wrapper}>
          <Link href={"/"} className={styles.footer_logo}>
            <Image src="/logo.png" width={60} height={58} alt="logo" />
          </Link>
          <div className={styles.footer_contacts}>
            <div className={styles.footer_title}>Контакты</div>
            <div className={styles.footer_infos}>
              <p>
                <a href="tel:12345678">+7 (812) 123-45-67</a>
              </p>
              <p>
                <a href="tel:12345678">+7 (812) 123-45-67</a>
              </p>
              <p>Новоостровский проспект, дом 36 лит. С</p>
            </div>
          </div>
          <div className={styles.footer_mode}>
            <div className={styles.footer_title}>Режим работы</div>
            <div className={styles.footer_infos}>
              <p>C 10:00 до 21:00 (Пн-Пт)</p>
              <p>С 11:00 до 20:00 (Сб-Вс)</p>
            </div>
          </div>
          <div className={styles.footer_socials}>
            <div className={styles.footer_title}>Мы в Instagram</div>
            <div className={styles.footer_socials_links}>
              <a href="https://www.instagram.com/">
                <SlSocialInstagram size={36} color="#ffffff" />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className={styles.copyright}>Copyright © 2017 - 2022</div>
    </>
  );
};

export default Footer;
