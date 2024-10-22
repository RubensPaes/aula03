export default function ListarProdutos({ id, title, description, price, image }) {
    return (
        <div>
            <ul>
                <li>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <p>Preço: R${price}</p>
                    <img src={image} alt={title} width={100} />
                </li>

            </ul>

        </div>

    )
}