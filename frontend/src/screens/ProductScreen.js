import './ProductScreen.css';

export const ProductScreen = () => {
    return (
        <div className='productscreen'>
           <div className='productscreen__left'>
               <div className='left__image'>
                   <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
                   alt="product name"/>
                </div>
                <div className='left__info'>
                    <p className='left__name'>PlayStation 5</p>
                    <p> Fiyat: 14.999,99 TL</p>
                    <p> Ultra yüksek hızlı SSD ile yıldırım hızında yüklemenin yanı sıra dokunsal geri bildirim, uyarlanabilir tetikler ve 3D 
                           Ses desteğiyle daha derin bir etkileyicilik deneyimleyin
                            ve yeni nesil PlayStation oyunlarını keşfedin. </p> 
                </div>
           </div>
           <div className='productscreen__right'>
               <div className='right__info'>
                   <p>
                       Fiyat: <span> 14.999,99</span>
                   </p>
                   <p>
                       Stok: <span> Mevcut</span>
                   </p>
                   <p>
                       Adet: 
                       <select>
                           <option value="1">1</option>
                           <option value="2">2</option>
                           <option value="3">3</option>
                           <option value="4">4</option>
                       </select>
                   </p>
                   <p>
                       <button type='button'>Sepete Ekle</button>
                   </p>
               </div>
           </div>
        </div>
    )
}

export default ProductScreen