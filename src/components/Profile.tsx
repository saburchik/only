import { Link, useLocation } from 'react-router-dom'

const Profile = () => {
  const { state } = useLocation()
  const { login }: any = state

  return (
    <>
      <h1>Здравствуйте, {login}</h1>
      <Link to='/'>Выйти</Link>
    </>
  )
}

export default Profile
