import React from "react";
import productJSON from "./products.json"
import Select from 'react-select';


class Product extends React.Component {
    constructor(props) {
        super(props);
        this.name = props.name;
        this.image_path = props.image_path;
        this.description = props.description;
        this.price = Number(props.price/100);
        this.options = props.options;
        this.state = {
            selectedOption: this.options[0]
        }
    }
    render() {
        return (
            <div className={"product"}>
                <div id={"productTitle"}>
                    <h1>{this.name}</h1>
                </div>
                <img src={require("" + this.image_path)} id={"productImage"} alt={this.image_path}/>
                <div id={"productDescription"}>
                    {this.description}
                </div>
                <div id={"productPrice"}>
                    <h2>{"£" + this.price.toFixed(2)}</h2>
                </div>
                <div id={"productOptions"}>
                    <Select
                        className={"select_box"}
                        defaultValue={this.state.selectedOption}
                        options={this.options}
                        name={"options"}
                        isSearchable={false}
                        isClearable={false}
                    />
                    <div id={"purchase_button_holder"}>
                        <div className={"purchaseButton"} id={"addToBasket"}>Add to Basket</div>
                        <div className={"purchaseButton"} id={"buy"}>Buy Now!</div>
                    </div>
                </div>
            </div>
        )
    }
}

class Shop extends React.Component {
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
                        />
                    )}
                </div>
            </div>
        )
    }
}

export default Shop;