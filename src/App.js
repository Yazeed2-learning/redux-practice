import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {decrement, increment} from './actions'


function App() {
  const {counter, isLogged} = useSelector(state => state)
  const dispatch = useDispatch(); 
  return (
    <div className="App">
      
    <h1>Counter {counter}</h1>
    <button onClick={()=>dispatch(increment(7))} >+</button>
    <button onClick={()=>dispatch(decrement())} >-</button>
    {isLogged? 'user info :)) ':''}
    </div>
  );
}

export default App;
