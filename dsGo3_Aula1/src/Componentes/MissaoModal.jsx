import { useState } from "react";
import sucesso from "../assets/win.png";
import erro from "../assets/raios.png";

export function MissaoModal({ missao, onClose, onConcluir }) {
  const [resposta, setResposta] = useState("");
  const [feedback, setFeedback] = useState(null); // {status, mensagem}

  const verificarResposta = () => {
    const normalized = resposta.trim().toLowerCase();

    if (!normalized) {
      setFeedback({
        status: "erro",
        mensagem: "Digite uma resposta antes de enviar!"
      });
      return;
    }

    const correta = missao.respostaCorreta.trim().toLowerCase();

    if (normalized === correta) {
      setFeedback({
        status: "sucesso",
        mensagem: "Resposta correta! Parabéns!"
      });

      setTimeout(() => onConcluir(missao.id), 1000);
    } else {
      setFeedback({
        status: "erro",
        mensagem: "Resposta incorreta. Tente novamente!"
      });
    }
  };

  return (
    <dialog
      open
      className="modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="titulo-missao"
      aria-describedby="descricao-missao"
    >
      <h2 id="titulo-missao">{missao.titulo}</h2>
      <p id="descricao-missao">{missao.descricao}</p>

      <label htmlFor="resposta" className="sr-only">
        Digite sua resposta
      </label>

      <input
        id="resposta"
        type="text"
        className="caixaTexto"
        placeholder="Digite sua resposta..."
        value={resposta}
        onChange={(e) => setResposta(e.target.value)}
        required
      />

      <div className="modal-botoes">
        <button onClick={verificarResposta} aria-label="Enviar resposta da missão">
          Enviar
        </button>
        <button onClick={onClose} aria-label="Fechar modal da missão">
          Fechar
        </button>
      </div>

      {feedback && (
        <div role="alert" className="resultado">
          <p>{feedback.mensagem}</p>

          {feedback.status === "sucesso" && (
            <img src={sucesso} alt="Missão concluída" width="100" loading="lazy" />
          )}
          {feedback.status === "erro" && (
            <img src={erro} alt="Resposta incorreta" width="100" loading="lazy" />
          )}
        </div>
      )}
    </dialog>
  );
}
