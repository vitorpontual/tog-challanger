import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFilled: boolean;
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`

  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

  background: #fff;
  border-bottom: 0.5px solid #232129;
  padding: 16px;
  width: 100%;
  height: 30px;
  color: #666360;
  margin-bottom: 20px;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props => props.isErrored && css`
    border-color: #c53030
  ` }

  ${props => props.isFocused && css`
    color: #ff9000;
    border-color: #ff9000;
  `}

  ${props => props.isFilled && css`
    color: #ff9000;
  `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #3D3D3D;

    &::placeholder {
      font-family: Roboto;
      color: #3D3D3D;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    color: #c53030;
    border-radius: 100%;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
