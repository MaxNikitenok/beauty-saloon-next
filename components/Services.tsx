import styles from "../styles/Services.module.css";
import Image from "next/image";

const services = [
  {
    id: 101,
    image: "/services/hairdressers.png",
    description: "hairdressers",
    title: "Парикмахерские услуги",
  },
  {
    id: 102,
    image: "/services/manicure.png",
    description: "manicure",
    title: "Маникюр",
  },
  {
    id: 103,
    image: "/services/pedicure.png",
    description: "pedicure",
    title: "Педикюр",
  },
  {
    id: 104,
    image: "/services/cosmetology.png",
    description: "cosmetology",
    title: "Косметология",
  },
  {
    id: 105,
    image: "/services/aesthetist.png",
    description: "aesthetist",
    title: "Эстетист по телу",
  },
  {
    id: 106,
    image: "/services/visage.png",
    description: "visage",
    title: "Визаж",
  },
];

const Services = () => {
  return (
    <div className={styles.services}>
      <div className={styles.wrapper}>
        {services.map((service) => {
          return (
            <div className={styles.services_item} key={service.id}>
              <div className={styles.item_imageWrapper}>
                <div className={styles.item_imageFrame}></div>
                <div className={styles.item_image}>
                  <Image
                    src={service.image}
                    width={396}
                    height={300}
                    alt={service.description}
                  />
                </div>
              </div>
              <div className={styles.item_title}>{service.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
