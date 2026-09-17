// Componente para listar todas as tarefas 

const TodoList = ({tarefas, modificarTarefa, removerTarefa}) => { // esses tres vai vir lá do props do elemento pai 
    if(tarefas.length == 0) { // se o campo de tarefas estiver vazio 
        return <p>Nenhuma tarefa pendente!</p> // retorna p
    }
    // se tiver...
    return (
        <ul>
            {tarefas.map((tarefa)=>( // pega o vetor de tarefas e, para cada tarefa que estiver dentro dele, vai criar um list item 
                <li key={tarefa.id}>
                    <span onClick={() => modificarTarefa(tarefa.id)} 
                        style={{textDecoration: tarefa.completed ? "line-through" : "none", cursor:"pointer"}}>
                        {tarefa.texto}
                    </span>

                    <button onClick={() => removerTarefa(tarefa.id)}>Excluir tarefa</button>
                </li>
            ))}
        </ul>
    );
}

export default TodoList;