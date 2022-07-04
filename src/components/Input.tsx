import { FC } from 'react'
import styled from 'styled-components'
import { InputProps } from '../types/app.interface'

const Input: FC<InputProps> = ({ register, errors, title, label, type }) => {
  return (
    <label>
      <Title>{title}</Title>
      <InputStyle
        {...register(label, { required: true })}
        style={errors[label] ? { border: '1px solid red' } : {}}
        type={type}
      />
      {errors[label] && (
        <Title style={{ color: 'red', fontSize: '14px' }}>
          Обязательно поле
        </Title>
      )}
    </label>
  )
}

export default Input

const Title = styled.h5`
  width: max-content;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 1px;
`

const InputStyle = styled.input`
  width: 100%;
  padding: 20px;
  outline: none;
  border: none;
  font-size: 1rem;
  border-radius: 0.5rem;
  background: #f5f5f5;
`
