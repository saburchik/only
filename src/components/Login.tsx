import styled from 'styled-components'
import { useForm, SubmitHandler } from 'react-hook-form'
import { LoginField } from '../app.interface'
import { FC, useState } from 'react'
import { Navigate } from 'react-router-dom'
import Input from './Input'

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Title = styled.h5`
  width: max-content;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 400;
`

const Login = () => {
  // const [blur, setBlur] = useState(false)
  const [success, setSuccess] = useState(false)
  const [login, setLogin] = useState('')
  const [isUser, setIsUser] = useState(false)
  const [submit, setSubmit] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginField>({
    mode: 'onSubmit',
  })

  const db = {
    id: 1101,
    login: 'steve.jobs@example.com',
    password: 'password',
    rememberMe: false,
  }

  const onSubmit: SubmitHandler<LoginField> = (formData) => {
    setSubmit(true)
    console.log(formData)
    setTimeout(() => {
      if (db.login === formData.login && db.password === formData.password) {
        setLogin(db.login)
        setSuccess(true)
        reset()
        setSubmit(false)
      } else {
        setIsUser(true)
        setSubmit(false)
      }
    }, 1000)
  }

  return (
    <>
      {success ? (
        <Navigate to='/profile' state={{ login: login }} />
      ) : (
        <Wrapper>
          {isUser ? <div>Пользователя {login} не существует</div> : null}
          <form className='form' onSubmit={handleSubmit(onSubmit)}>
            <Input
              register={register}
              errors={errors}
              title='Логин'
              name='login'
              type='text'
            />
            <Input
              register={register}
              errors={errors}
              title='Пароль'
              name='password'
              type='password'
              required
            />
            <label className='form__radio'>
              <input {...register('rememberMe')} type='checkbox' />
              <Title>Запомнить меня</Title>
            </label>
            <button
              style={
                submit
                  ? { background: '#bababa', color: '#ededed', cursor: 'auto' }
                  : {}
              }
              disabled={submit ? true : false}
            >
              Войти
            </button>
          </form>
        </Wrapper>
      )}
    </>
  )
}

export default Login
