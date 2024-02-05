import styles from './Main.module.css';
import ProjectList from "./Projects/ProjectList.jsx";
import SkillsList from "./Skills/SkillsList.jsx";

export default function Main() {
	return (
		<div className={styles.appBody}>
			<div>
				<ProjectList />
			</div>
			<div>
				<SkillsList />
			</div>
		</div>
	);
}