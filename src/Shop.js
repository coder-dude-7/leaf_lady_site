import React from "react";
import productJSON from "./products.json"
import "react-widgets/styles.css";
import mCrafts from "./images/mCrafts.png"
import Product from "./Product";

class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            basket: []
        }
    }

    addToBasket = (props) => {
        if (this.state.basket.length < 1) {
            this.setState({
                basket: [...this.state.basket, props]
            });
        }
        else{
            for(let i = 0; i < this.state.basket.length; i++){
                let entry = this.state.basket[i];
                if (entry.item === props.item && entry.variant === props.variant) {
                    let updatedEntry = {
                        "quantity": entry.quantity + props.quantity,
                        "item": entry.item,
                        "variant": entry.variant,
                        "price": entry.price,
                        "total": (entry.quantity + props.quantity)*entry.price
                    };
                    let basketCopy = [...this.state.basket];
                    basketCopy[i] = updatedEntry;
                    this.setState({
                        basket: basketCopy
                    });
                }
                else {
                    this.setState({
                        basket: [...this.state.basket, props]
                    });
                }
            }
        }
        console.log(this.state.basket)
    }
    render() {
        return (
            <div className={"page"} id={"shop"}>
                <h1>SHOP</h1>
                <div className={"product_container"}>
                    {productJSON.products.map((product) =>
                        <Product
                            name={product.name}
                            image_path={product.image_path}
                            description={product.description}
                            price={product.price}
                            options={product.options}
                            sendData={this.addToBasket}
                        />
                    )}
                </div>
                <div className={"mCraftImageHolder"}>
                    <img alt={"Melissa Crafts"} src={mCrafts} id={"mCraftsImage"} onClick={() => window.open("https://www.instagram.com/m_creative_crafts/", "_blank")}/>
                </div>
            </div>
        )
    }
}

export default Shop;