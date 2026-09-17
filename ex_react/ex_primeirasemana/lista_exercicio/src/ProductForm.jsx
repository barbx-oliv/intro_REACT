// O que precisa? : 
// 1. O formulário precisa cadastrar um novo produto com nome, preço e categoria 
// 2. formulário precisa de nome, prçeo, categoria e imagem por props

import { useState } from "react"

const ProdutoForm = ({addProduto}) => {

    // o const garante que o valor não mude o valor da variável de estado

    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");
    const [categoria, setCategoria] = useState("");
    const [imagem, setImagem] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // evita recarregamento 
        if(!)
    }


}

export default ProdutoForm;