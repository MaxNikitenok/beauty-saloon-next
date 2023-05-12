'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import { SlSocialInstagram } from 'react-icons/sl';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);

  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.instaLink}>
          <SlSocialInstagram size={24} />
        </div>
        <div className={styles.leftLinks}>
          <Link
            href="/"
            className={pathname === '/' ? styles.link_active : styles.link}
          >
            Главная
          </Link>
          <Link
            href="/our-team"
            className={
              pathname === '/our-team' ? styles.link_active : styles.link
            }
          >
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
          <Link href="/price" className={styles.link}>
            Цены
          </Link>
          <Link href="/" className={styles.link}>
            Отзывы
          </Link>
          <Link
            href="/contacts"
            className={
              pathname === '/contacts' ? styles.link_active : styles.link
            }
          >
            Контакты
          </Link>
        </div>
        <div className={styles.menuButton_container}>
          <div className={styles.menuButton} onClick={() => setShowMenu(true)}>
            <div
              className={
                showMenu ? styles.topLine_position2 : styles.menuButton_topLine
              }
            ></div>
            <div
              className={
                showMenu
                  ? styles.centerLine_position2
                  : styles.menuButton_centerLine
              }
            ></div>
            <div
              className={
                showMenu
                  ? styles.bottomLine_position2
                  : styles.menuButton_bottomLine
              }
            ></div>
          </div>
        </div>
      </nav>
      {showMenu && (
        <div
          className={styles.menuWrapper}
          onClick={(e) => {
            e.stopPropagation();
            setShowMenu(false);
          }}
        ></div>
      )}
      <div
        className={showMenu ? styles.showMenu : styles.hideMenu}
        onClick={(e) => e.stopPropagation()}
      ></div>
    </>
  );
};

export default Navbar;
