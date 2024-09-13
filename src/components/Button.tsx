
import { Link } from 'react-router-dom';
import { ButtonSection } from "../styled"; // Importando o styled-component

export default function Button() {
  return (
    <ButtonSection>
      <p className="text1">Vamos começar</p>
      <p>Como podemos te ajudar?</p>
      <Link className="button-to-chatbot" to="/chatbot">
        <div className="button-left-section" role="button">
          <p>Converse com nossa assistente virtual</p>
        </div>
      </Link>
    </ButtonSection>
  );
}

