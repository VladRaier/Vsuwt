import styles from './menu.module.scss'

const item: { id: number; value: string }[] = [
	{ id: 1, value: 'Об университете' },
	{ id: 2, value: 'Приёмная компания' },
	{ id: 3, value: 'Образование' },
	{ id: 4, value: 'Наука' },
	{ id: 5, value: 'Международная деятельность' },
	{ id: 6, value: 'Дополнительное образование и профессиональное обучение' },
	{ id: 7, value: 'Культура и спорт' },
	{ id: 8, value: 'Пресс служба' },
	{ id: 9, value: 'Контакты Вакансии' },
]

const Menu = () => {
	return (
		<ul className={styles.menu}>
			{item?.map(item => {
				return (
					<li key={item.id} className={styles.menu__item}>
						<span>{item.value}</span>
					</li>
				)
			})}
		</ul>
	)
}

export default Menu
