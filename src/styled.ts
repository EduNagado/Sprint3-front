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
`;

export const SectionChatBot = styled.section``;


export const SectionLogin = styled.section`
  
    body {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-color: rgb(15, 97, 192);
        
        
    }

    section {
        color: #bae6fd;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        
    }

    .wrapper {
        width: 420px; 
        background: #bae6fd;
        color: #fff;
        border-radius: 10px;
        padding: 30px 40px;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.3); 
        margin: 0 auto; 
    }

    .wrapper h1 {
        font-size: 36px;
        text-align: center;
        
    }

    .wrapper .input-box {
        position: relative;
        width: 100%;
        height: 50px;
        margin: 30px 0;
        display: flex;
        align-items: center;
        color: #bae6fd;
    }

    .input-box input {
        width: 100%;
        height: 100%;
        background: transparent;
        border: none;
        outline: none;
        border: 2px solid rgba(255, 255, 255, 0.2);
        border-radius: 40px;
        font-size: 16px;
        color: #fff;
        padding: 20px 45px 20px 20px;
    }

    .input-box input::placeholder {
        color: #fff;   
    }

    .input-box i {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 20px;
        color: #fff;
    }

    .wrapper .lembrar-senha {
        display: flex;
        justify-content: space-between;
        font-size: 15.5px;
        margin: -15px 0 15px;
    }

    .lembrar-senha label input {
        accent-color: #fff;
        margin-right: 3px;
    }

    .lembrar-senha a {
        color: #fff;
        text-decoration: none;
    }

    .lembrar-senha a:hover {
      text-decoration: underline;
    }

    .wrapper .btn {
      width: 100%;
      height: 40px;
      background: #fff;
      border: none;
      outline: none;
      border-radius: 40px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      cursor: pointer;
      font-size: 16px;
      color: #333;
      font-weight: 600;
    }

    .wrapper .cadastrar-link {
      font-size: 15.5px;
      text-align: center;
      margin-top: 20px;
      margin: 20px 0 15px;
    }

  .cadastrar-link p a {
      color: #fff;
      text-decoration: none;
      font-weight: 600;
  }

  .cadastrar-link p a:hover {
    text-decoration: underline;
  }
`;

export const SectionParcerias = styled.section``;

export const SectionSobre = styled.section``;
