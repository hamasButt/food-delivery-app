import '../../../style/midcontent.css'
import {AddRounded, RemoveRounded} from "@mui/icons-material";
import {useEffect, useState} from "react";
import {useStateValue} from "../../../store/state-provider";
import {actionType} from "../../../store/reducer";

let cartItems = []

export const CartItem = ({name, imgSrc, price, itemId}) => {
    const [qty, setQty] = useState(1)
    const [{cart}, dispatch] = useStateValue()
    const [itemPrice, setPrice] = useState(
        parseInt(qty) * parseFloat(price)
    )
    useEffect(() => {
        cartItems = cart
        setPrice(parseInt(qty) * parseFloat(price))
    }, [qty])

    const updateQty = (action, id) => {
        if (action === 'add') setQty(qty + 1)
        else {
            if (qty == 1) {
                cartItems.pop(id)
                dispatch({
                    type: actionType.SET_CART,
                    cart: cartItems
                })
            }
            setQty(qty - 1)
        }
    }

    return (
        <div className="card-item">
            <div className="img-box">
                <img src={imgSrc} alt={name}/>
            </div>
            <div className="item-section">
                <h2 className="item-name">{name}</h2>
                <div className="item-qty">
                    <span>x{qty}</span>
                    <div className="qty">
                        <span>
                            <RemoveRounded
                                className="item-remove"
                                onClick={() => updateQty('remove', itemId)}/>
                        </span>
                        <span>
                            <AddRounded
                                className="item-add"
                                onClick={() => updateQty('add', itemId)}/>
                        </span>
                    </div>
                </div>
            </div>
            <p className="item-price">
                <span className="doller-sign">
                    $
                </span>
                <span className="item-price-val">{itemPrice}</span>
            </p>
        </div>
    )
}
