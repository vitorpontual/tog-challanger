import styled from "styled-components";


export const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

  font-family: 'Roboto', sans-serif;


  width: 100wv;
  height: 100%;
  background-color: #F5F6F9;

`

export const Header = styled.div`

  margin-left: 150px;

  display: grid;
  grid-template-columns: 1fr 244px;
  align-items: center;

  padding: 32px;
  margin-bottom: 66px;

`

export const Nav = styled.div`
  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  li {
    list-style-type: none;
  }

  a {
    text-decotration: none;
    color: black;
    font-family: Helvetica;
  }

  .cart {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #A9A7B1;

    width: 50px;
    height: 50px;

    border-radius: 50%;
    
  }

  .cart a svg {
    color: white;
  }

  .signin a {
    padding: 12px 24px;
    border-radius: 12px;
   
    background-color: #6356A5;
    color: white;

    text-decoration: none;

    
  }
  
`

export const Contents = styled.div`
  display: grid;
  grid-template-columns: 1fr 350px;


`

export const Cards = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 32px;

margin: 0 auto;
`

export const Card = styled.div`
background-color: white;

width: 412px;
height: 412px;

border-radius: 16px;
display: grid;
grid-template-rows: 1.8fr 0.7fr 0.5fr;

.title-img {
  width: 100%;
  margin: 12px 12px 0 12px;
}

.title{
  margin: 16px;
  justify-self: space-between;
}

.tags span{
  display: inline-block;
}

.tags span + span {
  margin-left: 8px;
}

.author {  
  border-right: 2px solid #111;
  padding-right: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
}

.tags{
  margin-left: 12px;

  .tag {
    display: flex;

  }

}

.footer {
  justify-self: center;

  height: 35px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-bottom: 16px;
}

`

export const Aside = styled.div`
font-family: 'Roboto', sans-serif;


position: fixed;
right: 110px;

.item:first-child {
  margin-top: 215px;

}

.item {
  display: grid;
  grid-template-columns: 16px 1fr;

  margin-bottom: 50px;
}

.item span {
  width:20px;
  height: 28px;
  font-size: 18px;
  border-bottom: 4px solid #111;
  font-weight: bold;
}

.item:nth-child(2) span{
  color: #FEC92E;
  border-color: #FEC92E;
}

.item .content {
  margin-left: 12px;
  font-size: 12px;
  h1 {
    font-size: 14px;
    font-weight: bold;
  }
}
`

export const Modal = styled.div`
  
`