import styles from '../styles/OurTeam.module.css';
import Image from 'next/image';

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
