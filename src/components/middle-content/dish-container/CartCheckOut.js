import '../../../style/midcontent.css'
import { SubMenuContainer } from "./SubMenuContainer";
import { CartItem } from "./CartItem";
import { useStateValue } from "../../../store/state-provider";
import { Modal, Typography, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';


export const CartCheckOut = () => {
    const [open, setOpen] = useState(false)
    const [{ cart }] = useStateValue()
    const { modal, modalHeader } = useStyles()
    const [totalPrice, setTotal] = useState('')
    let sum = cart.reduce((prev, current) => {
        return (prev + +current.price)
    }, 0)
    useEffect(() => {
        setTotal(sum)

    }, [sum])
    const modalClose = (event, reason) => {
        if (reason === 'Clickaway') {
            return
        }
        else setOpen(false)
    }

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
                    price={item.price} />))}

        </div>
        <div className="total-section">
            <h3>Total</h3>
            <p>
                <span>$ </span>{totalPrice ? totalPrice : '0'}
            </p>
        </div>
        <button className="check-out" onClick={() => setOpen(true)}>Check Out</button>
        <Modal open={open} >
            <div className={modal}>
                <Typography variant='h6' className={modalHeader} >Your Order</Typography>
                {
                    cart.map((item, i) => {
                        return <ol key={i}>
                            <li>{item.name}</li>
                        </ol>
                    })
                }
                <Typography variant='h4'> Thankyou for Your Order
                </Typography>
                <Button color='secondary' variant='outlined' onClick={modalClose}>Close</Button>
            </div>
        </Modal>
    </div>

    )
}

const useStyles = makeStyles(theme => ({

    modal: {
        position: 'absolute',
        top: 0,
        backgroundColor: '#fff',
        bottom: 0,
        borderRadius: 20,
        left: 0,
        right: 0,
        width: 500,
        height: 600,
        margin: 'auto',

        [theme.breakpoints.down('sm')]: {
            width: "100vw",
            height: '100vh',
        }
    },
    modalHeader: {
        padding: '10px 20px',
        color: '#fff',
        fontWeight: 500,
        backgroundColor: '#f8901c',
        width: '100%'
    }

}))
