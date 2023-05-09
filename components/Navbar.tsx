import Image from 'next/image';
import styles from '../styles/Navbar.module.css';
import { SlSocialInstagram } from 'react-icons/sl';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
          <div className={styles.instaLink}>
            <SlSocialInstagram size={24} />
          </div>
          <div className={styles.leftLinks}>
            <div>Главная</div>
            <div>Мастера</div>
            <div>Косметика</div>
          </div>
          <div className={styles.logo}>
            <Image src="/logo.png" width={40} height={38} alt="logo" />
          </div>
          <div className={styles.rightLinks}>
            <div>Акции</div>
            <div>Отзывы</div>
            <div>Контакты</div>
          </div>
          <div className={styles.menu}>|||</div>
        </nav>
  );
};

export default Navbar;
