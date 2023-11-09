import "./Product.scss";
import sneaker1 from "../../assets/images/sneaker1.jpg";
import sneaker2 from "../../assets/images/sneaker2.jpg";
import sneaker3 from "../../assets/images/sneaker3.jpg";
import sneaker4 from "../../assets/images/sneaker4.jpg";
import { useState } from "react";
import Lightbox from 'react-image-lightbox';
const Product = () => {
    const [currentUpImg, setCurrentUpImg] = useState(sneaker1);
    const [isOpen, setIsOpen] = useState(false);
    const images = [
        sneaker1,
        sneaker2,
        sneaker3,
        sneaker4,
    ];
    const [photoIndex, setPhotoIndex] = useState(0);
    const handleClickPreviewImg = () => {
        let index = images.findIndex(item => item === currentUpImg);
        setPhotoIndex(index);
        setIsOpen(true);
    }
    return (
        <div>
            <div className="product-container">
                <div className="content-left">
                    <div className="img-up">
                        <img src={currentUpImg} alt="" onClick={() => handleClickPreviewImg()} />
                    </div>
                    <div className="img-down">
                        <div className="img-small">
                            <img src={sneaker1} alt="" onClick={() => setCurrentUpImg(sneaker1)} className={currentUpImg === sneaker1 ? "active" : ""} />
                        </div>
                        <div className="img-small">
                            <img src={sneaker2} alt="" onClick={() => setCurrentUpImg(sneaker2)} className={currentUpImg === sneaker2 ? "active" : ""} />
                        </div>
                        <div className="img-small">
                            <img src={sneaker3} alt="" onClick={() => setCurrentUpImg(sneaker3)} className={currentUpImg === sneaker3 ? "active" : ""} />
                        </div>
                        <div className="img-small">
                            <img src={sneaker4} alt="" onClick={() => setCurrentUpImg(sneaker4)} className={currentUpImg === sneaker4 ? "active" : ""} />
                        </div>
                    </div>
                </div>
                <div className="content-right">
                    <div className="title">Giày sneaker nam New Balance Classic - MS327PWB</div>
                    <div className="price">1.198.000₫</div>
                    <div className="size">37</div>
                    <div className="action">
                        <label>Số lượng</label>
                        <input type="number" min={1} value={1} className="quantity"></input>
                        <button className="buy">Chọn mua</button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() =>
                        setPhotoIndex((photoIndex + images.length - 1) % images.length)
                    }
                    onMoveNextRequest={() =>
                        setPhotoIndex((photoIndex + 1) % images.length)
                    }
                    animationDuration={500}
                />
            )}
        </div>
    )
}
export default Product;