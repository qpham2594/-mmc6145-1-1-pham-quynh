import styles from '../styles/home.module.css'
import Project from '../components/project'

export default function Home() {
  return (
    <main className={styles.background}>
      <header/>
      <br/><br/>
      <div className= {styles.mainContent}>
        <h1 className={styles.placeholder}>Hi there, my name is Quynh (pronounced Quinn), and below are some of the projects I have been working on throughout my program and on my free time.
        If you are interested in getting to know me, please go to my About page, thank you! </h1>
        <br/><br/>
        <div className={styles.projectContainer}>
          <div className={styles.eachCard}>
            <Project link='https://mood-tracker-with-timer-app-9bb4421e7ab1.herokuapp.com/' 
                    projectTitle = 'Mood Tracker App' 
                    description='An application for individuals to track their mood each day, ellaborate on it, and a Pomodoro Timer for maximum productivity.' />
          </div>
          <div className={styles.eachCard}>
            <Project link='https://ayselahs.github.io/com6338-10-10-pham-smith/m' 
                    projectTitle = 'Movie Generator App'
                    description= 'The goal of the application is to choose a movie randomly for family movie nights when your family members cannot make a decision.'/>
          </div>
          <div className={styles.eachCard}>
            <Project link='https://seiraeurta31.github.io/Class_Project_2023_Titanic/index.html' 
                    projectTitle = 'Titanic: The Movie Info' 
                    description= 'The application provides the history, cast, facts, and further information about the movie. It was the very first project created in the program.'/>
          </div>
        </div>
      </div>
    </main>
  )
}