import React from 'react'
import * as Yup from 'yup'
import { Formik, Form, Field , ErrorMessage } from 'formik'

const Signup = () => {

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
    console.log(values)
  }

  return (
    <div>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form action="" className='border-2 border-soild border-black w-fit p-4'>
        <label htmlFor="">Username:</label>

          <Field type="text" name='username' className='border-2 border-solid border-black m-2'></Field>
          <ErrorMessage name='username' component='p' className='text-red-600'></ErrorMessage><br />

          <label htmlFor="">Email:</label>
          <Field type="email" name='email' className='border-2 border-solid border-black m-2'></Field>
          <ErrorMessage name='email' component='div' className='text-red-600'></ErrorMessage><br />

          <label htmlFor="">Password:</label>
          <Field type="Password" name='password' className='border-2 border-solid border-black m-2'></Field>
          <ErrorMessage name='password' component='div' className='text-red-600'></ErrorMessage><br />

          <button className='btn m-2' type='submit'>Signup</button>
        </Form>
      </Formik>
    </div>
  )
}

export default Signup