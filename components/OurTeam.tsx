import styles from '../styles/OurTeam.module.css';
import Image from 'next/image';

const employees = [
  {
    id: 201,
    img: '/employees/employee-1.png',
    alt: 'Елена Васильевна - Визажист',
    name: 'Елена Васильевна',
    profession: 'Визажист',
  },
  {
    id: 202,
    img: '/employees/employee-2.png',
    alt: 'Елена Васильевна - Мастер маникюра',
    name: 'Елена Васильевна',
    profession: 'Мастер маникюра',
  },
  {
    id: 203,
    img: '/employees/employee-3.png',
    alt: 'Елена Васильевна - Мастер маникюра',
    name: 'Елена Васильевна',
    profession: 'Мастер маникюра',
  },
  {
    id: 204,
    img: '/employees/employee-4.png',
    alt: 'Елена Васильевна - Косметолог',
    name: 'Елена Васильевна',
    profession: 'Косметолог',
  },
  {
    id: 205,
    img: '/employees/employee-5.png',
    alt: 'Елена Васильевна - Парикмахер',
    name: 'Елена Васильевна',
    profession: 'Парикмахер',
  },
  {
    id: 206,
    img: '/employees/employee-1.png',
    alt: 'Елена Васильевна - Визажист',
    name: 'Елена Васильевна',
    profession: 'Визажист',
  },
];

const OurTeam = () => {
  return (
    <div className={styles.ourTeam}>
      <div className={styles.ourTeam_title}>Наши мастера</div>
      <div className={styles.ourTeam_container}>
        {employees.map((employee) => {
          return (
            <div className={styles.ourTeam_employee} key={employee.id}>
              <div className={styles.employee_imageWrapper}>
                <div className={styles.employee_imageFrame}></div>
                <div className={styles.employee_image}>
                  <Image
                    src={employee.img}
                    width={400}
                    height={477}
                    alt={employee.alt}
                  />
                </div>
              </div>
              <div className={styles.employee_name}>{employee.name}</div>
              <div className={styles.employee_profession}>
                {employee.profession}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurTeam;
