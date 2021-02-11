import styles from '../../../assets/css/modules/Content.module.css'

export default function index({children}) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}
