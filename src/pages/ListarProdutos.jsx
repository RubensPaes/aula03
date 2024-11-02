import styles from "../styles/ListarProdutos.module.css";

export default function ListarProdutos({ produtos }) {
    return (
        <div className={styles.container}>
            <ul>
                {produtos.map(produto => (
                    <li key={produto.id} className={styles.card}>
                        <img src={produto.image} alt={produto.title} />
                        <h2>{produto.title}</h2>
                        <p>{produto.price}</p>
                        <p>{produto.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
