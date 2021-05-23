import styled from "styled-components"

export const Container = styled.div`

  position: relative;
  font-family: Montserrat;

  display: grid;
  grid-template-columns: 1fr 394px;
  
`

export const Header = styled.div`
  width: 1366px;
  padding: 32px 0;

  text-algin: center;

  position: float;

  .container {
    display: grid; 
    grid-template-columns: 1fr 167px;
  }

  margin-bottom: 144px;
  nav ul li{
    list-style-type: none;
  }

  nav > ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav .cart {
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #A9A7B1;

    width: 50px;
    height: 50px;

    border-radius: 50%;
  }

  a {
    text-decoration: none;
    color: black;
  }

  nav .cart svg{ 
    color: white
  }

  nav .account {
    display: flex;

    justify-content: center;
    align-items: center;

    width: 86px;
    height: 38px;

    color: white;

    border-radius: 20px;
    background-color: #6356A5;

  }


  .
`

export const Card = styled.div` 
  z-index: 5;
  width: 716.5px;
  height: 307; 
  margin: 0 auto;

  > .your-cart {
    text-align: center;
    margin-bottom: 46px;
  }

  > .header {
    display: grid;
    grid-template-columns: 300px 100px 161px 60px;
  }

  > .items .item {
    display: grid;
    grid-template-columns: 300px 100px 161px 130px 100px;
  } 

  > .items .item:last-child{
    margin-bottom: 24px;
  }

  > .items {
    margin: 16px 0;
    border-bottom: 1px solid #111
  }

  > .items .item button {
    border: none;
    background: none;    
  }  

  > .subTotal {
    text-align: right;
    margin-right: 98px;
  }
`

export const Aside = styled.div`
height: 100vh;
background-color: #ECEDF3;
z-index: 0;

.container {
  width: 100%;
  height: 100vh;
}

.container h1 {
  margin: 172px 0 53px 64px;
}

.items {
  display: flex;
  flex-direction: column;
}

.items input{
  width: 266.5px;
  height: 40px;

  border: 1px solid #00000042;
  border-radius: 4px;

  background-color: #ECEDF3;

  margin-left: 64px;
  margin-bottom: 32px;

  padding: 20px;
}

.subtotal {
  max-width: 266.5px;
  display: flex;
  justify-content: space-between;

  margin-left: 64px;
  margin-bottom: 32px;
}

.separator {
  width: 266.5px;
  margin-left: 64px;
  margin-bottom: 32px;
  border-bottom: 1px solid #aaa;
}

.total {
  max-width: 266.5px;
  display: flex;
  justify-content: space-between;

  margin-left: 64px;
  margin-bottom: 32px;
}

.total .value {
  font-size: 20px;
}

.button {
  width: 266.5px;
  height: 45px;

  margin-left: 64px;
  background-color: #292C35;
  color: #FEC92E;
  font-weight: bold;

  border-radius: 20px;
  margin-bottom: 32px;

}

.button.keep {
  display: flex;

  background: #ECEDF3;
  border: 2px solid #292C35;

  color: #292C35;
  font-weight: normal;

  justify-content: center;
  align-items: center;
  text-decoration: none;
}


`