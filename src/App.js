import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [ users, setUser] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(data => setUser(data.results))
  }, [])
  return (
    <div>
      <header className="App-header">
        {
          users.map(user => <RandomUser properties={user}></RandomUser>)
        }
      </header>
    </div>
  );
}

function RandomUser(props) {
  const { name, location, email, picture } = props.properties;
  console.log(picture);
  const userImage = {
    position: "relative",
    background: "#fff",
    padding: "5px",
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    marginBottom: "30px",
    border: "1px solid rgba(0,0,0,.25)",
    left: "50%",
    transform: "translateX(-50%)"
  }
  const liStyle = {
    display: "block",
    width: "40px",
    height: "48px",
    float: "left",
    margin: "20px",
  }
  return (
    <div>
      <div style={userImage}>
        <img style={{width: "150px", borderRadius: "50%"}} src={picture.large}/>
      </div>
      <p>Hi, My name is</p>
      <h3>{name.title} {name.first} {name.last}</h3>
      <p><small>{location.state}, {location.city}</small></p>
      <p><small>Email: {email}</small></p>
    </div>
  )
}

export default App;
