import {ItemsCard} from "./ItemsCard";
import '../../../style/dish-item-cont.css'

export const DishItemContainer = ({data}) => {
    return (<div className="dish-item-container">
        {data && data.map((item) => (
            <ItemsCard key={item.id}
                       itemId={item.id}
                       name={item.name}
                       price={item.price}
                       rating={item.ratings}
                       imgSrc={item.imgSrc}

            />))}


    </div>)
}
