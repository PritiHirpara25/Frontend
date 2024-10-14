import React from 'react'
import { useFormik } from 'formik'
import { useState, useEffect } from 'react'
// import axios from 'axios'

const Form = () => {

    const [data, setData] = useState([])

    // // const[formData , setFormData] = useState({
    // //     fullName:'',
    // //     email:'',
    // //     password:''
    // // })


    // let setFormData = {
    //     fullName: '',
    //     email: '',
    //     password: ''
    // }

    // // useEffect(() => {
    // //     let response = fetch('http://localhost:3000/formElement'  ,{
    // //         method:'POST',
    // //         setFormData : {
    // //             fullName: 'vivek',
    // //             email: 'vivek@gmail.com',
    // //             password: 'adasfsdfsf'
    // //         }
    // //     }
    // //        )
    // // } , [])

    // useEffect(() => 
    //     try(
    //         let response = axios.post('http://localhost:3000/formElement'  ,{
    //             setFormData : {
    //                 fullName: 'vivek',
    //                 email: 'vivek@gmail.com',
    //                 password: 'adasfsdfsf'
    //             }
    //         }
    //     )
    //     .catch(

    //     )
    //        )
    // ,[])



    // const heandleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log(setFormData);
    // }

    // const Product = async () => {

    // }

    useEffect(async () => {
        let response = await fetch('https://fakestoreapi.com/products')
        let data = await response.json()
        setData(data)
    }, [])






    return (
        <div>
            {/* <h1 className='heading'>Form with Formik in ReactApp</h1>
            <div className='flex h-lvh justify-center items-center'>
                <form className='bg-gray-500 flex flex-col p-12' onSubmit={heandleSubmit}>
                    <label htmlFor="fullName">FullName</label>
                    <input className='mb-6 p-2' type="text" name="fullName" id="fullName" onChange={(e) =>{
                        setFormData = {...setFormData , fullName:e.target.value}
                        console.log(setFormData);
                        
                    }}/>
                    <label htmlFor="email">Email</label>
                    <input className='mb-6 p-2' type="email" name="email" id="email" onChange={(e) =>{
                        setFormData = {...setFormData , email:e.target.value}
                        console.log(setFormData);
                        
                    }} />
                    <label htmlFor="password">Password</label>
                    <input className='mb-6 p-2' type="password" name="password" id="password" onChange={(e) =>{
                        setFormData = {...setFormData , password:e.target.value}
                        console.log(setFormData);
                        
                    }} />
                    <button type="submit" className='bg-purple-600 text-white p-2'>Submit</button>
                </form>
            </div> */}


            {/* <button onClick={Product}>Click For Product</button> */}


            <div className='flex flex-wrap justify-center'>
                {
                    data.map((item) => {
                        return (
                            <div key={item.id} className='bg-gray-400 ml-6 mb-6'>
                                <div className=" w-72 flex flex-col rounded-xl glass  min-h-72 mt-3 ">
                                    <div>
                                        <img
                                            src={item.image}
                                            alt="test"
                                            width="100"
                                            height="100"
                                            className="rounded-t-xl size-32 mx-auto"
                                        />
                                    </div>
                                    <div className="flex flex-col py-3 px-3 pb-7 rounded-b-xl ">
                                        <div className="flex flex-col justify-between">
                                            <h1 className="font-RubikBold ">{item.title}</h1>
                                            <h1 className="font-bold font-RubikBold">{item.price}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Form