import styles from './Header.module.css';

export default function Header() {
	return (
		<header>
			<div className={styles.main}>
				<div className={styles.info}>This is the information bar</div>
				<div className={styles.navbar}>This is the navbar</div>
			</div>
		</header>
	);
}