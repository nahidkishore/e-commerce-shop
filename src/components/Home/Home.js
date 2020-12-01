import React from "react";
import { useSelector } from "react-redux";
import Header from "../Header/Header";
import currencyFormatter from "currency-formatter";
import { Link } from "react-router-dom";

const Home = () => {
  const { products } = useSelector((state) => state.ProductReducer);
  console.log(products);

  return (
    <div>
      <Header></Header>

      <div className="container mt-100">
        <div className="row">
          {products.map((product) => (
            <div className="col-3" key={product.id}>
              <div className="product">
                <div className="product__img">
                  <Link to={`/details/${product.id}`}>
                    <img src={`../../images/${product.image}`} alt="" />
                  </Link>
                </div>
                <div className="product__name">{product.name}</div>
                <div className="row">
                  <div className="col-6">
                    <div className="product__price">
                      <span className="actualPrice">
                        {currencyFormatter.format(product.price, {
                          code: "USD",
                        })}
                      </span>
                      <span className="discount">{product.discount}%</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="product__discount__price">
                      {currencyFormatter.format(product.discountPrice, {
                        code: "USD",
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
