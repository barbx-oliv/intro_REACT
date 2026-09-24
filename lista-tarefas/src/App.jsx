import { useState } from "react";

import Header from "./components/Header";
import TarefaForm from "./components/TarefaForm";
import TarefaList from "./components/TarefaList";
import { tarefaInicial } from "./data/tarefaMock";
import TarefaFilters from "./components/TarefaFilters";

function App() {
  const [tarefas, setTarefas] = useState(tarefaInicial);
  const [filter, setFilter] = useState("all");

  function handleMudar(id) {
    setTarefas((prevTarefas) =>
      prevTarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
      )
    );
  }

  function handleRemover(id) {
    setTarefas((prevTarefas) => prevTarefas.filter((tarefa) => tarefa.id !== id));
  }

  function handleAdicionar(titulo) {
    const novaTarefa = {
      id: Date.now().toString(),
      titulo,
      descricao: "Nova Tarefa do Usuário",
      prioridade: "Normal",
      concluida: false
    };

    setTarefas((prevTarefas) => [novaTarefa, ...prevTarefas]);
  }

  const tarefasFiltradas = tarefas.filter((tarefa) => {
    if (filter === "pendentes") return !tarefa.concluida;
    if (filter === "concluida") return tarefa.concluida;
    return true;
  });

  return (
    <main className="app-container">
      <Header />
      <TarefaForm aoAdicionar={handleAdicionar} />
      <TarefaFilters currentFilter={filter} aoFiltrar={setFilter} />
      <p className="tarefa-contador">Tarefas Cadastradas: {tarefasFiltradas.length}</p>
      <TarefaList 
        tarefas={tarefasFiltradas} 
        aoMudar={handleMudar} 
        aoRemover={handleRemover} 
      />
    </main>
  );
}

export default App;