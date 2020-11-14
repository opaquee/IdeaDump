import React, {Component} from "react";
import "./Button.scss";

class Button extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button className="default-button">
                {this.props.children}
            </button>
        );
    }

}

export default Button;