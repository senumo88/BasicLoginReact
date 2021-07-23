import React from 'react'
import { Link } from 'react-router-dom'

const ProtectedPage = ({ onClickLogout }) => {
  return (
    <React.Fragment>
      
      <div>
       <h1>Bienvenido {localStorage.getItem('nombre')}  {localStorage.getItem('apellido') } ! Ya te logeaste.</h1>
      </div>
      <button type='button' onClick={onClickLogout}>
        LOGOUT
      </button>
      <Link to='/'>  <h3>Intenta ir a la pagina de Log In</h3> </Link>
    </React.Fragment>
  )
}

export default ProtectedPage
