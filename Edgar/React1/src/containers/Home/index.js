// App.js:=======>

import React, { useState, useRef } from 'react'

import Axios from 'axios'
import People from '../../assets/people.svg'
import Arrow from '../../assets/arrow.svg'
import { Container, Image, ContainerItems, H1, InputLabel, Input, Button } from './styles' //sem default escreve dessa forma

//JSX - Misturar html com javascript
// { id: Math.random(), name: "Edgar", age: 41 },
// { id: Math.random(), name: "Sandra", age: 53 },
function App() {
  const [users, setUsers] = useState([]) // ASSIM CRIAMOS UM ESTADO NO REACT
  const inputName = useRef()
  const inputAge = useRef()

  async function addNewUser() {
    const { data: newUser } = await Axios.post("http://localhost:3001/users", { 
      name: inputName.current.value, 
      age: inputAge.current.value, 
    })
    setUsers([...users, newUser]) 
    // console.log(inputName.current.value)
    // console.log(inputAge.current.value) 
        
  }

//=====================================================================================================================================================================


  return (
    <Container>
      <Image alt='logo-imagem' src={People} />
      <ContainerItems>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder='Nome' />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder='Idade' />

        <Button onClick={addNewUser}>
          Cadastrar <img alt='seta' src={Arrow} />
        </Button>
      </ContainerItems>
    </Container>

  )

}

export default App

/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

*/