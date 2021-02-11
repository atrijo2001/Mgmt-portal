import styles from '../../../assets/css/modules/header.module.css'

export default function index({children}) {
    return (
        <div className={styles.header}>
            {children}
        </div>
    )
}
