import styles from '../styles/home.module.css'
import Project from '../components/project'

export default function Home() {
  return (
    <main>
      <h1 className={styles.placeholder}>I'm the home page!</h1>
      <Project link='https://github.com/qpham2594/mood-tracker-with-timer-app-pham' projectTitle = 'Mood Tracker App' />
      <Project link='https://ayselahs.github.io/com6338-10-10-pham-smith/m' projectTitle = 'Movie Generator App' />
      <Project link='https://seiraeurta31.github.io/Class_Project_2023_Titanic/index.html' projectTitle = 'Titanic: The Movie Info' />
    </main>
  )
}