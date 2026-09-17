// O que precisa? : 
// 1. O formulário precisa cadastrar um novo produto com nome, preço e categoria 
// 2. formulário precisa de nome, prçeo, categoria e imagem por props

const ProdutoForm = ({addProduto}) => {

    const [textoProduto, setTextoProduto] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!textoProduto.trim()) return; // se tiver vazio retorna

        addProduto(textoProduto.trim());
        setTextoProduto("") // limpa o campo de tarefas depois do envio 
    };

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Digite nome do produto" 
                value={textoProduto} 
                onChange={(e) => setTextoProduto(e.target.value)} 
            />

            <input 
                type="text"
                placeholder="Digite o preço do produto"
                value={textoProduto} 
                onChange={(e) => setTextoProduto(e.target.value)}
            />

            <input 
                type="text"
                placeholder="Digite a categoria do produto"
                value={textoProduto} 
                onChange={(e) => setTextoProduto(e.target.value)}
            />

            <button type="submit">Adicionar</button>
        </form>
    );

}