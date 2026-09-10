import { useState } from "react";

function TaskSummary() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Estudar React", completed: false },
    { id: 2, title: "Criar projeto Vite", completed: true },
    { id: 3, title: "Passear com o cachorro", completed: false }
  ]);

  const completedCount = tasks.filter((task) => task.completed).length;

  function toggleTask(taskId) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  return (
    <section>
      <p>Concluídas: {completedCount}</p>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>{task.title}</span>{" "}
            <button type="button" onClick={() => toggleTask(task.id)}>
              {task.completed ? "Reabrir" : "Concluir"}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  function incrementThreeTimes() {
    setCount((current) => current + 1);
    setCount((current) => current + 1);
    setCount((current) => current + 1);
  }

  return (
    <div>
      <p>Valor: {count}</p>
      <button type="button" onClick={incrementThreeTimes}>
        Somar 3
      </button>
    </div>
  );
}

export default function App() {
  return (
    <main>
      <header>
        <h1>To-Do Pro</h1>
        <p>Organize suas tarefas em um só lugar.</p>
      </header>

      <section>
        <h2>Minhas tarefas</h2>
        <TaskSummary />
      </section>

      <hr />

      <section>
        <h2>Contador</h2>
        <Counter />
      </section>
    </main>
  );
}