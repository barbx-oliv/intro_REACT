import { useState } from "react"

// Componente para renderização do formulário de novas tarefas 

// const -> garante que o valor não mude o valor da variável de estado (VERS. sorDiogo) 
// toda alteração de valor deve acontecer pelo "set" (VERS. sorDiogo)

// fazendo uma função que vai pegar/add uma tarefa, e esse evento (props, pegando propriedade de um elemneto pai) e vai fazer alguma coisa  
const TodoForm = ({addTarefa}) => {
    
    // a cada nova renderização o valor novo é atribuido a variavel de estado 1 elemento do vetor (VERS. sorDiogo)
    // o usestate vai armazenar o valor do elemento. inicialmente a const vai ser vazia e, ao declarar, ele vai ser um vetor que vai possuir dois elemetos. (VERS. sorDiogo)
    
    // const é mais segura de usar/manipular e, como estou sempre renderizando a tela, cada vez que eu teclar e renderizar o formulário
    // é como se eu tivesse criando ele de novo, pegando o valor e atribuindo 
    const [textoTarefa, setTextoTarefa] = useState(""); // uma declaração de variavel de estado no REACT 
    
    // evento para o botão enviar do formulário 
    // esse evento pega o evento e, primeiro, vai evitar o recarregamento da página (e.preventDefault())
    const handleSubmit = (e) => {
        e.preventDefault(); // evita carregamento 
        if(!textoTarefa.trim()) return; // se o texto da tarefa estiver vazio, interrompe o envio e evita enviar tarefas vazias 

        addTarefa(textoTarefa.trim()); // executa o método addTarefa do elemento pai(props)
        setTextoTarefa("") // limpa o campo da tarefa após adicionar a tarefa 
    };

    // virtual DOM 
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Digite uma nova tarefa" value={textoTarefa} onChange={(e)=>setTextoTarefa(e.target.value)} />
            <button type="submit">Adicionar nova tarefa!</button>
        
        </form>
    );
}

export default TodoForm;