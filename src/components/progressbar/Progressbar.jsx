import styles from './Progressbar.module.css'

export default function Progressbar(props){
    return(
        <div className={styles.progressbar__wrapper}>
            <img src={props.src} alt="" />
            <div className={styles.overall}>
                <div className={props.progress}></div>
            </div>
            <p className={styles.progress__count}>{props.name}</p>
        </div>
    );
}