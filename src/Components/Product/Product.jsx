import "../../Styles/product.css";

export default function Product(props){
    const {product, price, description} = props.prod; // Credit to Morgan. 

    return(
        <div className = "clsProd prodList">
            <p> Product {product}, price {price}</p>
            <p> Description: {description}</p>
        </div>
    );
}