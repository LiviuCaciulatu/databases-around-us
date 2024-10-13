import './App.css';
import React, {useState} from 'react';

function App() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");

  function handleSubmit(e){
    e.preventDefault();
    const data = {title, author, genre};
    fetch("http://localhost:3001/api/data",{
      method: "POST",
      headers: {"Content-Type": "application/json",
    },
    body: JSON.stringify(data)
    })
    .then(response=>response.json())
    .then(response=>{
      console.log(response);
    })
    .catch(error=>{
      console.log(error);
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={e=>setTitle(e.target.value)}/>
      </label>
      <label>
        <input type="text" value={author} onChange={e=>setAuthor(e.target.value)}/>
      </label>
      <label>
        <input type="text" value={genre} onChange={e=>setGenre(e.target.value)}/>
      </label>
      <button type="submit">Submit!</button>
    </form>
  );
}

export default App;
