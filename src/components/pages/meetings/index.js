import styles from '../../src/assets/css/modules/meetings.module.css'
import Navbar from '../../src/components/shared/Navbar'
import Content from '../../src/components/layout/Content'
import Link from 'next/link'

export default function index() {
    return (
        <>
            <Navbar active="meetings" />
            <Content>
                <div className={styles.container1}>
                    <h1> Fast, easy and secure meetings</h1>
                    <p> Description will be filled here</p>
                    <div className={styles.buttons}>
                        <Link href='/meetings/joinmeet'><button>Join Meeting</button></Link>
                        <Link href='/meetings/createmeet'><button> Create meeting</button></Link>
                    </div>
                </div>
                <div className={styles.container2}>
                    illustration
                </div>
            </Content>
        </>
    )
}
