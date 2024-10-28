
import styles from "../styles/ListarProdutos.module.css"
export default function ListarProdutos({produtos}) {
    return (
        <div>
            <ul>

                {produtos.map(produto => 
                <li key={produto.id}>
                   
                  <img src={produto.image} alt={produto.title}/> 
                   <h2> titulo={produto.title} </h2>
                   <p>preco={produto.price} </p>
                   <p> descricao={produto.description}</p>
                   </li>     
                )}
                

            </ul>

        </div>

    )
}