import styles from '../styles/OurTeam.module.css';
import Image from 'next/image';

const ourTeam = [
  {
    id: 1,
    img: '/employees/employee-1.png',
    alt: 'hairdressers',
    name: 'Елена Васильевна',
  },
  {
    id: 2,
    img: '/employees/employee-2.png',
    alt: 'manicure',
    name: 'Елена Васильевна',
  },
  {
    id: 3,
    img: '/employees/employee-3.png',
    alt: 'pedicure',
    name: 'Елена Васильевна',
  },
  {
    id: 4,
    img: '/employees/employee-4.png',
    alt: 'cosmetology',
    name: 'Елена Васильевна',
  },
  {
    id: 5,
    img: '/employees/employee-5.png',
    alt: 'aesthetist',
    name: 'Елена Васильевна',
  },
  {
    id: 6,
    img: '/employees/employee-6.png',
    alt: 'visage',
    name: 'Елена Васильевна',
  },
];

const OurTeam = () => {
  return (
    <div className={styles.ourTeam}>
      <div className={styles.ourTeam_title}>Наши мастера</div>
      <div className={styles.ourTeam_container}>
        <div className={styles.ourTeam_employee}>
          <div className={styles.employee_imageWrapper}>
            <div className={styles.employee_imageFrame}></div>
            <div className={styles.employee_image}>
              <Image
                src="/employees/employee-1.png"
                width={400}
                height={477}
                alt="hairdressers"
              />
            </div>
          </div>
          <div className={styles.employee_name}>Елена Васильевна</div>
          <div className={styles.employee_profession}>Визажист</div>
        </div>
        <div className={styles.ourTeam_employee}>
          <div className={styles.employee_imageWrapper}>
            <div className={styles.employee_imageFrame}></div>
            <div className={styles.employee_image}>
              <Image
                src="/employees/employee-2.png"
                width={400}
                height={477}
                alt="hairdressers"
              />
            </div>
          </div>
          <div className={styles.employee_name}>Елена Васильевна</div>
          <div className={styles.employee_profession}>Визажист</div>
        </div>
        <div className={styles.ourTeam_employee}>
          <div className={styles.employee_imageWrapper}>
            <div className={styles.employee_imageFrame}></div>
            <div className={styles.employee_image}>
              <Image
                src="/employees/employee-3.png"
                width={400}
                height={477}
                alt="hairdressers"
              />
            </div>
          </div>
          <div className={styles.employee_name}>Елена Васильевна</div>
          <div className={styles.employee_profession}>Визажист</div>
        </div>
        <div className={styles.ourTeam_employee}>
          <div className={styles.employee_imageWrapper}>
            <div className={styles.employee_imageFrame}></div>
            <div className={styles.employee_image}>
              <Image
                src="/employees/employee-4.png"
                width={400}
                height={477}
                alt="hairdressers"
              />
            </div>
          </div>
          <div className={styles.employee_name}>Елена Васильевна</div>
          <div className={styles.employee_profession}>Визажист</div>
        </div>
        <div className={styles.ourTeam_employee}>
          <div className={styles.employee_imageWrapper}>
            <div className={styles.employee_imageFrame}></div>
            <div className={styles.employee_image}>
              <Image
                src="/employees/employee-5.png"
                width={400}
                height={477}
                alt="hairdressers"
              />
            </div>
          </div>
          <div className={styles.employee_name}>Елена Васильевна</div>
          <div className={styles.employee_profession}>Визажист</div>
        </div>
        <div className={styles.ourTeam_employee}>
          <div className={styles.employee_imageWrapper}>
            <div className={styles.employee_imageFrame}></div>
            <div className={styles.employee_image}>
              <Image
                src="/employees/employee-1.png"
                width={400}
                height={477}
                alt="hairdressers"
              />
            </div>
          </div>
          <div className={styles.employee_name}>Елена Васильевна</div>
          <div className={styles.employee_profession}>Визажист</div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
