import 'boxicons/css/boxicons.min.css';
import { SectionLogin } from '../styled';
import goback from '../assets/anexos/goBack.png';
import logoMef from '../assets/anexos/logoMEF.png'; // Certifique-se de importar o logo
import { Link } from 'react-router-dom'; // Para navegação

export default function Login() {
    return (
        <SectionLogin>
            
            <header role="banner">
                <div className="top-page-login">
                    
                    <div className="go-back">
                        <Link to="/home">
                            <img src={goback} alt="Voltar para a página inicial" />
                        </Link>
                    </div>
                    
                    <div className="top-logo">
                        <Link to="/home">
                            <img src={logoMef} alt="Logo MEF" />
                        </Link>
                    </div>
                </div>
            </header>
            <div className="wrapper" role="main">
                <form action="" role="form">
                    <h1>Login</h1>
                    <div className="input-box" role="textbox">
                        <input type="text" placeholder="Nome" required />
                        <i className='bx bxs-user'></i> 
                    </div>
                    <div className="input-box" role="textbox">
                        <input type="password" placeholder="Senha" required />
                        <i className='bx bx-lock-alt'></i> 
                    </div>
                    <div className="lembrar-senha" role="group">
                        <label role="checkbox">
                            <input type="checkbox" />
                            Lembrar senha
                        </label>
                        <a href="#" role="link">Esqueceu sua senha?</a>
                    </div>
                    <button type="submit" className="btn" role="button">Login</button>
                    <div className="cadastrar-link" role="group">
                        <p>Não tem cadastro? <a href="#" role="link">Cadastrar</a></p>
                    </div>

                </form>
            </div>
        </SectionLogin>
    );
}
