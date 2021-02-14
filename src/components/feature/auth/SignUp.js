import { Formik, Field, Form, ErrorMessage} from 'formik'
import styles from '../../../assets/css/modules/inputform.module.css'


const validateValues = (values) =>{
    let error = {} 
    if(!values.username) error.username = '*required' ; 
    if(!values.password) error.password = '*required' ; 
    if(!values.name) error.name = '*required' ; 
    if(!values.email) error.email = '*required' ;
    return error;

}

export default function SignUp() {
    return (
        <div>
            <Formik
                initialValues = {{name:'', email:'', username:'' , password : '', githubLink:'' }}
                validate = {validateValues}
                onSubmit = {
                        (values, {setSubmitting}) =>{
                            setTimeout( ()=>{
                                
                                fetch ('https://stc-mgmt-portal.herokuapp.com/user/signup', {
                                    method:'POST',
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify(values)
                                }).then(res => res.json())
                                .then(({message}) => alert(message, "Please Login with your credentials"))
                                setSubmitting(false);
                            }, 2000)
                    }
                }
            >
                <Form className={styles.form}>
                    <div className={styles.element}>
                        <label htmlFor="name">Full Name</label>
                        <Field name="name" type="text" />
                        <span ><ErrorMessage name="name" /></span>
                    </div>
                    <div className={styles.element}>
                        <label htmlFor="email">Email</label>
                        <Field name="email" type="email" />
                        <span ><ErrorMessage name="email" /></span>
                    </div>
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
                    <div className={styles.element}>
                        <label htmlFor = "githubLink"> Github Link</label>
                        <Field name="githubLink" type="text" />
                        <span><ErrorMessage name="githubLink" /></span>
                    </div>
                    <button type="submit">Sign Up</button>
                </Form>
            </Formik>
        </div>
    )
}