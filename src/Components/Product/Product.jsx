import "../../Styles/product.css"

export default function Product(props){
    const {'product': prodName, 
        'price': prodPrice, 
        'description': prodDesc
    } = props.product;

    let classes = "clsProd " + props.className;

    return(
        <div className = {classes}>
            <p> Product {prodName}, price {prodPrice}</p>
            <p> Description: {prodDesc}</p>
        </div>
    );
}