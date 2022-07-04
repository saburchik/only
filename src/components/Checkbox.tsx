import { FC } from 'react'
import styled from 'styled-components'
import { InputProps } from '../types/app.interface'

const Checkbox: FC<InputProps> = ({ register, title, label, type }) => {
  return (
    <Label>
      <Input {...register(label)} type={type} />
      <CustomCheckbox>
        <Span />
      </CustomCheckbox>
      <Title>{title}</Title>
    </Label>
  )
}

export default Checkbox

const Label = styled.label`
  display: flex;
  flex-direction: row !important;
  align-items: center;
  height: auto;
  cursor: pointer;
  width: max-content;
`
const CustomCheckbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
  border: 1px solid #000;
  border-radius: 0.25rem;
  position: relative;
`
const Span = styled.span`
  width: 0.875rem;
  height: 0.875rem;
  background: #fff;
  border-radius: 0.125rem;
  position: absolute;
`
const Input = styled.input`
  -webkit-appearance: none;
  appearance: none;
  position: absolute;

  &:checked + ${CustomCheckbox} ${Span} {
    background: #4a67ff;
  }
`
const Title = styled.h5`
  width: max-content;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 400;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
`
