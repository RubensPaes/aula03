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

    const orderAz = () =>{
        const listaAux = [...lista].sort((a,b)=> a.title.localeCompare(b.title))
        setLista(listaAux)
    }

    const orderZa = () =>{
        const listaB = [...lista].sort((a,b)=> b.title.localeCompare(a.title))
        setLista(listaB)
    }

    const precoM = ()=>{
        const listaP = [...lista].sort((a,b)=> {
            if(a.price >= b.price){
              return  1
            } else{
                return -1
            }
        })
        setLista(listaP)
    }

    const precoMenor = ()=>{
        const listaP = [...lista].sort((a,b)=> {
            if(a.price >= b.price){
              return  -1
            } else{
                return 1
            }
        })
        setLista(listaP)
    }


    return (
        <>
            <h1 className={styles.h1} >Listao de produtos</h1>
            <button onClick={()=> orderAz()}>Az</button>
            <button onClick={()=> orderZa()}>Za</button>
            <button onClick={()=> precoM()}>ValorMenor</button>
            <button onClick={()=> precoMenor()}>ValorMaior</button>
       
               <ListarProdutos produtos={lista} />
        </>
    )
}