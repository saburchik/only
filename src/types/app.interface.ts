import { Path, UseFormRegister } from 'react-hook-form'

export interface LoginField {
  login?: string
  password?: string
  rememberMe?: boolean
}

interface ILabelValues {
  password?: string
  login?: string
  rememberMe?: any
}

export type InputProps = {
  register: UseFormRegister<ILabelValues>
  label: Path<ILabelValues>
  errors: any
  title: string
  type: string
}
