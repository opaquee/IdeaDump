import React, {Component} from "react";
import "./NewIdea.scss";

class NewIdea extends Component {

    render() {
        return (
            <div className="page-container">
                <div className="left-container">
                    <input placeholder="My New Idea"/>
                    <h2>Upload Images</h2>
                </div>
                <div className="right-container">
                    <button>SUBMIT</button>
                    <div>
                        <input type="checkbox" name="public"/>
                        <label for="public">Viewable to others</label>
                    </div>
                    <select>
                        <option>Test 1</option>
                        <option>Test 2</option>
                        <option>Test 3</option>
                    </select>
                </div>
            </div>
        );
    }

}

export default NewIdea;