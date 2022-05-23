import '../../../style/midcontent.css'
import {SubMenuContainer} from "./SubMenuContainer";
import {CartItem} from "./CartItem";
import {useStateValue} from "../../../store/state-provider";


export const CartCheckOut = () => {
    const [{cart}] = useStateValue()
    console.log(cart)

    return (<div className="cart-checkout-contain">
            <div className="cart-container">
                <SubMenuContainer
                    name={'cart Items'}
                />
            </div>
            <div className="cart-items">
                {cart.map((item, i) => (
                    <CartItem
                        key={i}
                        itemId={item.itemId}
                        name={item.name}
                        imgSrc={item.imgSrc}
                        price={item.price}/>))}

            </div>
            <div className="total-section">
                <h3>Total</h3>
                <p>
                    <span>$ </span>45.0
                </p>
            </div>
            <button className="check-out">Check Out</button>
        </div>

    )
}
