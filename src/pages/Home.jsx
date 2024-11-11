import { useEffect, useState } from "react";
import ListarProdutos from "./ListarProdutos";
import styles from "../styles/Home.module.css"
import Login from "./Login";
export default function Home() {
    const [lista, setLista] = useState([])

    useEffect(() => {

        const receberlistaProdutos = async () => {
            try {
                const resposta = await fetch("https://fakestoreapi.com/products")
                const dados = await resposta.json()
                setLista(dados)
            } catch {
                alert("errou programador burro")
            }
        }
        receberlistaProdutos()
    }, [])
    if(lista.length === 0){
         return <Login/>
    }

    return (
        <>
            <h1 className={styles.h1} >Listao de produtos</h1>
       
               <ListarProdutos produtos={lista} />
        </>
    )
}