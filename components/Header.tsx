"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import { SlSocialInstagram } from "react-icons/sl";
import { RxCross1 } from "react-icons/rx";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const Header = () => {
  const pathname = usePathname();

  const [showMenu, setShowMenu] = useState(false);

  let x

  if (typeof window !== "undefined") {
    x = window.scrollY;
  } else {
    x = 0;
  }

  const [scroll, setScroll] = useState(x);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    setScroll(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={scroll > 40 ? styles.minHeader : styles.header}>
      <div
        className={scroll > 40 ? styles.headerBackMin : styles.headerBackFull}
      >
        <div className={styles.wrapper}>
          <nav className={styles.navbar}>
            <a href="https://www.instagram.com/" className={styles.instaLink}>
              <SlSocialInstagram size={24} />
            </a>
            <div className={styles.leftLinks}>
              <Link
                href="/"
                className={pathname === "/" ? styles.link_active : styles.link}
              >
                Главная
              </Link>
              <Link
                href="/our-team"
                className={
                  pathname === "/our-team" ? styles.link_active : styles.link
                }
              >
                Мастера
              </Link>
              <Link
                href="/cosmetics"
                className={
                  pathname === "/cosmetics" ? styles.link_active : styles.link
                }
              >
                Косметика
              </Link>
            </div>
            <Link href="/" className={styles.logo}>
              <Image src="/logo.png" width={40} height={38} alt="logo" />
            </Link>
            <div className={styles.rightLinks}>
              <Link
                href="/price"
                className={
                  pathname === "/price" ? styles.link_active : styles.link
                }
              >
                Цены
              </Link>
              <Link
                href="/reviews"
                className={
                  pathname === "/reviews" ? styles.link_active : styles.link
                }
              >
                Отзывы
              </Link>
              <Link
                href="/contacts"
                className={
                  pathname === "/contacts" ? styles.link_active : styles.link
                }
              >
                Контакты
              </Link>
            </div>
            <div className={styles.menuButton_container}>
              <div
                className={styles.menuButton}
                onClick={() => setShowMenu(true)}
              >
                <div
                  className={
                    showMenu
                      ? styles.topLine_position2
                      : styles.menuButton_topLine
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
              className={styles.popupWrapper}
              onClick={(e) => {
                e.stopPropagation();
                setShowMenu(false);
              }}
            ></div>
          )}
          <div
            className={showMenu ? styles.showPopup : styles.hidePopup}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.popup}>
              <div
                className={styles.popup_cross}
                onClick={() => setShowMenu(false)}
              >
                <RxCross1 size={28} color="#fff" />
              </div>
              <div className={styles.popup_content}>
                <p className={styles.popup_text}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores corrupti autem atque quidem voluptatum, itaque sit
                  perferendis a officiis doloremque mollitia consequatur
                  consectetur tenetur ea labore rerum porro soluta recusandae!
                </p>
                <div className={styles.popup_block}>
                  <div className={styles.block_title}>Контакты</div>
                  <div className={styles.block_description}>
                    +7 (812) 123-45-67
                  </div>
                  <div className={styles.block_description}>
                    +7 (812) 123-45-67
                  </div>
                  <div className={styles.block_description}>
                    Новоостровский проспект, дом 36 лит. С
                  </div>
                </div>
                <div className={styles.popup_block}>
                  <div className={styles.block_title}>Режим работы</div>
                  <div className={styles.block_description}>
                    C 10:00 до 21:00 (Пн-Пт)
                  </div>
                  <div className={styles.block_description}>
                    С 11:00 до 20:00 (Сб-Вс)
                  </div>
                </div>
              </div>
              <div className={styles.popup_nav}>
              <Link
                href="/"
                className={pathname === "/" ? styles.link_active : styles.link}
              >
                Главная
              </Link>
              <Link
                href="/our-team"
                className={
                  pathname === "/our-team" ? styles.link_active : styles.link
                }
              >
                Мастера
              </Link>
              <Link
                href="/cosmetics"
                className={
                  pathname === "/cosmetics" ? styles.link_active : styles.link
                }
              >
                Косметика
              </Link>
              <Link
                href="/price"
                className={
                  pathname === "/price" ? styles.link_active : styles.link
                }
              >
                Цены
              </Link>
              <Link
                href="/reviews"
                className={
                  pathname === "/reviews" ? styles.link_active : styles.link
                }
              >
                Отзывы
              </Link>
              <Link
                href="/contacts"
                className={
                  pathname === "/contacts" ? styles.link_active : styles.link
                }
              >
                Контакты
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
