import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Profile from './components/Profile'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 2em;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  color: #000;
`

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Title>Only.</Title>
        <div style={{ height: '100%' }}>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </div>
        <div />
      </div>
    </BrowserRouter>
  )
}

export default App
