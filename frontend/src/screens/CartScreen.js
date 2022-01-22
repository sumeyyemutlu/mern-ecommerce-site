import './CartScreen.css'

 //comonents
import CartItem from '../components/CartItem';

export const CartScreen = () => {
    return (<div className='cartscreen'>
        <div className='cartscreen__left'>
            <h2> Alışveriş Sepeti</h2>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            
        </div>
        <div className='cartscreen__right'>
            <div className='cartscreen__info'>
                <p>
                    Ara Toplam (0) ürün 
                </p>
                <p>
                    14.999,99 TL
                </p>
                
            </div>
            <div>
                <button>Sipariş Ver</button> 
            </div>
            
        </div>
        
        </div>
    )
}
export default CartScreen
