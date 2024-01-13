import styles from '../styles/home.module.css'

const ContactInfo = ({info,link,image}) => (
    <div className={styles.contactBox}>
        <p className={styles.description}> 
            <a href={link} target='_blank' rel='noopener noreferrer' className={styles.projectLink}> {info} </a>
        </p>
            <img src={image} className='contactLogo'/>
    </div>
)
export default ContactInfo