import styles from './Header.module.css'
import logo from './logo.png'

export default function Header (){
    return (
        <header>
            <nav>
                <a href="/#"><img src={logo} alt=""/></a>
                <ul className={styles.item}>
                    <a href="/#"><li>Home</li></a>
                    <a href="/#"><li>About me</li></a>
                    <a href="/#"><li>Skills</li></a>
                    <a href="/#"><li>Works</li></a>
                </ul>
                <button>Contact me</button>
            </nav>
        </header>
    );
}

