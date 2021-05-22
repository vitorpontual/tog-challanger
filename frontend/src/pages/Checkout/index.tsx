import React from "react";
import { Delete, LocalMall } from "@material-ui/icons"
import { Container, Card, Header, Aside } from "./styles";


const Checkout: React.FC = () => {

  return (
    <Container>
      <Card>
        <Header>
          <div className="container">
            <div className="logo">
              <h1>Tog.design</h1>
            </div>

            <nav>
              <ul>
                <li className="cart">
                  <LocalMall />
                </li>
                <li className="account">Logout</li>
              </ul>
            </nav>
          </div>

        </Header>
        <h1 className="your-cart"> Your Cart </h1>
        <div className="header">
          <div className="article">Article</div>
          <div className="author"> Author</div>
          <div className="publish">Publish</div>
          <div className="price">Value</div>
        </div>

        <div className="items">
          <div className="item">
            <div className="title">Edition Article 2021</div>
            <div className="author">Vitor</div>
            <div className="publish">Tog. Design</div>
            <div className="price">R$ 10.00</div>
            <form action="/" className="trash" method="POST">
              <button className="delete">
                <Delete />
              </button>
            </form>
          </div>
        </div>

        <div className="subTotal">
          <span>R$10.00</span>
        </div>
      </Card>

      <Aside>
        <div className="container">
          <h1>Resume</h1>
          <div className="items">
            <input type="text" placeholder="Discount coupon" />
            <div className="subtotal">
              <div className="title">Subtotal</div>
              <div className="value">R$10.00</div>
            </div>
            <div className="separator"></div>
            <div className="total">
              <div className="title">Total</div>
              <div className="value">R$10.00</div>
            </div>

            <button className="button" type='submit'>CHECKOUT</button>
            <a href="/" className="button keep">KEEP BUYING</a>
          </div>
        </div>
      </Aside>

    </Container>
  );
};

export default Checkout;