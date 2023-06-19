import Product from "../../Components/Product/Product";
import "../../Styles/productlist.css";

export default function ProductList(props){
    const arrProducts = [
        ['Milk', '13.00','Ordinary farmer`s milk.'],
        ['Wine', '68.00', 'Farmer`s wine.'],
        ['Sugar', '14.00', '1kg of ordinary sugar.']
    ];

    return(
        <div>
            {arrProducts.map(prod => {
                return (
                    <Product product={prod} className="prodList "></Product>
                )
            })}
            {props.children}
        </div>
    );
}