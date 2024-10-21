import React from 'react'
import * as Yup from 'yup'
import { Formik, Form, Field , ErrorMessage } from 'formik'

const Login = () => {

  const initialValues = {
    email: '',
    password: ''
  }

  const validationSchema = Yup.object({
     email: Yup.string().email('Invalid Email').required('Required'),
     password: Yup.string().min(5).max(12, 'Password must be at least 12 Character').required('Required')
   }
  )
    

  const handleSubmit = (values) => {

  }

  return (
    <div>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onsubmit={handleSubmit}>
        <Form action="" className='border-2 border-soild border-black w-fit p-4'>
          <label htmlFor="">Email:</label>
          <Field type="email" name='email' className='border-2 border-solid border-black m-2'></Field>
          <ErrorMessage name='email' component='div' className='text-red-600'></ErrorMessage><br />
          <label htmlFor="">Password:</label>
          <Field type="Password" name='password' className='border-2 border-solid border-black m-2'></Field>
          <ErrorMessage name='password' component='div' className='text-red-600'></ErrorMessage><br />
          <button className='btn m-2' type='submit'>Login</button>
        </Form>
      </Formik>
    </div>
  )
}

export default Login