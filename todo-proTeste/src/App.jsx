import { useState } from "react";

import Header from "../../lista-tarefas/src/components/Header";
import TarefaForm from "../../lista-tarefas/src/components/TarefaForm";
import TarefaItem from "../../lista-tarefas/src/components/TarefaItem";
import TarefaList from "../../lista-tarefas/src/components/TarefaList";
import { tarefaInicial } from "./data/tarefaMock";

function App(){

  const [tarefas, setTarefas] = useState(tarefaInicial);

  function handleMudar(id){
    setTarefas((prevTarefas)=> prevTarefas.map((tarefa)=> tarefa.id === id ? {...tarefa, completa: !tarefa.completa }: tarefa));

  }

  function handleRemover(id){
    setTarefas((prevTarefas)=> prevTarefas.filter((tarefa) => tarefa.id !== id));
  }

  // Adicionar uma nova tarefa com 
  function handleAdicionar(titulo)  {
    const novaTarefa = {
      id: Date.now().toString(),
      titulo,
      descricao: "Nova Tarefa do Usuário",
      prioridade: "Normal",
      completa: false
    };

    // Usando o método adicionar do React (imutabilidade)
    setTarefas((prevTarefas)=> [novaTarefa, ...prevTarefas]);
  }


  return(
    <main className="app-container">
      <Header/>
      <TarefaForm/>
      <p className="tarefa-contador">Tarefas Cadastradas: {tarefas.length}</p>
      <TarefaList tarefas={tarefas} />
    </main>
  );
}

export default App;