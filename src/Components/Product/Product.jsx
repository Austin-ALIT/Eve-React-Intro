import "../../Styles/product.css";

export default function Product(props){
    const {product, price, description} = props.prod; // Credit to Morgan. 

    let classes = "clsProd " + props.className;

    return(
        <div className = {classes}>
            <p> Product {product}, price {price}</p>
            <p> Description: {description}</p>
        </div>
    );
}