
import './App.css'
import Baller from './baller';
import Counter from './counter'
import Batsman from './player';

function App() {
  
  function handleclick(){
    alert('Clicked button')
  }


  return (
    <div>
      <h3>React Exploring</h3>

      <Baller></Baller>

      <Batsman></Batsman>

      <Counter></Counter>
      {/* <button onClick={handleclick}>Click me</button>
      <button onClick={()=> alert("clicked")}>Click me</button>
      <button onClick={clickhandler}>Click me</button> */}
    </div>
  )
}

export default App
