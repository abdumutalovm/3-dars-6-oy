import './App.css'
import data from './data/data.json'
import { useState } from 'react'

function App() {
const [books,setBooks] = useState([])

function randomClick(e){
e.preventDefault()
const randomIndex = Math.floor(Math.random() * data.length);
const randomBook = data[randomIndex];
setBooks(randomBook);
}

  return (
    <>
<div className="container">
<div className="card mx-auto" style={{width:"18rem"}}>
<div className="card-body">
  <h5 className="card-title">Author: {books.author}</h5>
  <h6 className="card-subtitle mb-2 text-body-secondary">Country: {books.country}</h6>
  <h6 className="card-subtitle mb-2 text-body-secondary">Pages: {books.pages}</h6>
  <p className="card-text">{books.language}</p>
  <p className='card-text'>Title: {books.title}</p>
  <a href={books.link}>Wikipedia</a>
</div>
</div>
       
<button className='btn btn-success m-2 mx-auto' onClick={randomClick}>Get random book</button>
</div>
    </>
  )
}

export default App
