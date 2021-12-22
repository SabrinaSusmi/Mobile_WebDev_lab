import React from 'react';
//import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import './products.css';

const Product = (props) => { 
  const handleClick = (e) => { 
    props.sortAfterClick(props.id);
  };
  return (
    <div className='body'>
      <div className='list_left'>
        <img className='product_image' src={props.image} alt='product' />
      </div>
      <div className='list_right'>
        <div className='icon_body'>
          <div className='product_upvote' onClick={handleClick}>
            {/* <ArrowDropUpIcon /> */}
          </div>
          <div className='product_upvoteCount'>{props.upvote}</div>
        </div>
        <div>
          <div className='product_title'>{props.title}</div>
          <div className='product_description'>{props.description}</div>
        </div>
          <div className='product_submit'>Submitted By: { " " }
          <img
            className='product_avatar'
            src={props.submittedby}
            alt='product'
          />
          </div>
      </div>
    </div>
  );
};

export default Product;
