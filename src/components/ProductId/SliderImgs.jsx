import { useState } from "react";
import "../styles/SliderImgs.css";

const SliderImgs = ({ product }) => {
  const [indexImg, setIndexImg] = useState(0);

  return (
    <div className="slider">
      <button className="slider__btn slider__left">&lt;</button>
      <div className="slider__movible">
        {product?.images.map((imgInfo) => (
          <div className="slider__img-content" key={imgInfo.url}>
            <img className="slider__img" src={imgInfo.url} alt="products" />
          </div>
        ))}
      </div>
      <button className="slider__btn slider__right">&gt;</button>
    </div>
  );
};

export default SliderImgs;
