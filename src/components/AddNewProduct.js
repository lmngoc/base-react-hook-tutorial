import { useState } from "react";
const AddNewProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [size, setSize] = useState(0);
    const [color, setColor] = useState("");

    const [isShowDetail, setIsShowDetail] = useState(false);
    const handleClickBtn = () => {
        let obj = {
            name, price, size, color
        }

        let productList = localStorage.getItem("productList");
        if (productList) {
            let arr = JSON.parse(productList);
            arr.push(obj);
            localStorage.setItem("productList", JSON.stringify(arr));
        } else {
            localStorage.setItem("productList", JSON.stringify([obj]));
        }
        setName("");
        setPrice(0);
        setSize(0);
        setColor("");
    }
    const handleHideShow = () => {
        setIsShowDetail(!isShowDetail);
    }
    localStorage.setItem("name", "ngoc");
    const name1 = localStorage.getItem("name");
    console.log("check name local storage: ", name1)
    return (
        <div>
            {isShowDetail === true &&
                <fieldset>
                    <legend>Add new product</legend>
                    <div className="input-product">
                        <label>Name</label>
                        <input type="text" value={name} onChange={(event) => setName(event.target.value)}></input>
                    </div>
                    <div className="input-product">
                        <label>Price</label>
                        <input type="text" value={price} onChange={(event) => setPrice(event.target.value)}></input>
                    </div>
                    <div className="input-product">
                        <label>Size</label>
                        <input type="text" value={size} onChange={(event) => setSize(event.target.value)}></input>
                    </div>
                    <div className="input-product">
                        <label>Color</label>
                        <input type="text" value={color} onChange={(event) => setColor(event.target.value)}></input>
                    </div>
                    <button onClick={() => handleClickBtn()}>+ Add new</button>
                </fieldset>
            }
            {isShowDetail === true ? <div onClick={() => handleHideShow()}>Hide this form</div> : <div onClick={() => handleHideShow()}>Show this form</div>}
            <div>
                List product:
                {localStorage.getItem("productList")}
            </div>
        </div>
    )
}
export default AddNewProduct;