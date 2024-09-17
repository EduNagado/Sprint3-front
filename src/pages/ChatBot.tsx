import { SectionChatBot } from "../styled";
import { Link } from "react-router-dom";
import logoMef from "../assets/anexos/logoMEF.png"
import goBack from "../assets/anexos/goBack.png";  // Certifique-se de que o caminho está correto
 
export default function ChatBot() {
  return (
    <SectionChatBot>
      <header role="banner">
        <div className="top-page-chatbot">
          <div className="go-back">
            <Link to="/home">
              <img src={goBack} alt="Voltar para a página inicial" />
            </Link>
          </div>
          <div className="top-logo">
            <Link to="/home">
              <img src={logoMef} alt="Logo MEF" />
            </Link>
          </div>
        </div>
      </header>
 
      <main role="main">
        <div className="interaction" role="dialog">
          <div>
            <p className="msg-bot">
              Olá! Eu sou Fernanda, a assistente virtual da MEF. Como posso te ajudar?
            </p>
          </div>
          <div>
            <input className="input-user" type="text" placeholder="Digite sua pergunta..." />
          </div>
        </div>
      </main>
 
      <footer role="contentinfo">
        <p className="text-footer">
          A IA pode cometer erros, portanto, verifique novamente se os resultados são precisos antes de usá-los.
        </p>
      </footer>
    </SectionChatBot>
  );
}

