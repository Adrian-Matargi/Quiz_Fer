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
    <main className="conteiner" aria-labelledby="titulo-inventario">

      <section className="inventario">
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
          <ul className="grid" aria-label="Lista de figurinhas coletadas">
            {figurinhas.map((f) => (
              <li key={f.id} className="figurinha">
                <img
                  src={f.imagem}
                  alt={`Figurinha do personagem ${f.nome}`}
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
