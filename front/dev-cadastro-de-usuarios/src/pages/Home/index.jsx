import './style.css'
import Trash from '../../assets/trash.svg'
import api from '../../services/api';
import { useEffect, useState, useRef} from 'react';

function Home() {
  const [user, setUser] = useState([])

  const inputName = useRef()
  const inputEmail = useRef()
  const inputAge = useRef()

  async function getUsers() {
    const usersApi = await api.get('/usuarios') 

    setUser(usersApi.data)
  }

  async function createUsers() {
    await api.post('/usuarios', {
      name: inputName.current.value,
      email: inputEmail.current.value,
      age: inputAge.current.value
    }) 

    getUsers()
  }

  async function deleteUsers(id) {
    await api.delete(`/usuarios/${id}`)
    getUsers()
  }


  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className='container'>   
      <form action="">
        <h1>Cadastro de Usuário</h1>
        <input type="text" placeholder='Nome' name='nome' ref={inputName}/>
        <input type="email" placeholder='Email' name='email' ref={inputEmail}/>
        <input type="number" placeholder='Idade' name='idade' ref={inputAge}/>
        <button type='button' onClick={createUsers}>Cadastrar</button>
      </form>
      
      {user.map((user) => (
          <div key={user.id} className='information' >
            <div className='info-user'>
              <p>Nome: <span>{user.name}</span></p>
              <p>Email: <span>{user.email}</span></p>
              <p>Idade: <span>{user.age}</span></p> 
            </div>
            <div className='info-button' onClick={() => deleteUsers(user.id)}>
              <button><img src={Trash} alt="Trash" /></button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Home