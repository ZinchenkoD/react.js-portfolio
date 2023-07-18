import github from './github.png'
import linkedin from './linkedin.png'
import insta from './instagram.png'
import twitter from './twitter.png'
import styles from './Socials.module.css'


export default function Socials () {
    return (
        <div>
            <a href="/#"><img className={styles.icons} src={github} alt="" /></a>
            <a href="/#"><img className={styles.icons} src={linkedin} alt="" /></a>
            <a href="/#"><img className={styles.icons} src={insta} alt="" /></a>
            <a href="/#"><img src={twitter} alt="" /></a>
        </div>
    );
}