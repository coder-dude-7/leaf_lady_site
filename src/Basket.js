import React from "react";

class Basket extends React.Component {
    constructor(props) {
        super(props);
        this.quantity = props.productEntry.quantity;
        this.item = props.productEntry.item;
        this.variant = props.productEntry.variant;
        this.price = props.productEntry.price;
        this.total = props.productEntry.total;
    }
    render() {

        return(
            <div className={"basketItem"}>
                <div>
                    <div className={"item_section"} id={"quantity"}>{this.quantity}</div>
                    <div className={"item_section"} id={"item"}>{this.item}</div>
                    <div className={"item_section"} id={"variant"}>{this.variant}</div>
                    <div className={"item_section"} id={"price"}>{this.price}</div>
                    <div className={"item_section"} id={"total"}>{this.total}</div>

                </div>
            </div>
        );
    }
}

export default Basket