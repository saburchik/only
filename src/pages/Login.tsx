import { FC, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import { LoginField } from '../types/app.interface'
import styled from 'styled-components'
import axios from 'axios'
import Input from '../components/Input'
import Checkbox from '../components/Checkbox'

const Login: FC = () => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  const [login, setLogin] = useState<string | undefined>()
  const [isUser, setIsUser] = useState<boolean>(false)
  const [submit, setSubmit] = useState<boolean>(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginField>({
    mode: 'onSubmit',
  })

  const onSubmit: SubmitHandler<LoginField> = (formData) => {
    let formLogin = formData.login
    let formPassword = formData.password
    setSubmit(true)

    axios
      .get('http://localhost:3004/users')
      .then((res) => {
        let users = res.data

        const response = users.forEach((user: LoginField) => {
          if (user.login === formLogin && user.password === formPassword) {
            setIsSuccess(true)
            setSubmit(false)
            reset()
          } else {
            setIsUser(true)
            setSubmit(false)
          }
          setLogin(formLogin)
        })
        return response
      })
      .catch((err) => {
        console.error(err)
        setSubmit(false)
      })
  }

  return (
    <>
      {isSuccess ? (
        <Navigate to='/profile' state={{ login }} />
      ) : (
        <Wrapper>
          {isUser ? (
            <Error>
              <Span>!</Span> <p>Пользователя {login} не существует</p>
            </Error>
          ) : null}
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              register={register}
              errors={errors}
              title='Логин'
              label='login'
              type='text'
            />
            <Input
              register={register}
              errors={errors}
              title='Пароль'
              label='password'
              type='password'
            />
            <Checkbox
              register={register}
              errors={errors}
              title='Запомнить меня'
              label='rememberMe'
              type='checkbox'
            />
            <Button
              style={submit ? { background: '#99A9FF', cursor: 'auto' } : {}}
              disabled={submit ? true : false}
            >
              Войти
            </Button>
          </Form>
        </Wrapper>
      )}
    </>
  )
}

export default Login

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: clamp(300px, 35vw, 640px);
  height: 100%;
  margin: 0 auto;
`

const Span = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffc8c8;
  color: #ee6565;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  padding: 12px;
`
const Error = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;
  width: 100%;
  font-size: 0.875rem;
  border: 1px solid #e26f6f;
  border-radius: 0.5rem;
  background: #f5e9e9;
  margin-bottom: 1.75rem;
  padding: 1.25rem;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`

const Button = styled.button`
  width: 100%;
  height: 3.75rem;
  color: #fff;
  background: #4a67ff;
  margin-top: 1.25rem;

  &:hover {
    background: #1117ff;
  }
`
