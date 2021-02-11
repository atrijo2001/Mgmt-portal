import Header from '../layout/Header'
import {useState} from 'react'
import LoginForm from '../feature/auth/Login'
import SignUpForm from '../feature/auth/SignUp'
import styles from '../../assets/css/modules/LandingPage.module.css'


export default function LandingPage() {
    const [flag, setFlag] = useState('signup')
    return (
        <>
            <Header/>
            <div className={styles.container}>
                <section className={styles.intro}>
                    insert Image here
                </section>
                <section className={styles.auth}>
                    <button
                    onClick={(e)=>{ 
                        e.preventDefault();
                        setFlag("signup")}}
                    >
                    Sign Up</button>
                    <button
                    onClick={(e)=>{ 
                        e.preventDefault();
                        setFlag("login")}}
                    >
                    Login</button>
                    {
                        flag === "login"
                        ?   <LoginForm />
                        :   <SignUpForm />
                    }
                </section>
            </div>
        </>
        
    )
}

