import { useEffect, useState } from "react";

export function Inventario() {
  const [figurinhas, setFigurinhas] = useState([]);

  useEffect(() => {
    const armazenado = JSON.parse(localStorage.getItem("inventario")) || [];
    setFigurinhas(armazenado);
  }, []);

  const limparInventario = () => {
    if (!window.confirm("Deseja realmente limpar o inventário?")) return;
    localStorage.removeItem("inventario");
    setFigurinhas([]);
  };

  return (
    <main
      className="conteiner"
      role="main"
      aria-label="Inventário de figurinhas colecionadas"
    >
      <section
        className="inventario"
        aria-labelledby="titulo-inventario"
        aria-live="polite"
      >
        <header>
          <h2 id="titulo-inventario">Inventário</h2>
          <button
            className="limpar-inventario"
            onClick={limparInventario}
            aria-label="Limpar todas as figurinhas do inventário"
          >
            Limpar Inventário
          </button>
        </header>

        {figurinhas.length === 0 ? (
          <p className="vazio" role="status">
            Nenhuma figurinha coletada ainda!
          </p>
        ) : (
          <ul
            className="grid"
            role="list"
            aria-label="Lista de figurinhas coletadas"
          >
            {figurinhas.map((f) => (
              <li
                key={f.id}
                className="figurinha"
                role="listitem"
                aria-label={`Figurinha ${f.nome}`}
              >
                <img
                  src={f.imagem}
                  alt={`Figurinha de ${f.nome}`}
                  className="figurinha-imagem"
                />
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
