import styles from '../styles/home.module.css'

const Project = ({link, projectTitle, description, imagePreview}) => (
    <a href={link} target='_blank' rel='noopener noreferrer' className={styles.projectLink}>
        <h2 className= {styles.title}> {projectTitle} </h2>
        <p className={styles.description}> {description} </p>
        <img src={imagePreview} className={styles.projectImg}/>
    </a>
);
 export default Project
