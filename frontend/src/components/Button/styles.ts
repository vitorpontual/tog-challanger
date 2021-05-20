import styled from 'styled-components';

import { shade } from "polished";

export const Container = styled.button`
  @import url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@400;500&display=swap');   

  background: #6356A5 0% 0% no-repeat padding-box;
  width: 230px;
  height: 40px;
  border-radius: 100px;
  border: 0;
  padding: 0 16px;
  color: #fff;
  margin-top: 48px;
  font-family: Roboto;
  transition: background-color 200ms;

  &:hover{
    background: ${shade(0.2, '#F356A5')}
  }
`