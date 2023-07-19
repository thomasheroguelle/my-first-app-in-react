import { IProduct } from "mock.ts/product";

interface ProductCardProps { // va demander les infos qui sont dans l'interface
    item : IProduct;

}

const ProductCard = (props : ProductCardProps) => {
   const {item} = props; // concept de destructuration
   const {price, title, description} = item;
    return (<article>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{price}</p>
    </article>)
}

export default ProductCard;