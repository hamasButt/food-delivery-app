import {RowCards} from "./RowCards";
import '../../../style/row-cont.css'
import {MenuItems} from '../../../store/data';
import {useEffect} from "react";

export const RowContainer = ({setData}) => {

    useEffect(() => {
        const menuCards = document
            .querySelector('.row-container')
            .querySelectorAll('.row-menu-card')

        const setCardActive = (active) => {
            menuCards.forEach(n => n.classList.remove('active'))
            active.classList.add('active')
        }

        menuCards.forEach((num) => num.addEventListener('click', () => setCardActive(num)))

    }, [])

    return (
        <div className="row-container">
            {MenuItems
                && MenuItems.map((item) => (
                    <div key={item.id}
                         onClick={() => setData(item.itemId)}>
                        <RowCards
                            isActive={item.id === 1}
                            imgSrc={item.imgSrc}
                            name={item.name}/>
                    </div>
                ))}


        </div>
    )
}
