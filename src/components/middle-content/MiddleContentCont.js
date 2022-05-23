import React from "react";
import '../../style/midcontent.css'
import { BannerName } from "./BannerName";
import { DishContainer } from "./dish-container/DishContainer";
import { RightMenu } from "./dish-container/RightMenu";
import { useStateValue } from "../../store/state-provider";
import { useEffect, useState } from "react";
import { Items } from "../../store/data";

export const MiddleContentCont = () => {
    const [{ cart }] = useStateValue()
    const [mainDataItem, setMainDataItem] = useState(
        Items.filter(elem => elem.itemId === 'buger01')
    )

    const setData = (itemId) => {
        setMainDataItem(Items.filter(elem => elem.itemId === itemId))
    }

    useEffect(() => {
        console.log('Loaded');

    }, [mainDataItem, cart])


    return (<main>
        <div className="main-container">
            <div className="banner">
                <BannerName
                    name={'hamas'}
                    discount={"50"}
                    link={"#"}
                />
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdelivery.png?alt=media&token=69b9823d-96df-452a-bd4e-14d27a4cc337"
                    alt="delivery"
                    className="delivery-pic" />
            </div>

            <DishContainer
                data={mainDataItem}
                setData={(item) => setData(item)}
            />
        </div>
        <RightMenu
            cart={cart} />
    </main>

    )
}
