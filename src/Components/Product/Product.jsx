import "../../Styles/product.css"

export default function Product(props){
    let prodObj = props.product;

    let classes = "clsProd " + props.className;

    return(
        <div className = {classes}>
            <p> Product {prodObj['product']}, price {prodObj['price']}</p>
            <p> Description: {prodObj['description']}</p>
        </div>
    );
}