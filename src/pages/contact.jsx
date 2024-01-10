import styles from '../styles/home.module.css'

export default function Contact() {
  return (
    <main>
      <h1 className={styles.placeholder}> Contact Information </h1>
        <p>
            You can view my work and progress below:
            <ul>
                <li>
                    <a href='https://github.com/qpham2594' target='_blank' rel='noopener noreferrer'> Github Repository </a>
                    <a href='https://www.linkedin.com/in/quynh-pham-2b32911a4/' target='_blank' rel='noopener noreferrer'> LinkedIn Profile </a>
                </li>
            </ul>
        </p>
    </main>
  )
}