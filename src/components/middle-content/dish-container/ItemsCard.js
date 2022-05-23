import {AddRounded, Favorite, StarRounded} from "@mui/icons-material";
import '../../../style/dish-item-cont.css'
import {useEffect, useState} from "react";
import {Items} from "../../../store/data";
import {useStateValue} from "../../../store/state-provider";
import {actionType} from "../../../store/reducer";

let cartItems = []
export const ItemsCard = ({imgSrc, name, price, rating, itemId}) => {
    const [isFavourite, setIsFavourite] = useState(false)
    const [currentVal, setCurrentVal] = useState(Math.floor(rating))
    const [isCart, setCart] = useState(null)
    const [{}, dispatch] = useStateValue()

    useEffect(() => {
        if (isCart) {
            cartItems.push(isCart)
            dispatch({
                type: actionType.SET_CART,
                cart: cartItems
            })
        }
    }, [isCart, dispatch])

    const handleRatings = (val) => {
        setCurrentVal(val)
    }

    return (<div className="item-cards" id={itemId}>
        <div className={`is-favourite ${isFavourite ? 'active' : ''}`}
             onClick={() => setIsFavourite(!isFavourite)}>
            <Favorite/>
        </div>
        <div className="img-box">
            <img src={imgSrc} alt={name} className="item-img"/>
        </div>
        <div className="item-content">
            <h3 className="item-name">{name}</h3>
            <div className="bottom">
                <div className="ratings">
                    {Array.apply(null, {length: 5}).map((n, i) => (<i key={i}
                                                                      className={`rating ${currentVal > i ? 'orange' : 'grey'}`}
                                                                      onClick={() => handleRatings(i + 1)}
                    >
                        <StarRounded/>
                    </i>))}
                    <h3 className="price"><span>$ </span>{price}</h3>
                </div>
                <i className="add-to-cart" onClick={() => setCart(Items.find(n => n.id === itemId))}>
                    <AddRounded/>
                </i>
            </div>
        </div>
    </div>)
}
