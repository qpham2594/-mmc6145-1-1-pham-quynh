import styles from '../styles/home.module.css'

const Project = ({link, projectTitle, description, imagePreview}) => (
    <a href={link} target='_blank' rel='noopener noreferrer'>
        <h2 className= {styles.title}> {projectTitle} </h2>
        <p className={styles.description}> {description} </p>
        {imagePreview}
    </a>
);
 export default Project
