import React from "react";
import "react-widgets/styles.css";
import {NumberPicker, DropdownList} from "react-widgets";

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
                        {/*<div
                            className={"purchaseButton"}
                            id={"addToBasket"}
                            onClick={() => this.callBackMethod()}
                        >
                            Add to Basket
                        </div>*/}
                        <button
                            className="big-button"
                            onClick={() => this.callBackMethod()}
                        >
                            Add to Basket
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;