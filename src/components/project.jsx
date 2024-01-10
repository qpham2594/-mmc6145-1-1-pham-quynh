import styles from '../styles/home.module.css'

const Project = ({link, projectTitle}) => (
    <a href={link} target='_blank' rel='noopener noreferrer'>
        {projectTitle}
    </a>
);
 export default Project
