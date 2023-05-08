import Image from 'next/image'
import styles from './page.module.css'
import { SiInstagram } from "react-icons/si";
import { CgScrollV } from "react-icons/cg";

const Home = () => {
  return (
    <>
    <main className={styles.main}>
     <header className={styles.header}>
      <div className={styles.instaLink}><SiInstagram size={24}/></div>
      <nav className={styles.leftNav}>
        <div>Главная</div>
        <div>Мастера</div>
        <div>Косметика</div>
      </nav>
      <div className={styles.logo}><Image src='/logo.png' width={40} height={38} alt='logo'/></div>
      <nav className={styles.rightNav}>
        <div>Акции</div>
        <div>Отзывы</div>
        <div>Контакты</div>
      </nav>
      <div className={styles.menu}>|||</div>
     </header>
     <h1 className={styles.title}>Салон красоты<br/>«Delote-Beauty»<br/>на Крестовском</h1>
     <div className={styles.scroll}><CgScrollV size={30}/><span>Прокрутите вниз</span></div>
    </main>
    <div className={styles.about}></div>
    <div className={styles.services}></div>
    <div className={styles.cosmetics}></div>
    <div className={styles.ourWork}></div>
    <footer className={styles.footer}></footer>
    </>
  )
}

export default Home;
