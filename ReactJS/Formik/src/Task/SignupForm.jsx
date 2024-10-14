import React from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'

const SignupForm = () => {

    const initialValues = {
        username : '',
        email : '',
        password : '',
        confirmpassword : ''
    }

    const validationSchema = Yup.object({
        username : Yup.string().min(3).max(25 , 'Username must be between 3 and 25 characters.').required('Required'),
        email : Yup .string() .email('Invalid email Address').required('Required'),
        password : Yup.string().required('Password must has at least 8 characters that include at least 1 lowercase character, 1 Uppercase character, 1 number, and 1 special character in (!@#$%^&*)'),
        confirmpassword : Yup.string().required('Please enter the password again')
    })

    const onSubmit = values => {
        console.log('formValue', values);
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

  return (
    <div className='flex justify-center'>
        <div className='shadow-lg p-9'>
        <h1 className='flex justify-center font-bold text-2xl mb-5'>Sign Up</h1>

            <form action="" onSubmit={formik.handleSubmit} validationSchema={validationSchema}>

                <label htmlFor="username" className='text-gray-400'>Username:</label><br />
                <input type="text"
                name='username' 
                id='username' 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className='border-2 border-red-700 rounded-sm'/><br />
                {formik.touched.username && formik.errors.username ? <div className='text-red-600 text-sm'>{formik.errors.username}</div> : null}

                <label htmlFor="email" className='text-gray-400'>Email:</label><br />
                <input type="email" 
                name='email' 
                id='email' 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className='border-2 border-green-700 rounded-sm'/><br />
                {formik.touched.email && formik.errors.email ? <div className='text-red-600 text-sm'>{formik.errors.email}</div> : null}

                <label htmlFor="password" className='text-gray-400'>Password:</label><br />
                <input type="password" 
                name='password' 
                id='password' 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className='border-2 border-red-700 rounded-sm' /><br />
                {formik.touched.password && formik.errors.password ? <div className='text-red-600 text-sm'>{formik.errors.password}</div> : null}

                <label htmlFor="confirmpassword" className='text-gray-400'>Confirm Password:</label><br />
                <input type="password" 
                name='confirmpassword' 
                id='confirmpassword' 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className='border-2 border-red-700 rounded-sm'
                placeholder='Reenter Your Password' /><br />
                {formik.touched.confirmpassword && formik.errors.confirmpassword ? <div className='text-red-600 text-sm'>{formik.errors.confirmpassword}</div> : null}
                
                <button type='submit' className='flex justify-center bg-blue-400 w-full mt-5 rounded-sm'>SIGN UP</button>
            </form>

        </div>
    </div>
  )
}

export default SignupForm