import React, { useState, createContext, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks =['Anwar','Jafor','Alomgir','Salman']
  const Products =[
    {name:'Photoshop',price:'$90.99'},
    {name:'Illustrator',price:'60.99'},
    {name:'PDF Reader',price:'$6.99'}     
              ]
        const productNames =Products.map( p=>p.name)
          
       ; 
      
      
        console.log(productNames)   
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person </p>
        <Users></Users>
        <Counter></Counter>
        <ul>
          {Products.map(p=><li> {p.name}</li>) }
        </ul>
        {
          Products.map(p =><Product Prp ={p}></Product>)
        }
        <Person name='Munna' job='football'></Person> 
        <Person name='Masum' job='Dorshok'></Person>
      </header>
    </div>

  );
}
function Counter(){
    const [count, setCount]= useState(10);
     
    return(
      <div>
        <h1>count:{count}</h1>
        <button onMouseMove={()=> setCount(count-1)}>Decrease</button>
        <button onClick={()=> setCount(count+1)}>Increase</button>
      </div>
    )
}
function Users(){
  const [users,setUsers] =useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>{setUsers(data)})
  },[])
  return(
    <div>
    <h3>Dynamic Users:{users.length}</h3>
     <ul>
       {
         users.map(user=><li>{user.name}</li>)
       }
     </ul>
    </div>
  )
}
function Product(props){
  const ProductStyle={
    border:'1px solid gray',
    borderRadius:"5px",
    backgroundColor:"lightgray",
    height:'200px',
    width:'200px',
    float:'left'
  
  }
  const {name,price} = props.Prp;
  console.log(name,price)
  return (
    <div style={ProductStyle}>
      <h2>{name}</h2>
      <h3>{price}</h3>
      <button>Buy now</button>
    </div>
  )
}
function Person(props){
  const PersonStyle={
    border :"2px solid red",
    width:"400px",
    margin:"10px"
  }
  console.log(props)
  // {border:"2px solid red",margin:"10px"}
  return (
        <div style={PersonStyle}>
          <h1>My Name:{props.name} </h1>
          <h3>My Profession: {props.job}</h3> 
      </div>)
}
export default App;
