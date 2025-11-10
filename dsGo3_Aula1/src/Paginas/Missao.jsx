import { useState } from "react";
import { missoes } from "../Dados/dadosMissao";
import { MissaoCard } from "../Componentes/MissaoCard";
import { MissaoModal } from "../Componentes/MissaoModal";

export function Missao() {
  const [missaoSelecionada, setMissaoSelecionada] = useState(null);
  const [missoesConcluidas, setMissoesConcluidas] = useState([]);

  const concluirMissao = (id) => {
    setMissoesConcluidas((prev) => [...prev, id]);
    setMissaoSelecionada(null);
  };

  return (
    <main
      className="conteiner"
      role="main"
      aria-label="Lista de missões disponíveis"
    >
      <header>
        <h2 id="titulo-missoes">Missões</h2>
      </header>

      <section
        className="missoes-grid"
        role="region"
        aria-labelledby="titulo-missoes"
        aria-live="polite"
      >
        {missoes.map((m) => (
          <MissaoCard
            key={m.id}
            missao={m}
            onIniciarMissao={setMissaoSelecionada}
            concluida={missoesConcluidas.includes(m.id)}
          />
        ))}
      </section>

      {missaoSelecionada && (
        <MissaoModal
          missao={missaoSelecionada}
          onClose={() => setMissaoSelecionada(null)}
          onConcluir={() => concluirMissao(missaoSelecionada.id)}
          aria-modal="true"
          role="dialog"
          aria-labelledby={`missao-${missaoSelecionada.id}-titulo`}
          aria-describedby={`missao-${missaoSelecionada.id}-descricao`}
        />
      )}
    </main>
  );
}
