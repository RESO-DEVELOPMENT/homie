import React from 'react'
import style from './Backdrop.module.css'

const Backdrop = ( {handleCartClose, isCartOpen} ) => {

    const backdropClass = isCartOpen ? `${style.backDrop} ${style.active}` : style.backDrop;

    return <div className={backdropClass} onClick={handleCartClose}></div>;
}

export default Backdrop
