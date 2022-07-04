import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import styled from 'styled-components'
import Login from './pages/Login'
import Profile from './pages/Profile'

const App: FC = () => {
  return (
    <BrowserRouter>
      <AppDiv>
        <Title>Only.</Title>
        <Wrapper>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </Wrapper>
      </AppDiv>
    </BrowserRouter>
  )
}

export default App

const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
`
const Title = styled.h1`
  font-size: 2em;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  color: #000;
  padding-top: 2.5rem;
`
const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`
