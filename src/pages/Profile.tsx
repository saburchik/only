import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const Profile = () => {
  const { state } = useLocation()
  const { login }: any = state

  return (
    <Wrapper>
      <Title>
        Здравствуйте, <b>{login}</b>
      </Title>
      <Link to='/'>
        <Button>Выйти</Button>
      </Link>
    </Wrapper>
  )
}

export default Profile

const Button = styled.button`
  width: 200px;
  height: 60px;
  background: #f5f5f5;
  color: #000;

  &:hover {
    background: #dcdcdc;
  }
`
const Title = styled.h2`
  font-size: clamp(1.5rem, 7vw, 2rem);
  font-weight: 400;
  text-align: center;
`
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`
