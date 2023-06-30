import { useState } from "react";
import "../styles/SliderImgs.css";

const SliderImgs = ({ product }) => {
  const [indexImg, setIndexImg] = useState(0);

  const styleMovible = {
    transform: `translateX(calc((-${indexImg} / 3) * 100%))`,
  };

  const handlePrev = () => {
    if (indexImg - 1 >= 0) {
      setIndexImg(indexImg - 1);
    } else {
      setIndexImg(2);
    }
  };

  const handleNext = () => {
    if (indexImg + 1 <= 2) {
      setIndexImg(indexImg + 1);
    } else {
      setIndexImg(0);
    }
  };

  return (
    <>
      <div className="slider">
        <button onClick={handlePrev} className="slider__btn slider__left">
          &lt;
        </button>
        <div style={styleMovible} className="slider__movible">
          {product?.images.map((imgInfo) => (
            <div className="slider__img-content" key={imgInfo.url}>
              <img className="slider__img" src={imgInfo.url} alt="products" />
            </div>
          ))}
        </div>
        <button onClick={handleNext} className="slider__btn slider__right">
          &gt;
        </button>
      </div>
      <div className="slider__footer-main">
        <div className="slider__footer">
          {product?.images.map((imgInfo, i) => (
            <div
              className={`slider__footer-content ${
                i === indexImg && "slider__img-active"
              }`}
              key={imgInfo.url}
              onClick={() => setIndexImg(i)}
            >
              <img className="slider__img" src={imgInfo.url} alt="products" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SliderImgs;
