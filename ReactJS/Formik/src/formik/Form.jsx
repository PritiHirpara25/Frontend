import React from 'react'
import { useFormik } from 'formik'

const Form = () => {

    const initialValues = {
        fullName: '',
        email: '',
        password: ''
    }

    const onSubmit = values => {
        console.log('formValue', values);
    }

    const validate = values => {
        const errors = {}
        if (!values.fullName) {
            errors.fullName = 'Required'
        }
        if (!values.email) {
            errors.email = 'Required'
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email = 'Invalid email address';
        }
        if (!values.password) {
            errors.password = 'Required'
        }
        return errors
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })


    return (
        // <div>
        //     <h1 className='heading'>Form with Formik in ReactApp</h1>
        //     <div className='flex h-lvh justify-center items-center'>
        //         <form className='bg-gray-500 flex flex-col p-12' onSubmit={heandleSubmit}>
        //             <label htmlFor="fullName">FullName</label>
        //             <input className='mb-6 p-2' type="text" name="fullName" id="fullName" onChange={(e) => {
        //                 setFormData = { ...setFormData, fullName: e.target.value }
        //                 console.log(setFormData);

        //             }} />
        //             <label htmlFor="email">Email</label>
        //             <input className='mb-6 p-2' type="email" name="email" id="email" onChange={(e) => {
        //                 setFormData = { ...setFormData, email: e.target.value }
        //                 console.log(setFormData);

        //             }} />
        //             <label htmlFor="password">Password</label>
        //             <input className='mb-6 p-2' type="password" name="password" id="password" onChange={(e) => {
        //                 setFormData = { ...setFormData, password: e.target.value }
        //                 console.log(setFormData);

        //             }} />
        //             <button type="submit" className='bg-purple-600 text-white p-2'>Submit</button>
        //         </form>
        //     </div>
        // </div>

        <div>
            <h1 className='heading flex justify-center '>Form with Formik in ReactApp</h1>
            <div className='flex h-lvh justify-center items-center'>
                <form className='bg-gray-500 flex flex-col p-12' onSubmit={formik.handleSubmit}>
                    <label htmlFor="fullName">FullName</label>
                    <input className='mb-6 p-2' type="text" name="fullName" id="fullName" onChange={formik.handleChange} />
                    {formik.errors.fullName ? <div>{formik.errors.fullName}</div> : null}
                    
                    <label htmlFor="email">Email</label>
                    <input className='mb-6 p-2' type="email" name="email" id="email" onChange={formik.handleChange} />
                    {formik.errors.email ? <div>{formik.errors.email}</div> : null}

                    <label htmlFor="password">Password</label>
                    <input className='mb-6 p-2' type="password" name="password" id="password" onChange={formik.handleChange} />
                    {formik.errors.password ? <div>{formik.errors.password}</div> : null}

                    <button type="submit" className='bg-purple-600 text-white p-2'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Form