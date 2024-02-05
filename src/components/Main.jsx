import styles from './Main.module.css';
import ProjectList from "./Projects/ProjectList.jsx";
import SkillsList from "./Skills/SkillsList.jsx";
import ClientsList from "./Clients/ClientsList.jsx";
import {useState} from "react";

export default function Main() {
	const [projectArray, setProjects] = useState([]);
	async function fetchProjects() {
		const apiEndpoint = import.meta.env.VITE_API_ENDPOINT;
		const apiProjectEndpoint = apiEndpoint + '/projects';
		const projectList = await fetch(apiProjectEndpoint);
		const data = await projectList.json();
		setProjects(data);

		console.log(apiProjectEndpoint);
	}

	async function handleButton(e) {
		e.preventDefault();
		const apiEndpoint = import.meta.env.VITE_API_ENDPOINT;
		const apiProjectEndpoint = apiEndpoint + '/projects';
		const projectList = await fetch(apiProjectEndpoint);
		const data = await projectList.json();

		console.log(data);
	}
	return (
		<div className={styles.appBody}>
			<button onClick={(e)=>handleButton(e)}></button>
			<div className={styles.projectsList}>
				<ProjectList list={projectArray}/>
			</div>
			<div>
				<SkillsList />
			</div>
			<div>
				<ClientsList />
			</div>
		</div>
	);
}