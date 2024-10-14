import React from 'react'
import * as Yup from 'yup'
import { Form, Formik, Field, ErrorMessage } from 'formik'

const StudentsDetails = () => {

    const initialValues = {
        name: '',
        school: '',
        email: '',
        phone: '',
        // gender: '',
        // course: '',
        // insttituteLocation: ''
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        school: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email Address').required('Required'),
        phone: Yup.string().matches(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/ , 'Phone Number is invalid').max(10 , 'Phone should contain 10 numbers').required('Required'),
        // gender: Yup.string().required('Required'),
        // course: Yup.string().required('Required'),
        // insttituteLocation: Yup.string().required('Required')
    })

    const onSubmit = values => {
        console.log('formValue', values);
    }

    return (
        <div className='bg-gradient-to-r from-pink-500 to-purple-500 p-16 w-1/2 m-auto rounded-md'>
            <div className='bg-white p-12 rounded-3xl'>
                <h1 className='flex justify-center text-pink-500 font-bold text-2xl'>Student Details Form</h1>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    <Form>

                        <div className='flex mt-5'>
                            <div className='w-fit flex flex-col'>
                                <label htmlFor="name" className='font-semibold'>Name</label>
                                <Field type="text" id='name' name='name' className='border-2 border-solid border-black w-64' />
                                <div className='h-4'>
                                    <ErrorMessage name="name" >
                                        {msg => <div className='text-red-500 font-semibold'>{msg}</div>}
                                    </ErrorMessage>
                                </div>
                                <label htmlFor="school" className='font-semibold'>School</label>
                                <Field type="text" id='school' name='school' className='border-2 border-solid border-black w-64' />
                                <div className='h-4'>
                                    <ErrorMessage name="school" >
                                        {msg => <div className='text-red-500 font-semibold'>{msg}</div>}
                                    </ErrorMessage>
                                </div>
                            </div>

                            <div className='w-fit flex flex-col ml-8'>
                                <label htmlFor="email" className='font-semibold'>Email</label>
                                <Field type="email" id='email' name='email' className='border-2 border-solid border-black w-64' />
                                <div className='h-4'>
                                    <ErrorMessage name="email" >
                                        {msg => <div className='text-red-500 font-semibold'>{msg}</div>}
                                    </ErrorMessage>
                                </div>
                                <label htmlFor="phone" className='font-semibold'>Phone</label>
                                <Field type="tel" id='phone' name='phone' className='border-2 border-solid border-black w-64' />
                                <div className='h-4'>
                                    <ErrorMessage name="phone" >
                                        {msg => <div className='text-red-500 font-semibold'>{msg}</div>}
                                    </ErrorMessage>
                                </div>
                            </div>

                        </div>

                        <div className='flex justify-around -ml-12 mt-6'>

                            <div className=''>
                                <label htmlFor="gender" className='font-semibold'>Gender</label><br />
                                <input type="radio" name='gender' id='gender' className='accent-pink-500' />
                                <label htmlFor="male">Male</label> <br />
                                <input type="radio" name='gender' id='gender' className='accent-pink-500' />
                                <label htmlFor="female">Female </label>
                                <div className='h-4'>
                                    <ErrorMessage name="gender" >
                                        {msg => <div className='text-red-500 font-semibold'>{msg}</div>}
                                    </ErrorMessage>
                                </div>
                            </div>
                            
                            <div>
                                <label htmlFor="course" className='font-semibold'>Course</label><br />
                                <input type="checkbox" id='course' name='course' className='accent-pink-500' />
                                <label htmlFor="it">It</label><br />
                                <input type="checkbox" id='course' name='course' className='accent-pink-500' />
                                <label htmlFor="hrm">HRM</label><br />
                                <input type="checkbox" id='course' name='course' className='accent-pink-500' />
                                <label htmlFor="english">English</label><br />
                                <input type="checkbox" id='course' name='course' className='accent-pink-500' />
                                <label htmlFor="graphicdesign">Graphic Design</label>
                                <div className='h-4'>
                                    <ErrorMessage name="course" >
                                        {msg => <div className='text-red-500 font-semibold'>{msg}</div>}
                                    </ErrorMessage>
                                </div>
                            </div>
                            
                            <div>
                                <label htmlFor="institutelocation" className='font-semibold'>Institute Location</label><br />
                                <select name="institutelocation" id="institutelocation" className='border-2 border-solid border-black rounded-md'>
                                    <option value="canada">Canada</option>
                                    <option value="america">America</option>
                                    <option value="london">London</option>
                                    <option value="france">France</option>
                                </select>
                                <div className='h-4'>
                                    <ErrorMessage name="course" >
                                        {msg => <div className='text-red-500 font-semibold'>{msg}</div>}
                                    </ErrorMessage>
                                </div>
                            </div>
                        
                        </div>
                        
                        <div>
                            <button type='submit' className='bg-pink-500 p-1.5 rounded-md text-white'>Submit</button>
                        </div>
                    
                    </Form>
                </Formik>
            </div>
        </div >
    )
}

export default StudentsDetails