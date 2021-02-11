import styles from '../../src/assets/css/modules/projects.module.css'
import Navbar from '../../src/components/shared/Navbar'
import Content from '../../src/components/layout/Content'

export default function index() {
    return (
        <>
            <Navbar active="projects" />
            <Content>
                projects
            </Content>
        </>
    )
}
