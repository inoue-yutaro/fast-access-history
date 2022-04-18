import type { FC, InputHTMLAttributes } from 'react';
import styled from '@emotion/styled';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<InputProps> = (props) => {
  return (
    <StInput { ...props } />
  )
}

const StInput = styled.input`
  background-color: white;
  border: unset;
  box-sizing: border-box;
  outline: none;
  padding: 4px 8px;
  height: 48px;
  width: 100%;
`