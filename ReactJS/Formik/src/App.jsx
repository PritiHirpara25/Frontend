import { useState } from 'react'
import Form1 from './formik/Form1'
import Form from './formik/Form'
import Validateschema from './formik/validateschema'
import YupCom from './formik/YupCom'
import StudentsDetails from './Task/StudentsDetails'
import RegistrationForm from './Task/RegistrationForm'
import SignupForm from './Task/SignupForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Formik */}
       {/* <Form1/> */}
       {/* <Form/> */}
       {/* <Validateschema/> */}
       {/* <YupCom/> */}
       {/* <StudentsDetails/> */}
       {/* <RegistrationForm/> */}
       <SignupForm/>
    </>
  )
}

export default App
