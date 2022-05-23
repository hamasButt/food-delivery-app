import {MenuCard} from "./MenuCard";
import {RowContainer} from "./RowContainer";
import {DishItemContainer} from "./DishItemContainer";
import '../../../style/dish-container.css'

export const DishContainer = ({data, setData}) => {
    return (
        <div className="dish-container">
            <MenuCard/>
            <RowContainer setData={setData}/>
            <DishItemContainer data={data}/>
        </div>
    )
}
