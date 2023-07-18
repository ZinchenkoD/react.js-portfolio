import styles from './About.module.css'
import Heading from '../H2.jsx'
import date from './date.png'
import education from './education.png'
import expirience from './expirience.png'
import id from './id.png'
import location from './location.png'


function Tag (props) {
    return(
        <div className={styles.about__info__div}>
            <div className={styles.img__div}>
                <img src={props.src} alt="" />
            </div>
            <p className={styles.about__text}><span className={styles.about__tagname}>{props.tagname}</span>{props.name}</p>
        </div>
    )
}


export default function About () {
    return(
        <section className={styles.about__section}>
            <Heading class={styles.h2} name='About me'></Heading>
            <div className={styles.about__info}>
                <div className={styles.leftside}>
                    <Tag src={id} tagname='Name: ' name='Danil Zinchenko'></Tag>
                    <Tag src={location} tagname='Location: ' name='Ukraine, Dnipropetrovsk region, Kriviy Rih'></Tag>
                    <Tag src={date} tagname='Age: ' name='17'></Tag>
                    <Tag src={education} tagname='Graduation: ' name='Senior middle school'></Tag>
                    <Tag src={expirience} tagname='Work expirience: ' name='1 year'></Tag>
                </div>
                <div className={styles.rightside}>
                    <p className={styles.about__text}>
                    I am a motivated, goal-oriented and responsible person. I always strive for personal development and constantly improve my skills.
                    </p>
                    <p className={styles.about__text}>
                    I have a high level of organization and the ability to work under pressure. I am able to manage my time and tasks effectively while maintaining a high quality of work.
                    </p>
                    <p className={styles.about__text}>
                    My approach to work is characterized by great attention to detail and focus on quality. I strive to achieve the best results in my work.
                    </p>
                    <p className={styles.about__text}>
                    My personal qualities also include the ability to work in a team. I am able to listen and understand others, be tolerant and open to other people's ideas. I value cooperation and am able to work with different types of people.
                    </p>
                    <p className={styles.about__text}>
                    I have good communication skills that allow me to interact effectively with colleagues and clients. I am able to express my thoughts and ideas clearly and concisely. I am also able to resolve conflicts and find compromise solutions.
                    </p>
                </div>
            </div>
        </section>
    )
}