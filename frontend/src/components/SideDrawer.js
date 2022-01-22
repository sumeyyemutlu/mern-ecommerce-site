import { Link } from 'react-router-dom';
import './SideDrawer.css';

export const SideDrawer = ({show, click}) => {
    const sideDrawerClass = ["sidedrawer"];//buralarda ne yaptığını anlamadım.

    if(show) {
        sideDrawerClass.push("show");//buralarda ne yaptığını anlamadım.
    }
    return <div className={sideDrawerClass.join(" ")}>
        <ul className='sidedrawer__links' onClick={click}>
            <li>
                <Link to="/cart">
                <i className='fas fa-shopping-cart'></i>
                <span>
                    Cart <span className='sidedrawer__cartbadge'>0</span>
                </span>
                </Link>
            </li>
            <li>
                <Link to="/">Shop</Link>
            </li>

        </ul>
    </div>;
    
};
export default SideDrawer;
