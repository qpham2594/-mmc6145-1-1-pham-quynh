import styles from '../styles/home.module.css'

export default function Contact() {
  return (
    <main className={styles.background}>
      <header/>
      <br/><br/>
      <div className= {styles.mainContent}>
          <h1 className={styles.placeholder}> Contact Information </h1> <br/><br/>
            <div className={styles.projectContainer}> 
                <div className={styles.contactBox}>
                  <p className={styles.description}> 
                    <a href='https://github.com/qpham2594' target='_blank' rel='noopener noreferrer'> Github Repository </a>
                  </p>
                </div>
                
                <div className={styles.contactBox}>
                  <p className={styles.description}> 
                    <a href='https://www.linkedin.com/in/quynh-pham-2b32911a4/' target='_blank' rel='noopener noreferrer'> LinkedIn Profile </a>
                  </p>
                </div>

                <div className={styles.contactBox}>
                  <p className={styles.description}> 
                    <a href='https://codepen.io/qpham2594' target='_blank' rel='noopener noreferrer'> CodePen Profile </a>
                  </p>
                </div>
              </div>
        </div>
    </main>
  )
}