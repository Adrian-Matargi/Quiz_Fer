import { Outlet } from 'react-router-dom';
import { Menu } from '../Componentes/Menu';

export function DSGo() {
  return (
    <div className="corpo" role="application" aria-label="Aplicativo de Quiz DSGo">
      {/* Conteúdo principal da página */}
      <main id="conteudo-principal" aria-live="polite" aria-label="Conteúdo principal">
        <Outlet />
      </main>

      {/* Navegação */}
      <nav aria-label="Menu principal de navegação">
        <Menu />
      </nav>
    </div>
  );
}
