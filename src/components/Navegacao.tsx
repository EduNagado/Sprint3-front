
import { Link } from 'react-router-dom';
import { Nav } from "../styled";

export default function Navegacao() {
  return (
    <Nav>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/sobre">Sobre nós</Link></li>
        <li><Link to="/parcerias">Parcerias</Link></li>
        <li><Link to="/ajuda">Ajuda</Link></li>
      </ul>
    </Nav>
  );
}
