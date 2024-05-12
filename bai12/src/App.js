import logo from './logo.svg';
import './App.css';
import Vdu1 from './components/Vdu1';
import Vdu2 from './components/Vdu2';
import Vdu3 from './components/Vdu3';
import ListUser from './components/ListUser';
import A from './components/A';

function App() {
  // const numbers = [1,2,3,4,5]
  // const listItem = numbers.map((number)=>
  //   <li>{number}</li>
  // )
  // const arr = [1,2,3,4,5]
  const arr = ["iphone1","iphone2","iphone3","iphone4"];
  const obj = {
    name:"baovic",
    age:18
  }
  return (
    <div className="App">
      {/* <Vdu1 xx={arr}/> */}
      {/* <Vdu2 arr={arr}/> */}
      {/* <Vdu3 obj={obj}/> */}
      {/* <ListUser/> */}
      <A/>
    </div>
  );
}

export default App;
