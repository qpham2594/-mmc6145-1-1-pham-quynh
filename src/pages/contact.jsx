import styles from '../styles/home.module.css'
import ContactInfo from '../components/contactCard'
import Github from '../images/github.png'
import LinkedIn from '../images/linkedin.png'
import CodePen from '../images/codepen.png'

export default function Contact() {
  return (
    <main className={styles.background}>
      <header/>
      <br/><br/>
      <div className= {styles.mainContent}>
          <h1 className={styles.h1Title}> Contact Information </h1> <br/><br/>
            <div className={styles.projectContainer}> 
              <ContactInfo
                  link='https://github.com/qpham2594'
                  info='Github Repository'
                  image={Github}
              />
              <ContactInfo
                  link='https://www.linkedin.com/in/quynh-pham-2b32911a4/'
                  info='LinkedIn Profile'
                  image={LinkedIn}
              />
              <ContactInfo
                  link='https://codepen.io/qpham2594' 
                  info='CodePen Profile'
                  image={CodePen}
              />
              </div>
        </div>
    </main>
  )
}