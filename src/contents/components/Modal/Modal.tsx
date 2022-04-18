import type { FC, ReactNode } from 'react';
import styled from '@emotion/styled';

interface ModalProps {
  children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ children }) => {
  return (
    <ModalOverlay>
      <Container>
        { children }
      </Container>
    </ModalOverlay>
  )
}

const ModalOverlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
`

const Container = styled.div`
  background: rgba(255, 255, 255, 0.5);
  display: block;
  padding: 8px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 800px;
  height: 400px;
`