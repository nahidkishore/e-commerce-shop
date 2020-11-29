import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import currencyFormatter from "currency-formatter";
import { BsDash,BsPlus } from "react-icons/bs";
const Details = () => {
  const [quantity,setQuantity]=useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.ProductReducer);
  console.log(product);
  useEffect(() => {
    dispatch({ type: "PRODUCT", id });
  }, [id]);


  const deQuantity=() =>{
    if(quantity>1){
      setQuantity(quantity-1)
    }
  }
  return (
    <div className="container mt-100">
      <div className="row">
        <div className="col-6">
          <div className="details__image">
            <img src={`/images/${product.image}`} alt="" />
          </div>
        </div>
        <div className="col-6">
          <div className="details__name">{product.name}</div>

          <div className="details__prices">
            <span className="details__actual">
              {currencyFormatter.format(product.price, { code: "USD" })}
            </span>
            <span className="details__discount">
              {currencyFormatter.format(product.discountPrice, { code: "USD" })}
            </span>
          </div>

          <div className="details__info">
            <div className="details__incDec">
            <span onClick={deQuantity} className="dec"> <BsDash/></span>
  <span className="quantity">{quantity}</span>
              <span onClick={()=> setQuantity(quantity+1)} className="inc"><BsPlus/> </span>
              <button className="btn-default">Add to Cart</button>
            </div>
           

          </div>

          <div className="details__p">
                    <h4>Details</h4>
                    {product.desc}
                </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
