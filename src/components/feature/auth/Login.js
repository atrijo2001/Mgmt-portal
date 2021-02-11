import { Formik, Field, Form, ErrorMessage} from 'formik'
import styles from '../../../assets/css/modules/inputform.module.css'
import {useState} from 'react'
import {Link} from 'react-router-dom'


async function getData(values){
    const data = await fetch ('https://stc-mgmt-portal.herokuapp.com/user/login', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(values)
    })
    const dataJson = await data.json();
    console.log(dataJson);
    return dataJson
}

const validateValues = (values) =>{
    let error = {} 
    if(!values.username){
        error.username = '*required'
    }
    if(!values.password){
        error.password = '*required'
    }
    return error;
}

export default function Login() {
    const [data,setData] = useState({})
    
    return (
        <div>
            <Formik
                initialValues = {{ username:'' , password : '' }}
                validate = {validateValues}
                onSubmit = {
                    (values, {setSubmitting}) =>{
                        console.log("hello");
                        setTimeout(()=>{
                            console.log(JSON.stringify(values));
                            setData( getData(values))
                            setSubmitting(false);
                        }, 500)
                    }
                }
            >
                <Form className={styles.form}>
                    <div className={styles.element}>
                        <label htmlFor = "username"> Username</label>
                        <Field name="username" type="text" />
                        <span ><ErrorMessage name="username" /></span>
                    </div>
                    <div className={styles.element}>
                        <label htmlFor = "password"> Password</label>
                        <Field name="password" type="password" />
                        <span><ErrorMessage name="password" /></span>
                    </div>
                    <Link to='/dashboard'><button type="submit">Login</button></Link>
                </Form>
            </Formik>
        </div>
    )
}

/*
fetch ('https://stc-mgmt-portal.herokuapp.com/user/login', {
                                    method:'POST',
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify(values)
                                }).then(res => res.json())
                                .then(({Token,message}) => alert(Token))
                                */