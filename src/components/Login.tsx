import styled from 'styled-components'
import { useForm, SubmitHandler } from 'react-hook-form'
import { LoginField } from '../app.interface'
import { useState } from 'react'
import axios from '../api/api'
import { Navigate } from 'react-router-dom'

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
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
  //const [store, setStore] = useState([dataStore]);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginField>({
    mode: 'onSubmit',
  })

  const onSubmit: SubmitHandler<LoginField> = async (data) => {
    console.log(data)
    axios.get('../db.json').then((res) => {
      console.log(res)
    })
  }

  //   const loginSend = async (login, password, rememberMe) => {
  //     let res = await authAPI.login(login, password, rememberMe);
  //     if (res.data.data.userId.login === login) {
  //       alert("nice");
  //     }
  //     if (res.data.resultCode === 0) {
  //       alert("It is okay");
  //     } else {
  //       alert("It is not okay");
  //       // let messageError =
  //       //   res.data.messages.length > 0 ? res.data.messages[0] : "Some error";
  //       // dispatch(stopSubmit("login", { _error: messageError }));
  //     }
  //   };

  return (
    <>
      {success ? (
        <Navigate to='/profile' />
      ) : (
        <Wrapper>
          <form className='form' onSubmit={handleSubmit(onSubmit)}>
            <label>
              <Title>Логин</Title>
              <input
                {...register('login', { required: 'Обязательно поле' })}
                className='form__input'
                type='text'
              />
              {errors.login && (
                <Title style={{ color: 'red' }}>{errors.login.message}</Title>
              )}
            </label>
            <label>
              <Title>Пароль</Title>
              <input
                {...register('password', { required: 'Обязательное поле' })}
                className='form__input'
                type='password'
              />
              {errors.login && (
                <Title style={{ color: 'red' }}>{errors.login.message}</Title>
              )}
            </label>
            <label className='form__radio'>
              <input {...register('rememberMe')} type='checkbox' />
              <Title>Запомнить меня</Title>
            </label>
            <button>Войти</button>
          </form>
        </Wrapper>
      )}
    </>
  )
}

export default Login
