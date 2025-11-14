import { Outlet } from 'react-router-dom';
import { Menu } from '../Componentes/Menu';

export function DSGo() {
  return (
    <div className="corpo" role="region" aria-label="Aplicativo de Quiz DSGo">
      
      {/* Conteúdo principal */}
      <main 
        id="conteudo-principal" 
        role="main"
        aria-live="polite" 
        aria-label="Conteúdo principal"
      >
        <Outlet />
      </main>

      {/* Navegação */}
      <nav aria-label="Menu principal de navegação">
        <Menu />
      </nav>
    </div>
  );
}
