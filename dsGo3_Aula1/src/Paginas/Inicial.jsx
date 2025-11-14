import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

export function Inicial() {
  const navigate = useNavigate();

  return (
    <main 
      className="inicial" 
      aria-label="Tela inicial do aplicativo DS Go"
      role="main"
    >
      <header>
        <img 
          src={logo} 
          className="logo" 
          alt="Logo do aplicativo DS Go"
          loading="lazy"
        />
      </header>

      <section aria-labelledby="titulo-entrada">
        <h1 id="titulo-entrada">
          Bem-vindo ao DS Go
        </h1>

        <button 
          onClick={() => navigate('/dsgo')} 
          className="entrar"
          aria-label="Entrar no quiz DS Go"
        >
          Entrar
        </button>
      </section>
    </main>
  );
}
