import React from 'react'
import * as Yup from 'yup'
// import { useFormik } from 'formik'
import { Form, Formik, Field, ErrorMessage } from 'formik'

const YupCom = () => {

    const initialValues = {
        fullName: '',
        email: '',
        password: ''
    }

    const validationSchema = Yup.object({
        fullName: Yup.string().max(15, 'Maximum 15 Character').required('Required'),
        email: Yup.string().email('Invalid email Address').required('Required'),
        password: Yup.string().required('Required')
    })

    const onSubmit = values => {
        console.log('formValue', values);
    }

    return (
        <div>
            <h1 className='heading flex justify-center '>Form with Formik in ReactApp</h1>
            
            <div className='flex h-lvh justify-center items-center'>

                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>

                    <Form className='bg-gray-500 flex flex-col p-12' >

                        <label htmlFor="fullName">FullName</label>
                        <Field className='mb-6 p-2' type="text" name="fullName" id="fullName"/>
                        <ErrorMessage name='fullname'></ErrorMessage>

                        <label htmlFor="email">Email</label>
                        <Field className='mb-6 p-2' type="email" name="email" id="email"/>
                        <ErrorMessage name='email'></ErrorMessage>

                        <label htmlFor="password">Password</label>
                        <Field className='mb-6 p-2' type="password" name="password" id="password"/>
                        <ErrorMessage name='password'></ErrorMessage>

                        <button type="submit" className='bg-purple-600 text-white p-2'>Submit</button>

                    </Form>

                </Formik>

            </div>
        </div>
    )
}

export default YupCom