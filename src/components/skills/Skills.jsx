import styles from './Skills.module.css'
import Heading from '../H2'
import Progressbar from '../progressbar/Progressbar';
import html from '../progressbar/html5.png'
import css from '../progressbar/css3.png'
import js from '../progressbar/javascript.png'
import react from '../progressbar/react.png';
import figma from '../progressbar/figma.png';
import ps from '../progressbar/ps.png';
import Properties from '../properties/Properties';
import fast from '../properties/fast.png'
import adaptive from '../properties/adaptive.png'

export default function Skills(){
    return(
        <section className={styles.skills__section}>
            <Heading name='Skills' class={styles.h2}></Heading>
            <div className={styles.skills__section__content}>
                <div className={styles.leftside}>
                    <Progressbar src={html} name='90%' progress={styles.ninety}></Progressbar>
                    <Progressbar src={css} name='90%' progress={styles.ninety}></Progressbar>
                    <Progressbar src={js} name='40%' progress={styles.fourty}></Progressbar>
                    <Progressbar src={react} name='20%' progress={styles.twenty}></Progressbar>
                    <Progressbar src={figma} name='50%' progress={styles.fifty}></Progressbar>
                    <Progressbar src={ps} name='50%' progress={styles.fourty}></Progressbar>
                </div>
                <div className={styles.rightside}>
                    <Properties src={fast} name='Fast performance. ' content='Fast loading of the site and media content on it is one of the priorities of my work'></Properties>
                    <Properties src={adaptive} name='Adaptive design. ' content='I create cross-platform projects. This gives you a comfortable experience on any device'></Properties>
                    <Properties src={fast} name='Intuitive. ' content='Lightweight design, intuitive, user-friendly interface'></Properties>
                    <Properties src={fast} name='Dynamic interfaces. ' content="Say no to static elements. I create a variety of animations and interactive elements on the website to attract the user's attention"></Properties>
                </div>
            </div>
        </section>
    );
}