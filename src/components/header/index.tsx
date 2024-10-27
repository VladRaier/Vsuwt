import Menu from '../menu'
import styles from './header.module.scss'

const Header = () => {
	return (
		<div className={styles.header}>
			<div className={styles.header__wrapper}>
				<div className={styles.header__title}>
					<div className={styles.header__logo}></div>
					<h1 className={styles.header__title_text}>
						Волжский Государственный Университет <br />
						Водного Транспорта
					</h1>
				</div>
				<div className={styles.header__menu}>
					<Menu />
				</div>
			</div>
		</div>
	)
}

export default Header
