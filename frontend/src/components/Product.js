import './Product.css';
import { Link } from 'react-router-dom';

 const Product = () => {
    return (
        
    <div className='product'>
        <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
         alt='PRODUCT NAME' />
        <div className='product__info'>
            <p className='info__name'> PlayStation 5 </p>
            
            <p className='info__price'>14.999,99 TL</p>
            <Link to={`/product/${1111}`} className='info__button'>Göster </Link>
            
        </div>
        </div>
    );
    
};
export default Product;