import './App.css'
import AddExpense from './Components/AddExpense'
import ExpenseList from './Components/ExpenseList'
import ExpenseContext from './Context/ExpenseProvider'

function App() {

  return (
    <>
      {/* <ExpenseContext> */}
        <AddExpense />
        {/* <ExpenseList /> */}
      {/* </ExpenseContext> */}
    </>
  )
}

export default App

