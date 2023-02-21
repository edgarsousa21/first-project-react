// App.js:=======>

import React, { useState, useEffect } from 'react'

import Axios from 'axios'
import Avatar from '../../assets/avatar.svg'
import Arrow from '../../assets/arrow.svg'
import Trash from '../../assets/trash.svg'
import { Container, Image, ContainerItems, H1, Button, User } from './styles' //sem default escreve dessa forma

//JSX - Misturar html com javascript
// { id: Math.random(), name: "Edgar", age: 41 },
// { id: Math.random(), name: "Sandra", age: 53 },
function Users() {
  const [users, setUsers] = useState([]) // ASSIM CRIAMOS UM ESTADO NO REACT 

  //=====================================================================================================================================================================
  /*
//REACT HOOK => USEEFFECT (Efeito Colateral) // () =>{}

A função é chamada quando (2 Condições): 
A minha aplicação inicia. (A página carregou useEffect é chamado!).
Quando um estado que está no array de dependênciado useEffect é alterado.
*/
  useEffect(() => {

    async function fetchUsers() {

      const { data: newUsers } = await Axios.get("http://localhost:3001/users")

      setUsers(newUsers)
    }

    fetchUsers()

  }, [])

  //=====================================================================================================================================================================

  async function deleteUser(userId) {

    await Axios.delete(`http://localhost:3001/users/${userId}`)

    const newUsers = users.filter(user => user.id !== userId)

    setUsers(newUsers)

  }


  return (
    <Container>
      <Image alt='logo-imagem' src={Avatar} />
      <ContainerItems>
        <H1>Usuários</H1>

        <ul>
          {users.map(user => (
            <User key={user.id}>
              <p>{user.name}</p>  <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt='lata-de-lixo' />
              </button>
            </User>
          ))
          }
        </ul>

        <Button>
          <img alt='seta' src={Arrow} /> Voltar
        </Button>

      </ContainerItems>
    </Container>

  )

}

export default Users

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