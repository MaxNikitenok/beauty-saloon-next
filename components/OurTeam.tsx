import styles from "../styles/OurTeam.module.css";
import Image from "next/image";

const employees = [
  {
    id: 201,
    image: "/employees/employee-1.png",
    description: "Елена Васильевна - Визажист",
    name: "Елена Васильевна",
    profession: "Визажист",
  },
  {
    id: 202,
    image: "/employees/employee-2.png",
    description: "Елена Васильевна - Мастер маникюра",
    name: "Елена Васильевна",
    profession: "Мастер маникюра",
  },
  {
    id: 203,
    image: "/employees/employee-3.png",
    description: "Елена Васильевна - Мастер маникюра",
    name: "Елена Васильевна",
    profession: "Мастер маникюра",
  },
  {
    id: 204,
    image: "/employees/employee-4.png",
    description: "Елена Васильевна - Косметолог",
    name: "Елена Васильевна",
    profession: "Косметолог",
  },
  {
    id: 205,
    image: "/employees/employee-5.png",
    description: "Елена Васильевна - Парикмахер",
    name: "Елена Васильевна",
    profession: "Парикмахер",
  },
  {
    id: 206,
    image: "/employees/employee-1.png",
    description: "Елена Васильевна - Визажист",
    name: "Елена Васильевна",
    profession: "Визажист",
  },
];

const OurTeam = () => {
  return (
    <div className={styles.ourTeam}>
      <div className={styles.wrapper}>
        <div className={styles.ourTeam_title}>Наши мастера</div>
        <div className={styles.ourTeam_container}>
          {employees.map((employee) => {
            return (
              <div className={styles.ourTeam_employee} key={employee.id}>
                <div className={styles.employee_imageWrapper}>
                  <div className={styles.employee_imageFrame}></div>
                  <Image
                    className={styles.employee_image}
                    src={employee.image}
                    width={400}
                    height={477}
                    alt={employee.description}
                  />
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
    </div>
  );
};

export default OurTeam;
