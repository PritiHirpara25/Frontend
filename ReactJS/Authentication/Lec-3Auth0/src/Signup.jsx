import React from 'react'
import * as Yup from 'yup'
import { Formik, Form, Field , ErrorMessage } from 'formik'
import { useNavigate } from 'react-router-dom'
import { formDataFromLocalStorage } from './Auth/Auth'

const Signup = () => {

  const navigate = useNavigate();

  const initialValues = {
    username:'',
    email: '',
    password: ''
  }

  const validationSchema =Yup.object({
    username:Yup.string().required('Required'),
    email: Yup.string().email('Invalid Email').required('Required'),
    password: Yup.string().min(5).max(12, 'Password must be at least 12 Character').required('Required')
  }) 

  const handleSubmit = (values) => {
    formDataFromLocalStorage(values)
    navigate('/login')
    console.log(values)
  }

  return (
    <div className='flex justify-center items-center mt-52'>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form action="" className='border-4 border-soild border-teal-700 w-fit p-6 bg-orange-200'>
        <label htmlFor="">Username:</label>

          <Field type="text" name='username' className='m-4 p-1'></Field>
          <ErrorMessage name='username' component='div' className='text-red-600'></ErrorMessage><br />

          <label htmlFor="">Email:</label>
          <Field type="email" name='email' className='m-4 p-1'></Field>
          <ErrorMessage name='email' component='div' className='text-red-600'></ErrorMessage><br />

          <label htmlFor="">Password:</label>
          <Field type="Password" name='password' className='m-4 p-1'></Field>
          <ErrorMessage name='password' component='div' className='text-red-600'></ErrorMessage><br />

          <button className='btn m-4 text-orange-200' type='submit'>Signup</button>
        </Form>
      </Formik>
    </div>
  )
}

export default Signup