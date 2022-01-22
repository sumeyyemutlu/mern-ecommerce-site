import * as actionTypes from '../constants/cartConstants';
import axios from 'axios';

export const addToCart =(id,qty) => async (dispatch) => {
    const {data} = await axios.get(`/api/products/${id}`);

    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            product: data._id,
            name:data.name,
            imageUrl: data.imageUrl,
            price:data.price,
            
        }

    })
}