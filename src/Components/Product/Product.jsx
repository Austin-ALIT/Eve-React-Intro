import "../../Styles/product.css"

export default function Product(props){
    let prodArray = props.product;
    let prodName = prodArray[0];
    let prodPrice = prodArray[1];
    let prodDesc = prodArray[2];

    let classes = "clsProd " + props.className;

    return(
        <div className = {classes}>
            <p>Product {prodName}, price {prodPrice}</p>
            <p>Description: {prodDesc}</p>
        </div>
    );
}