import React, {Component} from "react";
import "./NewIdea.scss";

class NewIdea extends Component {

    constructor() {
        super(props);
    }

    render() {
        return <div className="page-container">
            <input placeholder="My New Idea"/>
            <h2>Upload Images</h2>
        </div>
    ;
    }

}

export default NewIdea;