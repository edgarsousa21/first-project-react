// App.js:=======>

//JSX - Misturar html com javascript
// { id: Math.random(), name: "Edgar", age: 41 },
// { id: Math.random(), name: "Sandra", age: 53 },

import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import Axios from 'axios'
import Avatar from '../../assets/avatar.svg'
import Arrow from '../../assets/arrow.svg'
import Trash from '../../assets/trash.svg'
import H1 from '../../components/Title'
import Button from '../../components/Button'
import ContainerItens from '../../components/ContainerItens'
import { Container, Image, User } from './styles' //sem default escreve dessa forma


function Users() {
  const [users, setUsers] = useState([]) // ASSIM CRIAMOS UM ESTADO NO REACT 

  const history = useHistory()
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

  function goBackPage() {
    history.push('/')
  }

  return (
    <Container>
      <Image alt='logo-imagem' src={Avatar} />
      <ContainerItens inBlur={true}>
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

        <Button isBack={true} onClick={goBackPage}>
          <img alt='seta' src={Arrow} /> Voltar
        </Button>

      </ContainerItens>
    </Container>

  )

}

export default Users

