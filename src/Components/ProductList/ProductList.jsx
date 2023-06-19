import Product from "../../Components/Product/Product";
import "../../Styles/productlist.css";

export default function ProductList(props){
    const arrProducts = [
        {
            "product": 'Milk',
            "price": 13.00, 
            "description": 'Ordinary farmer`s milk.'
        }, 
        {
            "product": 'Wine',
            "price": 68.00, 
            "description": 'Farmer`s wine.'
        }, 
        {
            "product": 'Sugar',
            "price": 14.00, 
            "description": '1kg of ordinary sugar.'
        }
    ];

    return(
        <div>
            {arrProducts.map(p => {
                return (
                    <Product prod={p} className="prodList "></Product>
                )
            })}
            {props.children}
        </div>
    );
}