import React from "react";
import productJSON from "./products.json"
import "react-widgets/styles.css";
import {NumberPicker, DropdownList} from "react-widgets";
import mCrafts from "./images/mCrafts.png"


class Product extends React.Component {
    constructor(props) {
        super(props);
        this.name = props.name;
        this.image_path = props.image_path;
        this.description = props.description;
        this.price = Number(props.price/100);
        this.options = props.options;
        this.state = {
            selectedOption: this.options[0],
            quantity: 0
        }
        this.changeQuantity = this.changeQuantity.bind(this);
        this.changeOption = this.changeOption.bind(this);
    }

    callBackMethod() {
        let data = {
            "quantity": this.state.quantity,
            "item": this.name,
            "variant": this.state.selectedOption,
            "price": this.price,
            "total": this.price*this.state.quantity
        }
        this.props.sendData(data)
    }

    changeQuantity(new_value){
        this.setState({
            quantity: new_value
        });
    }
    changeOption(new_option){
        this.setState({
            selectedOption: new_option
        });
    }
    /*addToBasket() {

    }*/
    render() {
        return (
            <div className={"product"}>
                <div id={"productTitle"}>
                    <h1>{this.name}</h1>
                </div>
                <div className={"product_image_holder"}>
                    <img src={require("" + this.image_path)} id={"productImage"} alt={this.image_path}/>
                    <div id={"productDescription"}>{this.description}</div>
                </div>
                <div id={"productPrice"}>
                    <h2>{"£" + this.price.toFixed(2)}</h2>
                </div>
                <div id={"productOptionsHolder"}>
                    <div id={"productOptions"}>
                        <DropdownList
                            id={"select_box"}
                            data={this.options}
                            onChange={(value) => this.changeOption(value)}
                            value={this.state.selectedOption}
                        />
                        <NumberPicker
                            id={"quantity_select"}
                            value={this.state.quantity}
                            step={1}
                            min={0}
                            onChange={(value) => this.changeQuantity(value)}
                        />
                    </div>
                    <div id={"purchase_button_holder"}>
                        <div
                            className={"purchaseButton"}
                            id={"addToBasket"}
                            onClick={() => this.callBackMethod()}
                        >
                            Add to Basket
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

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
                    <img src={mCrafts} id={"mCraftsImage"} onClick={() => window.open("https://www.instagram.com/m_creative_crafts/", "_blank")}/>
                </div>
            </div>
        )
    }
}

export default Shop;