import './Navbar.css';
import { Link } from 'react-router-dom';

export const Navbar = ({click}) => {
    return (
        <nav className="navbar">
            {/*logo*/}
            <div className="navbar__logo">
                <h2>E-ticaret sitesi</h2>
            </div>
                
            <ul className="navbar__links">
                <li>
                    <Link to ="/cart" className='cart__link'>
                    <i className='fas fa-shopping-cart'></i>
                    <span>
                     Sepetim
                        <span className='cartlogo__badge'>0</span>
                    </span>
                    </Link>
                </li>
                <li>
                    <Link to ="/">
                        Shop
                    </Link>
                </li>
            </ul>
      
            <div className='hamburger_menu' onClick={click}>  {/*hamburger menusune tıklandığında acılır hale getiriyoruz.*/}
                <div></div>
                <div></div>
                <div></div>
            </div>
          
                
          
            
        </nav>
    )
}

export default Navbar