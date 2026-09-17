// O que precisa? :
// 1. produto receber nome, preço, categoria e imagem por props
// 2. precisa de 5 produtos fixos usando map - transformar em estado usando useState
// 3. botao para adicionar produto - formulário para add produto 
// 4. botao de remover produto do estado sem mutar o array original 
// 5. contador que mostre o núm. total de produtos cadastrados e o valor do carrinho 


const Produtos = ({produto, preco, categoria, imagem}) => {
    if(produto.length === 0) {
        return <p>Nenhum produto está a venda</p>
    }

    return (
        <ul>
            {produto.map}
        </ul>
    )
}

export default Produtos;