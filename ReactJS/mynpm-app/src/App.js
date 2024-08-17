import logo from './logo.svg';
import './App.css';
import { CardThree } from './Component/Card';
import Compo from './Component/Compo';
import { TodoList } from './Component/Compo';
import { TodoList1 } from './Component/Compo';
import { TodoList2 } from './Component/Compo';

function App() {
  return (
    <div className="App">
      {/* <CardThree/> */}
      <Compo/>
      <TodoList/>
      <TodoList1/>
      <TodoList2/>
    </div>
  );
}

export default App;
