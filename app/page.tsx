import Image from 'next/image';
import styles from './page.module.css';
import { SlSocialInstagram } from 'react-icons/sl';
import { CgScrollV } from 'react-icons/cg';

const Home = () => {
  return (
    <>
      <main className={styles.main}>
        <header className={styles.header}>
          <div className={styles.instaLink}>
            <SlSocialInstagram size={24} />
          </div>
          <nav className={styles.leftNav}>
            <div>Главная</div>
            <div>Мастера</div>
            <div>Косметика</div>
          </nav>
          <div className={styles.logo}>
            <Image src="/logo.png" width={40} height={38} alt="logo" />
          </div>
          <nav className={styles.rightNav}>
            <div>Акции</div>
            <div>Отзывы</div>
            <div>Контакты</div>
          </nav>
          <div className={styles.menu}>|||</div>
        </header>
        <h1 className={styles.main_title}>
          Салон красоты
          <br />
          «Delote-Beauty»
          <br />
          на Крестовском
        </h1>
        <div className={styles.scroll}>
          <CgScrollV size={30} />
          <span>Прокрутите вниз</span>
        </div>
      </main>
      <div className={styles.about}>
        <div className={styles.about_title}>
          <Image src="/comma.png" width={80} height={64} alt="comma" />
        </div>
        <div className={styles.about_description}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu
            nibh vitae amet. Ipsum, pharetra donec ornare velit. Id at quisque
            accumsan risus ac ipsum ut. Sit elit, facilisi proin non malesuada
            sociis tristique. Viverra augue lorem ut quisque quam tortor,
            malesuada iaculis.
          </p>
          <p>
            Et elementum at nulla venenatis, faucibus integer. Auctor neque
            eros, viverra rutrum. Fames ultrices condimentum tortor nec
            penatibus. Velit imperdiet sapien fringilla vestibulum sit fames.
          </p>
        </div>
      </div>
      <div className={styles.services}>
        <div className={styles.services_item}>
          <div className={styles.item_imageWrapper}>
            <div className={styles.item_imageFrame}></div>
            <div className={styles.item_image}>
              <Image
                src="/hairdressers.png"
                width={396}
                height={300}
                alt="hairdressers"
              />
            </div>
          </div>
          <div className={styles.item_title}>Парикмахерские услуги</div>
        </div>
        <div className={styles.services_item}>
          <div className={styles.item_imageWrapper}>
            <div className={styles.item_imageFrame}></div>
            <div className={styles.item_image}>
              <Image
                src="/manicure.png"
                width={396}
                height={300}
                alt="manicure"
              />
            </div>
          </div>
          <div className={styles.item_title}>Маникюр</div>
        </div>
        <div className={styles.services_item}>
          <div className={styles.item_imageWrapper}>
            <div className={styles.item_imageFrame}></div>
            <div className={styles.item_image}>
              <Image
                src="/pedicure.png"
                width={396}
                height={300}
                alt="pedicure"
              />
            </div>
          </div>
          <div className={styles.item_title}>Педикюр</div>
        </div>
        <div className={styles.services_item}>
          <div className={styles.item_imageWrapper}>
            <div className={styles.item_imageFrame}></div>
            <div className={styles.item_image}>
              <Image
                src="/cosmetology.png"
                width={396}
                height={300}
                alt="cosmetology"
              />
            </div>
          </div>
          <div className={styles.item_title}>Косметология</div>
        </div>
        <div className={styles.services_item}>
          <div className={styles.item_imageWrapper}>
            <div className={styles.item_imageFrame}></div>
            <div className={styles.item_image}>
              <Image
                src="/aesthetist.png"
                width={396}
                height={300}
                alt="aesthetist"
              />
            </div>
          </div>
          <div className={styles.item_title}>Эстетист по телу</div>
        </div>
        <div className={styles.services_item}>
          <div className={styles.item_imageWrapper}>
            <div className={styles.item_imageFrame}></div>
            <div className={styles.item_image}>
              <Image src="/visage.png" width={396} height={300} alt="visage" />
            </div>
          </div>
          <div className={styles.item_title}>Визаж</div>
        </div>
      </div>
      <div className={styles.cosmetics}>
        <div className={styles.cosmetics_item}>
          <Image src="/kevin.png" width={69} height={108} alt="Kevin Murphy" />
        </div>
        <div className={styles.cosmetics_item}>
          <Image src="/oribe.png" width={90} height={120} alt="Oribe" />
        </div>
        <div className={styles.cosmetics_item}>
          <Image src="/alterna.png" width={190} height={98} alt="Alterna" />
        </div>
        <div className={styles.cosmetics_item}>
          <Image src="/aldo.png" width={110} height={108} alt="Aldo Coppola" />
        </div>
      </div>
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
      <footer className={styles.footer}>
        <div className={styles.footer_logo}>
          <Image src="/logo.png" width={60} height={58} alt="logo" />
        </div>
        <div className={styles.footer_contacts}>
          <div className={styles.footer_titles}>Контакты</div>
          <div className={styles.footer_infos}>
            <p>+7 (812) 123-45-67</p>
            <p>+7 (812) 123-45-67</p>
            <p>Новоостровский проспект, дом 36 лит. С</p>
          </div>
        </div>
        <div className={styles.footer_mode}>
          <div className={styles.footer_titles}>Режим работы</div>
          <div className={styles.footer_infos}>
            <p>C 10:00 до 21:00 (Пн-Пт)</p>
            <p>С 11:00 до 20:00 (Сб-Вс)</p>
          </div>
        </div>
        <div className={styles.footer_socials}>
          <div className={styles.footer_titles}>Мы в Instagram</div>
          <div className={styles.footer_socials_links}>
            <a href=""><SlSocialInstagram size={36} color='#ffffff'/></a>
          </div>
        </div>
      </footer>
      <div className={styles.copyright}>Copyright © 2017 - 2022</div>
    </>
  );
};

export default Home;
