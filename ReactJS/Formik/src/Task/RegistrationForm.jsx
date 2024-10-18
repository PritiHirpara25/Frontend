import React from 'react'
import * as Yup from 'yup'
import { Form, Formik, Field, ErrorMessage } from 'formik'

const RegistrationForm = () => {

    const initialValues = {
        userid: '',
        password: '',
        name: '',
        address: '',
        // country: '',
        zipcode: '',
        email: '',
        // sex: '',
        // language: '',
        about: ''
    }

    const validationSchema = Yup.object({
        userid: Yup.string().required('Required and must be of length 5 to 12'),
        password: Yup.string().required('Required'),
        name: Yup.string().required('Required'),
        address: Yup.string().required('Required'),
        // country: Yup.string().required('Required'),
        zipcode: Yup.number().required('Required'),
        email: Yup.string().email('Invalid email Address').required('Required'),
        // sex: Yup.string().required('Required'),
        // language: Yup.string().required('Required'),
        about: Yup.string().required('Required')
    })

    const onSubmit = values => {
        console.log('formValue', values);
    }

    return (
        <div className='border-2 border-solid border-black w-fit p-5'>
            <h1 className='flex justify-center text-2xl font-bold mb-5'>Registration Form</h1>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form action="">
                    <label htmlFor="userid">User id:</label>
                    <Field type="text" name='userid' id='userid' className='border-2 border-solid w-40' /><br />
                    <div className=''>
                        <ErrorMessage name="userid" >
                            {msg => <div className='text-red-500 font-semibold'>{msg}</div>}
                        </ErrorMessage>
                    </div>

                    <label htmlFor="password">Password:</label>
                    <Field type="password" name='password' id='password' className='border-2 border-solid w-40' /><br />
                    <div className=''>
                        <ErrorMessage name="password" >
                            {msg => <div className='text-red-500 font-semibold'>{msg}</div>}
                        </ErrorMessage>
                    </div>

                    <label htmlFor="name">Name:</label>
                    <Field type="text" name='name' id='name' className='border-2 border-solid w-40' /><br />
                    <div className=''>
                        <ErrorMessage name="name" >
                            {msg => <div className='text-red-500 font-semibold'>{msg}</div>}
                        </ErrorMessage>
                    </div>

                    <label htmlFor="address">Address:</label>
                    <Field type="address" name='address' id='address' className='border-2 border-solid w-40' /><br />
                    <div>
                        <ErrorMessage name="address" >
                            {msg => <div className='text-red-500 font-semibold'>{msg}</div>}
                        </ErrorMessage>
                    </div>

                    <label htmlFor="address">Country:</label>
                    <select name="country" id="country">
                        <option value="france">France</option>
                        <option value="Grice">Grice</option>
                        <option value="paris">Paris</option>
                        <option value="filipines">Filipines</option>
                    </select><br />
                    <div>
                        <ErrorMessage name="country" >
                            {msg => <div className='text-red-500 font-semibold'>{msg}</div>}
                        </ErrorMessage>
                    </div>

                    <label htmlFor="zipcode">ZIP Code:</label>
                    <Field type="number" name='zipcode' id='zipcode' className='border-2 border-solid w-40' /><br />
                    <div className=''>
                        <ErrorMessage name="zipcode" >
                            {msg => <div className='text-red-500 font-semibold'>{msg}</div>}
                        </ErrorMessage>
                    </div>

                    <label htmlFor="email">Email:</label>
                    <Field type="email" name='email' id='email' className='border-2 border-solid w-40' /><br />
                    <div className=''>
                        <ErrorMessage name="email" >
                            {msg => <div className='text-red-500 font-semibold'>{msg}</div>}
                        </ErrorMessage>
                    </div>

                    <label htmlFor="sex">Sex:</label>
                    <input type="radio" name='sex' id='sex' />Male
                    <input type="radio" name='sex' id='sex' />Female <br />
                    <div className=''>
                        <ErrorMessage name="sex" >
                            {msg => <div className='text-red-500 font-semibold'>{msg}</div>}
                        </ErrorMessage>
                    </div>

                    <label htmlFor="language">Language:</label>
                    <input type="checkbox" name='language' id='language' />English
                    <input type="checkbox" name='language' id='language' />Non-English <br />
                    <div className=''>
                        <ErrorMessage name="language" >
                            {msg => <div className='text-red-500 font-semibold'>{msg}</div>}
                        </ErrorMessage>
                    </div>

                    <label htmlFor="about">About:</label>
                    <textarea name="about" id="about" cols='30' rows='5' className='border-2 border-solid'></textarea><br />
                    <div className=''>
                        <ErrorMessage name="about" >
                            {msg => <div className='text-red-500 font-semibold'>{msg}</div>}
                        </ErrorMessage>
                    </div>

                    <button type='submit' className='bg-gray-400 p-1.5 rounded-xl border-1 border-solid'>Submit</button>

                </Form>
            </Formik>
        </div>

    )
}

export default RegistrationForm