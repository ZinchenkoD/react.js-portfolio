import styles from './Properties.module.css'

export default function Properties(props){
    return(
        <div className={styles.properties__wrapper}>
            <img height='100px' className={styles.properties__icon} src={props.src} alt="" />
            <p className={styles.properties__content}><span className={styles.properties__title}>{props.name}</span>{props.content}</p>
        </div>
    );
}