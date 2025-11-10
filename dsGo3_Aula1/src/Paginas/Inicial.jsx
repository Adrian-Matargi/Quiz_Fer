import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

export function Inicial() {
  const navigate = useNavigate();

  return (
    <main 
      className="inicial" 
      role="main" 
      aria-label="Tela inicial do aplicativo DS Go"
    >
      <header>
        <img 
          src={logo} 
          className="logo" 
          alt="Logo do aplicativo DS Go" 
          role="img"
        />
      </header>

      <section aria-labelledby="titulo-entrada">
        <h1 id="titulo-entrada" className="sr-only">
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
