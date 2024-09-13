import { Link } from 'react-router-dom';
import './home.css'; // Importando o CSS
import Navegacao from '../components/Navegacao';
import Button from '../components/Button';


export default function Home() {
  return (
    <div className="sections" role="main">
      <div className="left-section" role="complementary">
        <div className="top-page">
          <div className="logo-login">
            <div className="top-logo">
              <Link to="/home">
                <img src="/anexos/logoMEF.png" alt="Logo MEF" />
              </Link>
            </div>
            <div className="login">
              <Link to="/login">Login</Link>
            </div>
          </div>
          <Navegacao />
        </div>
        <Button />
      </div>

      <div className="right-section" role="region" aria-labelledby="right-section-heading">
        <div className="text-img-right">
          <h2 id="right-section-heading">O lugar para quem gosta de cuidar do seu automóvel</h2>
          <img src="/anexos/suportePorto.png" alt="Suporte Porto" />
        </div>
      </div>
    </div>
  );
}
                                                               