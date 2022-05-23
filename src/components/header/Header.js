import React, {useEffect} from 'react'
import {BarChart, SearchRounded, ShoppingCartRounded} from "@mui/icons-material";
import '../../style/header.css'


function Header() {

    useEffect(() => {
        const togglemenu = document.querySelector('.toggle-menu')

        togglemenu.addEventListener('click', () => {
            document.querySelector('.right-menu').classList.toggle('active')
        })

    }, [])
    return (<header>
        <img
            src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Flogo.png?alt=media&token=fc228623-ef27-4af4-8ea5-b9ebeeaf47dc"
            className="logo"
            alt='logo'/>
        <div className="input-box">
            <SearchRounded className="search-icon"/>
            <input type="text" placeholder="Search"/>
        </div>

        <div className="shopping-cart">
            <ShoppingCartRounded className="cart"/>
            <div className="cart-content">
                <p>2</p>
            </div>
        </div>

        <div className="profile-container">
            <div className="img-box">
                <img
                    className="profile-pic"
                    src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fprofile.jpg?alt=media&token=36821495-39b9-4145-bde3-16c47c6ff937"
                    alt='img'/>
            </div>
            <h2 className="user-name">
                hamas butt
            </h2>
        </div>

        <div className="toggle-menu">
            <BarChart className="toggle-icon"/>
        </div>
    </header>)
}

export default Header
