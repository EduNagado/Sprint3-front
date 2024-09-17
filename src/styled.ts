import styled from "styled-components";


export const FooterRodape = styled.footer`

    width: 100%;
    min-height: 5vh;
    background-color: #333;
    padding: 20px;
    display: flex;
    justify-content: left;
    align-items: center;

    p{
        color: #fff;
        text-align: center;
    }   

`;



export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  background-color: rgb(233, 232, 232);
  border-radius: 15px;
  padding: 10px;

  ul {
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 0;
    gap: 50px;
  }

  li {
    margin: 0 5px;
  }

  a {
    text-decoration: none;
    color: rgb(62, 61, 61);
    font-family: "Roboto", sans-serif;
    padding: 10px;
  }

  a:hover {
    font-weight: bold;
  }
`;


export const MainError = styled.main`

    flex-grow: 1;
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #bbb;

    h1{
        color:#f00;
        font-size: 4em;
        text-align: center;
    }

`;


export const ButtonSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;

  .text1 {
    text-align: center;
    font-size: 20px;
  }

  p {
    text-align: center;
    font-size: 30px;
  }

  .button-to-chatbot {
    text-decoration: none;
  }

  .button-left-section {
    background-color: rgb(233, 232, 232);
    margin-top: 50px;
    width: 300px;
    padding: 20px;
    border-radius: 10px;
    cursor: pointer;
    text-align: center;
  }

  .button-left-section p {
    font-family: "Roboto", sans-serif;
    font-size: 17px;
    color: rgb(63, 63, 63);
  }

  .button-left-section:hover {
    background-color: rgb(187, 187, 187);
  }
`;

export const SectionAjuda = styled.section`
  * {
    margin: 0;
    font-family: "Poppins", sans-serif;
  }

  /* Estilos gerais */
  .top-page {
    display: flex;
    flex-direction: column;
  }

  .top-logo-tipo2 {
    width: 120px;

    img {
      width: 100px;
    }
  }

  nav.navegacao {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: rgb(233, 232, 232);
    border-radius: 15px;

    a {
      text-decoration: none;
      color: rgb(62, 61, 61);
      margin: 9px;
      font-family: "Roboto", sans-serif;
      border-radius: 30px;
      padding: 2px;

      &:hover {
        font-weight: bold;
      }
    }
  }

  .ajuda-text-img {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 30px;
  }

  .img-ajuda {
    margin-top: 50px;
    margin-left: 30px;
    width: 60%;

    img {
      width: 100%;
      max-width: 600px;
      border-radius: 50px;
    }
  }

  .text-ajuda {
    width: 40%;
    font-size: 23px;

    p {
      font-family: "Roboto", sans-serif;
    }
  }
  /* Estilo do footer */
  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #e9e8e8;
    padding: 10px;
    font-size: 14px;
    width: auto;
    border-radius: 0 10px 0 0;

    p {
      margin: 0;
      font-family: "Roboto", sans-serif;
    }

    a {
      text-decoration: none;
      color: rgb(62, 61, 61);

      &:hover {
        font-weight: bold;
      }
    }
  }

  /* Media Queries */

  /* Estilos para desktop */
  @media (max-width: 1199px) and (min-width: 992px) {
    .ajuda-text-img {
      flex-direction: row;
      margin: 50px;
    }

    .img-ajuda {
      margin-top: 0;
      margin-left: 30px;
      width: 40%;
    }

    .text-ajuda {
      width: 50%;
      font-size: 20px;
    }
  }

  /* Estilos para tablets */
  @media (max-width: 991px) and (min-width: 768px) {
    .ajuda-text-img {
      flex-direction: column;
      margin: 30px;
    }

    .img-ajuda img {
      width: 100%;
      border-radius: 0;
    }

    .text-ajuda {
      width: 100%;
      font-size: 20px;
      margin-top: 20px;
    }
  }

  /* Estilos para dispositivos móveis */
  @media (max-width: 766px) {
    .ajuda-text-img {
      flex-direction: column;
      margin: 20px;
    }

    .img-ajuda img {
      width: 100%;
      border-radius: 0;
    }

    .text-ajuda {
      width: 100%;
      font-size: 16px;
    }
  }
`;



export const SectionChatBot = styled.section`
  * {
    margin: 0;
    font-family: "Poppins", sans-serif;
  }

  /* Estilos gerais */
  .top-page-chatbot {
    margin-left: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;

    .top-logo img {
      width: 80px;
    }
  }

  .interaction {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .msg-bot {
    margin-top: 50px;
    background-color: rgb(218, 218, 218);
    padding: 20px;
    border-radius: 50px;
    width: 400px;
    font-size: 20px;
    margin-bottom: 350px;
  }

  .input-user {
    width: 500px;
    padding: 10px;
    border-radius: 30px;
  }

  .text-footer {
    margin-top: 50px;
    margin-bottom: 0;
    border-top: 1px solid grey;
    text-align: center;
    background-color: rgb(218, 218, 218);
    padding: 30px;
  }

  /* Media Queries */

  /* Estilos para desktop */
  @media (max-width: 1199px) and (min-width: 992px) {
    .msg-bot {
      width: 500px;
      font-size: 22px;
    }

    .input-user {
      width: 600px;
    }
  }

  /* Estilos para tablets */
  @media (max-width: 991px) and (min-width: 768px) {
    .msg-bot {
      width: 80%;
      font-size: 18px;
      margin-bottom: 250px;
    }

    .input-user {
      width: 600px;
    }
  }

  /* Estilos para dispositivos móveis */
  @media (max-width: 766px) {
    .msg-bot {
      width: 90%;
      font-size: 15px;
      margin-bottom: 150px;
    }

    .input-user {
      width: 450px;
    }
  }
`;


export const SectionParcerias = styled.section`
  .top-page {
    display: flex;
    flex-direction: column;
  }

  .top-logo {
    width: 120px;

    img {
      width: 100px;
    }

    @media (max-width: 1199px) and (min-width: 992px) {
      width: 100px;

      img {
        width: 80px;
      }
    }

    @media (max-width: 766px) {
      width: 80px;

      img {
        width: 60px;
      }
    }
  }

  nav.navegacao {
    display: flex;
    flex-direction: row;
    background-color: rgb(233, 232, 232);
    border-radius: 15px;

    a {
      text-decoration: none;
      color: rgb(62, 61, 61);
      margin: 9px;
      font-family: "Roboto", sans-serif;

      &:hover {
        font-weight: bold;
      }
    }

    @media (max-width: 766px) {
      justify-content: center;
      margin-top: 20px;

      a {
        margin: 0 10px;
        padding: 8px 12px;
      }
    }
  }

  .text-img-parcerias {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 50px;
    margin-bottom: 0;

    @media (max-width: 991px) {
      flex-direction: column;
      align-items: center;
      margin: 20px;
    }
  }

  .text-parcerias {
    font-family: "Roboto", sans-serif;
    margin-left: 30px;
    font-size: 20px;

    @media (max-width: 991px) {
      font-size: 16px;
      margin: 10px 0;
    }
  }

  .text2-parcerias {
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    margin: 50px;

    @media (max-width: 991px) {
      font-size: 16px;
      margin: 20px;
    }

    @media (max-width: 766px) {
      font-size: 16px;
      margin: 20px 0;
      text-align: justify;
    }
  }

  .div-img-parcerias {
    margin: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 991px) {
      margin: 20px;
    }

    @media (max-width: 766px) {
      margin: 20px;
    }
  }

  .img-parcerias {
    height: 200px;
    border-radius: 30px;

    @media (max-width: 991px) {
      width: 100%;
      max-width: 600px;
      height: auto;
      border-radius: 15px;
    }

    @media (max-width: 766px) {
      width: 100%;
      max-width: 300px;
      height: auto;
      border-radius: 15px;
    }
  }
`;
