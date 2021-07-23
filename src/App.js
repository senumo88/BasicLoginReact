import './App.css'

import React, { useState } from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import { Redirecting, ProtectedRoute } from './components'
import { LoginPage, PublicPage, ProtectedPage, NotFoundPage } from './pages'

const App = () => {
  const token = localStorage.getItem('token')
  const [isAuthenticated, setIsAuthenticated] = useState(
    token && token.length > 0
  )

  const onClickLogout = (e) => {
    setIsAuthenticated(false)
    localStorage.clear()
  }
  const onClickAuthenticateButton = (data,e) => {
    console.log("Bienvenido "+data.apellido+" "+data.nombre );
    localStorage.setItem('token', 'Bearer Valid_TOKEN');
    localStorage.setItem('nombre', data.nombre);
    localStorage.setItem('apellido', data.apellido);
    setIsAuthenticated(true)
  }
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'  render={(props) => (
              <React.Fragment>
                {isAuthenticated ? (
                  <Redirecting to='/dashboard' />
                ) : (
                  <LoginPage
                    {...props}
                    onClickAuthenticateButton={onClickAuthenticateButton}
                  />
                )}
              </React.Fragment>
            )}
          />
          <Route exact path='/' component={PublicPage} />
          <ProtectedRoute path='/dashboard' component={ProtectedPage}
            componentProps={{ onClickLogout }}
            isAuthenticated={isAuthenticated}
          />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
