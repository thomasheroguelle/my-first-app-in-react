import Button from "component/button/Button";   
import style from "./ProductDetails.module.css"



const product = {   // = un objet 

    id: 1,
    name: "Burger",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    price: 10,
    img: {
        src: "/IMG.png",
        alt: "photo d'un burger "
    },
    isAvailable: true

};

const showButton = product.isAvailable ? <Button /> : <h6>Le produit est indisponible</h6> 




const ProductDetails = () => {

    return (
        <section>
            <img className={style.img} src={product.img.src} alt={"product.img.alt"} />

            <div>
                <h1>{product.name}</h1>
                <h2>{product.description}</h2>
                <p>{product.price}</p>
                {showButton}
            </div>
        </section >
    )
}


export default ProductDetails;