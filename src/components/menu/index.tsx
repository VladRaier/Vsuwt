import styles from "./menu.module.scss";

const Menu = () => {
  return (
    <ul className={styles.menu}>
      <li className={styles.menu__item}>Об университете</li>
      <li className={styles.menu__item}>Приёмная компания</li>
      <li className={styles.menu__item}>Образование</li>
      <li className={styles.menu__item}>Наука</li>
      <li className={styles.menu__item}>Международная деятельность</li>
      <li className={styles.menu__item}>
        Дополнительное образование и профессиональное обучение
      </li>
      <li className={styles.menu__item}>Культура и спорт</li>
      <li className={styles.menu__item}>Пресс служба</li>
      <li className={styles.menu__item}>Контакты Вакансии</li>
    </ul>
  );
};

export default Menu;
