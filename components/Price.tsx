import Image from "next/image";
import styles from "../styles/Price.module.css";

const price = [
  {
    id: "401",
    title: "Женская укладка",
    description: "+ обработка кончинков волос",
    cost: "1 000 ₽",
  },
  {
    id: "402",
    title: "Женская укладка",
    description: "+ обработка кончинков волос",
    cost: "1 000 ₽",
  },
  {
    id: "403",
    title: "Женская укладка",
    description: "+ обработка кончинков волос",
    cost: "1 000 ₽",
  },
  {
    id: "404",
    title: "Женская укладка",
    description: "+ обработка кончинков волос",
    cost: "1 000 ₽",
  },
  {
    id: "405",
    title: "Женская укладка",
    description: "+ обработка кончинков волос",
    cost: "1 000 ₽",
  },
  {
    id: "406",
    title: "Женская укладка",
    description: "+ обработка кончинков волос",
    cost: "1 000 ₽",
  },
  {
    id: "407",
    title: "Женская укладка",
    description: "+ обработка кончинков волос",
    cost: "1 000 ₽",
  },
  {
    id: "408",
    title: "Женская укладка",
    description: "+ обработка кончинков волос",
    cost: "1 000 ₽",
  },
  {
    id: "409",
    title: "Женская укладка",
    description: "+ обработка кончинков волос",
    cost: "1 000 ₽",
  },
  {
    id: "410",
    title: "Женская укладка",
    description: "+ обработка кончинков волос",
    cost: "1 000 ₽",
  },
  {
    id: "412",
    title: "Женская укладка",
    description: "+ обработка кончинков волос",
    cost: "1 000 ₽",
  },
  {
    id: "407",
    title: "Женская укладка",
    description: "+ обработка кончинков волос",
    cost: "1 000 ₽",
  },
];

const priceImages = [
  {
    id: "501",
    image: "/price_images/img-1.png",
  },
  {
    id: "502",
    image: "/price_images/img-1.png",
  },
  {
    id: "503",
    image: "/price_images/img-1.png",
  },
];

let size = 4;
let blocks: any[] = [];
for (let i = 0; i < Math.ceil(price.length / size); i++) {
  blocks[i] = price.slice(i * size, i * size + size);
}

console.log(blocks);

const Price = () => {
  return (
    <div className={styles.price}>
      <div className={styles.wrapper}>
      {blocks.map((block, index) => {
        return (
          <div className={styles.price_block} key={index}>
            <div className={styles.block_image}>
              <Image
                src={priceImages[index].image}
                width={636}
                height={536}
                alt="image"
              />
            </div>
            <div className={styles.block_list}>
              {block.map((item: any) => {
                return (
                  <div className={styles.list_item} key={item.id}>
                    <div className={styles.item_title}>{item.title}</div>
                    <div className={styles.item_cost}>{item.cost}</div>
                    <div className={styles.item_description}>
                      {item.description}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default Price;
