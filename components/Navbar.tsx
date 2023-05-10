'use client'

import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import { SlSocialInstagram } from 'react-icons/sl';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname)

  return (
    <nav className={styles.navbar}>
      <div className={styles.instaLink}>
        <SlSocialInstagram size={24} />
      </div>
      <div className={styles.leftLinks}>
        <Link href="/" className={pathname === '/' ? styles.link_active : styles.link}>
          Главная
        </Link>
        <Link href="/our-team" className={pathname === '/our-team' ? styles.link_active : styles.link}>
          Мастера
        </Link>
        <Link href="/" className={styles.link}>
          Косметика
        </Link>
      </div>
      <div className={styles.logo}>
        <Image src="/logo.png" width={40} height={38} alt="logo" />
      </div>
      <div className={styles.rightLinks}>
        <Link href="/" className={styles.link}>
          Акции
        </Link>
        <Link href="/" className={styles.link}>
          Отзывы
        </Link>
        <Link href="/contacts" className={pathname === '/contacts' ? styles.link_active : styles.link}>
          Контакты
        </Link>
      </div>
      <div className={styles.menu}>|||</div>
    </nav>
  );
};

export default Navbar;
