import styles from '../styles/Services.module.css';
import Image from 'next/image';

const services = [
  {
    id: 101,
    img: '/hairdressers.png',
    alt: 'hairdressers',
    title: 'Парикмахерские услуги',
  },
  {
    id: 102,
    img: '/manicure.png',
    alt: 'manicure',
    title: 'Маникюр',
  },
  {
    id: 103,
    img: '/pedicure.png',
    alt: 'pedicure',
    title: 'Педикюр',
  },
  {
    id: 104,
    img: '/cosmetology.png',
    alt: 'cosmetology',
    title: 'Косметология',
  },
  {
    id: 105,
    img: '/aesthetist.png',
    alt: 'aesthetist',
    title: 'Эстетист по телу',
  },
  {
    id: 106,
    img: '/visage.png',
    alt: 'visage',
    title: 'Визаж',
  },
];

const Services = () => {
  return (
    <div className={styles.services}>
      {services.map((service) => {
        return (
          <div className={styles.services_item} key={service.id}>
            <div className={styles.item_imageWrapper}>
              <div className={styles.item_imageFrame}></div>
              <div className={styles.item_image}>
                <Image
                  src={service.img}
                  width={396}
                  height={300}
                  alt={service.alt}
                />
              </div>
            </div>
            <div className={styles.item_title}>{service.title}</div>
          </div>
        );
      })}
     
    </div>
  );
};

export default Services;
