import { FC } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { LoginField } from '../app.interface'

const Title = styled.h5`
  width: max-content;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 400;
`

type InputProps = {
  register: any
  errors: any
  required: any
  title: string
  name: string
  type: string
}

const Input: FC<InputProps> = ({
  register,
  errors,
  title,
  name,
  type,
  required,
}) => {
  return (
    <label>
      <Title>{title}</Title>
      <input
        {...register(name, { required: 'Обязательно поле' })}
        className='form__input'
        type={type}
      />
      {errors.name && (
        <Title style={{ color: 'red' }}>{errors.name.message}</Title>
      )}
    </label>
  )
}

export default Input
