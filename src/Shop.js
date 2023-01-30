import React from "react";
import productJSON from "./products.json"
import "react-widgets/styles.css";
import mCrafts from "./images/mCrafts.png"
import Product from "./Product";
import shoppingCart from "./images/shoppingCart.svg"

class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            basket: [],
            showBasket: false
        }
    }

    addToBasket = (props) => {
        if (props.quantity === 0) {
            return;
        }
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
        let basketShow;
        let basketCountShow;
        this.state.showBasket ? basketShow = {display: 'block'} : basketShow = {display: 'none'};
        this.state.basket.length > 0 ? basketCountShow = {display: 'block'} : basketCountShow = {display: 'none'};
        return (
            <div className={"page"} id={"shop"}>
                <div id={"basketContainer"} style={basketShow}>
                    {this.state.basket.map((entry, index) =>
                        <div className={"basketItem"}>
                            <div>
                                <div className={"item_section"} id={"quantity"}>{entry.quantity}</div>
                                <div className={"item_section"} id={"item"}>{entry.item}</div>
                                <div className={"item_section"} id={"variant"}>{entry.variant}</div>
                                <div className={"item_section"} id={"price"}>{entry.price}</div>
                                <div className={"item_section"} id={"total"}>{entry.total}</div>
                            </div>
                        </div>
                    )}
                </div>
                <div className={"shopTitle"}>
                    <h1>SHOP</h1>
                    <div id={"shoppingCartSVGHolder"} onClick={() => {
                        this.state.showBasket ? this.setState({showBasket: false}) : this.setState({showBasket: true})
                    }}>
                        <img id={"shoppingCartSVG"} src={shoppingCart} />
                        <div className={"basketCount"} style={basketCountShow}>{this.state.basket.length}</div>
                    </div>
                </div>
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