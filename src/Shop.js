import React from "react";
import productJSON from "./products.json"
import "react-widgets/styles.css";
import mCrafts from "./images/mCrafts.png"
import Product from "./Product";
import shoppingCart from "./images/shoppingCart.svg"
import closeButton from "./images/closeButton.svg"

class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            basket: [],
            showBasket: false
        }
    }
    getBasketTotal() {
        let total = 0;
        for (let i = 0; i < this.state.basket.length; i++){
            total += this.state.basket[i].total
        }
        return total;
    }
    deleteFromBasket(index) {
        let basketCopy = this.state.basket; // copy basket for modification
        basketCopy.splice(index, 1); // remove item by index
        this.setState({ // change basket state
            basket: basketCopy
        });
    }
    clearBasket() {
        this.setState({
            basket: []
        });

    }
    changeQuantity(amount, index){
        let basketCopy = this.state.basket; // copy basket for modification
        let currentItem = basketCopy[index];
        currentItem.quantity += amount; // increase/decrease quantity of specific item
        if (currentItem.quantity < 1) {
            currentItem.quantity = 1;
        }
        currentItem.total = currentItem.quantity * currentItem.price; // update total cost of items
        this.setState({ // change basket state
            basket: basketCopy
        });
    }
    addToBasket = (props) => {
        if (props.quantity === 0) {
            // if number of selected products is 0 do nothing
            return;
        }
        if (this.state.basket.length === 0) {
            // if basket empty add product as first item
            this.setState({
                basket: [props]
            });
        }
        else {
            // basket has items
            for(let i = 0; i < this.state.basket.length; i++){
                // loop through to find duplicates
                let entry = this.state.basket[i]; // get current index
                if (entry.item === props.item && entry.variant === props.variant) {
                    // match is found
                    let updatedEntry = {
                        "quantity": entry.quantity + props.quantity,
                        "item": entry.item,
                        "variant": entry.variant,
                        "price": entry.price,
                        "total": (entry.quantity + props.quantity)*entry.price
                    };
                    let basketCopy = [...this.state.basket]; // can't change index of state arrays directly have to copy first
                    basketCopy[i] = updatedEntry;
                    this.setState({
                        basket: basketCopy,
                    });
                    break;
                }
                else {
                    this.setState({
                        basket: [...this.state.basket, props],
                    });
                }
            }
        }
    }
    render() {
        let basketShow;
        let basketCountShow;
        this.state.showBasket ? basketShow = {display: 'block'} : basketShow = {display: 'none'};
        this.state.basket.length > 0 ? basketCountShow = {display: 'block'} : basketCountShow = {display: 'none'};
        return (
            <div className={"page"} id={"shop"}>
                <div id={"basketContainer"} style={basketShow}>
                    <img alt={"closeButton"} src={closeButton} id={"closeButton"} onClick={() => this.setState({showBasket: false})}/>
                    <div className={"basketItem"}>
                        <div className={"item_section"} id={"quantity"}>Quantity</div>
                        <div className={"item_section"} id={"item"}>Item</div>
                        <div className={"item_section"} id={"variant"}>Variant</div>
                        <div className={"item_section"} id={"price"}>Cost</div>
                        <div className={"item_section"} id={"total"}>Total</div>
                        <div className={"item_section"} id={"deleteItem"}></div>
                    </div>
                    {this.state.basket.map((entry, index) =>
                        <div className={"basketItem"}>
                            <div className={"item_section"} id={"quantity"}>
                                <div id={"down"} className={"quantityChange"} onClick={() => this.changeQuantity(-1, index)}></div>
                                {entry.quantity}
                                <div id={"up"} className={"quantityChange"} onClick={() => this.changeQuantity(1, index)}></div>
                            </div>
                            <div className={"item_section"} id={"item"}>{entry.item}</div>
                            <div className={"item_section"} id={"variant"}>{entry.variant}</div>
                            <div className={"item_section"} id={"price"}>{entry.price}</div>
                            <div className={"item_section"} id={"total"}>{entry.total}</div>
                            <div className={"item_section"} id={"deleteItem"} onClick={() => this.deleteFromBasket(index)}>Delete</div>
                        </div>
                    )}
                    <div className={"basket_total"}>
                        <div className={"basket_total_object"} id={"basketTotalHeader"}>Total:</div>
                        <div className={"basket_total_object"} id={"basketTotal"}>{this.getBasketTotal()}</div>
                    </div>
                    <div className={"basketOptions"}>
                        <div
                            className={"purchaseButton"}
                            id={"clearAll"}
                            onClick={() => this.clearBasket()}
                        >
                            Clear All
                        </div>
                        <div
                            className={"purchaseButton"}
                            id={"buyNow"}
                            onClick={() => this.clearBasket()}
                        >
                            Buy Now
                        </div>
                    </div>
                </div>
                <div className={"shopTitle"}>
                    <h1>SHOP</h1>
                    <div
                        id={"shoppingCartSVGHolder"}
                        onClick={() => {
                            this.state.showBasket ? this.setState({showBasket: false}) : this.setState({showBasket: true})
                        }}
                         style={basketCountShow}
                    >
                        <img alt={"shoppingCart"} id={"shoppingCartSVG"} src={shoppingCart} />
                        <div className={"basketCount"} >{this.state.basket.length}</div>
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
