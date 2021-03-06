import { LocalMall } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { Link } from "react-router-dom";

import api from "../../services/api";
import { Container, Header, Nav, Cards, Card, Aside, Contents } from './styles'


interface Article {
  id: string;
  title: string;
  body_text: string;
  image: string;
  price: string;
  tags: string[];
  user: {
    name: string;
    avatar: string;
  };
}




const Home: React.FC = () => {

  const [articles, setArticles] = useState<Article[]>([]);
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal(){
    setIsOpen(true)
  }

  function closeModal(){
   setIsOpen(true)
  }


  
  

  useEffect(() => {
    api.get('articles').then(response => {
      setArticles(response.data);
    })
  }, [])




  return (
    <Container>
      <Header>
        <div className="title">
          <h1>Tog.design</h1>
        </div>
        <Nav>
          <ul>
            <li className="cart"><Link to="/checkout"><LocalMall /></Link></li>
            <li className="signin"><Link to='/signin'>Sign In</Link></li>
          </ul>
        </Nav>
      </Header>
      <Contents>
        <Cards>
          {articles.map(article => {
            return (
              <Card id={article.id} onClick={openModal}>
                <div className="logo">
                  <img className="title-img" src={article.image} alt={article.title} />

                </div>
                <h1 className="title">{article.title}</h1>

                <div className="footer">
                  <div className="author">
                    <img src={article.user.avatar} alt={article.user.name} />
                    <p>{article.user.name}</p>
                  </div>

                  <div className="tags">
                    <h3>Themes</h3>
                    <div className="tag">
                      {article.tags.map(map => {
                        return (
                          <span>{map}</span>
                        )
                      })}

                    </div>
                  </div>
                </div>
                <ReactModal id="modal" isOpen={modalIsOpen} onRequestClose={closeModal} shouldCloseOnOverlayClick={true} >
                  <img src={article.image} alt={article.title} />
                  <p>{article.body_text}</p>
                  <div className="footer">
                    <div className="author">
                      <img src={article.user.avatar} alt={article.user.name} />
                      <p>{article.user.name}</p>
                    </div>

                    <div className="tags">
                      <h3>Themes</h3>
                      <div className="tag">
                        {article.tags.map(map => {
                          return (
                            <span>{map}</span>
                          )
                        })}

                      </div>
                    </div>
                  </div>


                </ReactModal>

              </Card>
            )
          })}
          

        </Cards>
        <Aside>
          <div className="item">
            <span>01</span>
            <div className="content">
              <p>Emerging, identifying</p>
              <h1>Strategy</h1>
            </div>
          </div>

          <div className="item">
            <span>02</span>
            <div className="content">
              <p>Research, Design and Validation</p>
              <h1>Design</h1>
            </div>
          </div>

          <div className="item">
            <span>03</span>
            <div className="content">
              <p>From ideation to a product</p>
              <h1>Development</h1>
            </div>
          </div>

        </Aside>
      </Contents>


    </Container>
  )
}

export default Home