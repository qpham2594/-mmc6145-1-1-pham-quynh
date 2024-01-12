import { Link } from 'react-router-dom'
import favicon from '../images/fav.png'

import styles from '../styles/home.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <Link className={styles.logo}>
                <img src={favicon} alt='Quynh Logo'/>
            </Link>
            <div className={styles.menu}>
                <Link to="/"> Home </Link>
                <Link to="/about"> About </Link>
                <Link to="/contact"> Contact </Link>
            </div>
        </header>
    )
}