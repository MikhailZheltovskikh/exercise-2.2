import styles from './app.module.css';
import data from './data.json';
import { useState } from 'react';

export const App = () => {
	const [steps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);

	const lastItemList = activeIndex === steps.length - 1;

	const onClickButtonNext = () => {
		setActiveIndex(activeIndex + 1);
	};

	const onClickButtonPrev = () => {
		if (activeIndex > 0) {
			setActiveIndex(activeIndex - 1);
		}
	};

	const onClickButtonReset = () => {
		setActiveIndex(0);
	};

	const onClick = () => {
		if (!lastItemList) {
			onClickButtonNext();
		} else {
			onClickButtonReset();
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{steps[activeIndex].content}
					</div>
					<ul className={styles['steps-list']}>
						{steps.map(({ id, title }, index) => (
							<li
								className={
									styles['steps-item'] +
									(index === activeIndex ? ` ${styles.active}` : '') +
									(index < activeIndex ? ` ${styles.done}` : '')
								}
								key={id}
							>
								<button className={styles['steps-item-button']}>
									{index + 1}
								</button>
								{title}
							</li>
						))}
					</ul>
					<div className={styles['buttons-container']}>
						<button className={styles.button} onClick={onClickButtonPrev}>
							Назад
						</button>
						<button className={styles.button} onClick={onClick}>
							{lastItemList ? 'Начать сначала' : 'Далее'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
