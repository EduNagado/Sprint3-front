import { SectionAjuda } from "../styled";
import ajudaImg from "../assets/anexos/ajuda.png";
import Navegacao from "../components/Navegacao";
import logoMef from "../assets/anexos/logoMEF.png";
 
export default function Ajuda() {
  return (
    <SectionAjuda>
      <header role="banner">
        <div className="top-page-ajuda">
          <div className="top-logo">
            <a href="/home">
              <img src={logoMef} alt="Logo MEF" />
            </a>
          </div>
          <Navegacao />
        </div>
      </header>
 
      <main role="main">
        <div className="ajuda-text-img">
          <div className="img-ajuda">
            <img src={ajudaImg} alt="Ajuda" />
          </div>
          <div className="text-ajuda">
            <p>
              Bem-vindo à MEF, sua plataforma automotiva inteligente. Com a ajuda de nossa IA, Fernanda, resolver problemas mecânicos nunca foi tão fácil. Descreva sua preocupação, escolha entre uma variedade de soluções e nossos especialistas cuidarão do resto. Na MEF, combinamos tecnologia avançada com atendimento personalizado para garantir que você receba soluções confiáveis e eficientes para suas necessidades automotivas. Junte-se a nós hoje mesmo e experimente uma nova abordagem para lidar com questões automotivas.
            </p>
          </div>
        </div>
      </main>
      <footer>
        <p>
           <a href="Entre em contato">Entre em contato</a>
        </p>
      </footer>
    </SectionAjuda>
  );
}
 
 