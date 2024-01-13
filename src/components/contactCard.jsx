import styles from '../styles/home.module.css'

const ContactInfo = ({ info, link, image }) => (
    <div className={styles.contactBox}>
      <a href={link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
        <p className={styles.contactDescription}>{info}</p>
        <img src={image} alt={info} className={styles.contactLogo} />
      </a>
    </div>
  )
export default ContactInfo