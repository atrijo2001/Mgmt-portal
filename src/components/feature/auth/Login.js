import { Formik, Field, Form, ErrorMessage} from 'formik'
import styles from '../../../assets/css/modules/inputform.module.css'


async function getData(values){
     const data = await fetch ('https://stc-mgmt-portal.herokuapp.com/user/login', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(values)
    })
    const dataJson = await data.json();
    console.log('fetched');
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

export default function Login({setLogin}) {
    return (
        <div>
            <Formik
                initialValues = {{ username:'' , password : '' }}
                validate = {validateValues}
                onSubmit = {
                    async (values,{setSubmitting}) =>{
                            setSubmitting(true)
                            const data = await getData(values);
                            if(Object.entries(data).length === 1){
                                alert(data.message)
                                setSubmitting(false);
                            }
                            else{
                                localStorage.setItem('Token',data.Token)
                                setLogin(true);
                            }
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
                    <button type="submit">Login</button>
                </Form>
            </Formik>
        </div>
    )
}