import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX( - 50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;

  form {
    margin: 80px 0;
    width: 400px;
    text-align: center;

    h1 {
      margin-bottom: 67px;
      text-align: left;
      font-family: 'Bai Jamjuree', sans-serif;
      font-weight: 900;
    }

    a {
      color: #17181D;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      font-family: Montserrat;
      text-align: right;
      transition: color 200ms;

      &:hover {
        color: ${shade(0.2, '#f4ede8')}
      }
    }
  }

  > a {
    color: #ff9000;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 200ms;

    display: flex;
    align-items: center;

    svg{ 
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#ff9000')}
    }
  }
`;
