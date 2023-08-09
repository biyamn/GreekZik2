import React, { useContext } from 'react';
import Modal from '../UI/Modal';
import SubCartItem from './SubCartItem';
import classes from './SubCartModal.module.css';
import CartContext from '../../store/cartContext'; 

const SubCartModal = ({ hideSubCartHandler }) => {
  const { subCartItems, subCartTotalPrice } = useContext(CartContext);

  const cartItem = (
    <ul className={classes['cart-items']}>
      {subCartItems.map(item => 
        <SubCartItem 
          key={item.id} 
          id={item.id}
          name={item.name} 
          amount={item.amount} 
          price={item.price.toLocaleString(3)} 
        />
      )}
    </ul>
    );
    
  const commaSeparatedTotalPrice = subCartTotalPrice.toLocaleString(3);

  return (
    <Modal hideHandler={hideSubCartHandler}>
      <div>
        {cartItem}
      </div>
      <div className={classes.total}>
        <span>총액</span>
        <span>{commaSeparatedTotalPrice}원</span>
      </div>
      <div className={classes.actions}>
        <button 
          className={classes['button--alt']} 
          onClick={hideSubCartHandler}
        >
          닫기
        </button>
        {/* <button className={classes.button}>주문</button> */}
      </div>
    </Modal>
  );
};

export default SubCartModal;