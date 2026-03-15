
import { Suspense } from 'react';
import './App.css'
import Baller from './baller';
import Counter from './counter'
import Batsman from './player';
import Users from './users';
import Posts from './posts';

// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
// const fetchPosts = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());
const fetchPosts = async()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}

function App() {
  
  function handleclick(){
    alert('Clicked button')
  }

  const CallPosts = fetchPosts();


  return (
    <div>
      <h3>React Exploring</h3>

      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}

      <Suspense fallback={<h3>Loading...</h3>}>
        <Posts CallPosts={CallPosts}></Posts>
      </Suspense>

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
