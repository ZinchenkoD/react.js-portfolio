import styles from './Main.module.css'
import Heading from '../H2.jsx'
import Socials from '../socials/Socials';
import pfp from './pfp.png'

export default function Main (){
    return(
        <section>
            <div className={styles.main__info}>
                <div className={styles.leftside}>
                    <Heading name='<h1>Hello World!</h1>'></Heading>
                    <h1>I’m Frontend developer</h1>
                    <Socials></Socials>
                </div>
                <img className={styles.pfp} src={pfp} alt="" />
            </div>
        </section>
    );
}