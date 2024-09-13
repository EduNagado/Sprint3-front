import { SectionSobre } from "../styled";
import Navegacao from "../components/Navegacao";


export default function Sobre() {
  return (
    <SectionSobre>
      <div>
        <header>
          <div className="top-page" role="banner">
            <div className="top-logo-tipo2">
              <a href="/home">
                <img src="/anexos/logoMEF.png" alt="Logo MEF" />
              </a>
            </div>
            <Navegacao />
          </div>
        </header>

        <main>
          <div className="imgs">
            <div className="text-img-sobre">
              <img className="img-sobre" src="/anexos/felipesilva.jpg" alt="Foto de Felipe Silva Maciel" />
              <div className="text-sobre">
                <p>Felipe Silva Maciel</p>
                <p>RM: 555307</p>
                <a className="link-sobre" target="_blank" rel="noopener noreferrer" href="https://github.com/fesilva2109" role="link">
                  <div className="git-button">
                    <img src="/anexos/github-removebg-preview.png" alt="Ícone do GitHub" />
                    <p>fesilva2109</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="text-img-sobre">
              <img className="img-sobre" src="/anexos/eduardo.jpg" alt="Foto de Eduardo Henrique S. Nagado" />
              <div className="text-sobre">
                <p>Eduardo Henrique S. Nagado</p>
                <p>RM: 558158</p>
                <a className="link-sobre" target="_blank" rel="noopener noreferrer" href="https://github.com/EduNagado" role="link">
                  <div className="git-button">
                    <img src="/anexos/github-removebg-preview.png" alt="Ícone do GitHub" />
                    <p>EduNagado</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="text-img-sobre">
              <img className="img-sobre" src="/anexos/mateus.jpg" alt="Foto de Mateus Silveira Cezar" />
              <div className="text-sobre">
                <p>Mateus Silveira Cezar</p>
                <p>RM: 557650</p>
                <a className="link-sobre" target="_blank" rel="noopener noreferrer" href="https://github.com/MateusSilveiraCezar" role="link">
                  <div className="git-button">
                    <img src="/anexos/github-removebg-preview.png" alt="Ícone do GitHub" />
                    <p>Mateuszuito</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="centralizar-link-repositorio">
            <a className="link-repositorio" target="_blank" rel="noopener noreferrer" href="https://github.com/fesilva2109/front_challenge.git" role="link">
              <div className="div-link-repositorio">
                <img src="/anexos/github-removebg-preview.png" alt="Ícone do GitHub" />
                <p>Repositório do projeto</p>
              </div>
            </a>
          </div>
        </main>
      </div>
    </SectionSobre>
  );
}
