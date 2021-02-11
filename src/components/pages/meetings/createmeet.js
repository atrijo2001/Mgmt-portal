import styles from '../../src/assets/css/modules/inputform.module.css'
import styles2 from '../../src/assets/css/modules/createmeet.module.css'
import Navbar from '../../src/components/shared/Navbar'
import Content from '../../src/components/layout/Content'
import {Field, Formik, ErrorMessage, Form} from 'formik'
import Link from 'next/link'
const validateValues = (values) =>{
    let error= {};
    if(!values.displayname){
        error.displayname = '*required'
    }
    if(!values.meetname){
        error.meetname = '*required'
    }
    return error;
}

export default function joinmeet() {
    return (
        <>
            <Navbar active="meetings" />
            <Content>
                <div className={styles2.container}>
                    <h1> Enter room name</h1>
                    <Formik
                        initialValues= {{meetname: '', displayname: ''}}
                        validate = {validateValues}
                        onSubmit = {
                            (values, {setSubmitting}) =>{
                                console.log(values);
                                // fetch ('', {
                                //         method:'POST',
                                //         headers: {
                                //             'Content-Type': 'application/json',
                                //         },
                                //         body: JSON.stringify(values)
                                //     }).then(res => res.json())
                                //     .then(({message}) => alert(message, "Please Login with your credentials"))
                                    setSubmitting(false);
                            }
                        }
                    >
                        <Form className={styles.form}>
                            <div className={styles.element}>
                                <label htmlFor="meetname">Meet Name</label>
                                <Field name="meetname" type="text" />
                                <span ><ErrorMessage name="meetname" /></span>
                            </div>
                            <div className={styles.element}>
                                <label htmlFor="displayname">Display Name</label>
                                <Field name="displayname" type="displayname" />
                                <span ><ErrorMessage name="displayname" /></span>
                            </div>
                            <button type="submit">Create meeting</button>
                        </Form>
                    </Formik>
               </div>

            </Content>
        </>
    )
}