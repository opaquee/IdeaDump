import React, {Component} from "react";
import "./NewIdea.scss";
import Button from "../../components/Button";

class NewIdea extends Component {

    render() {
        return (
            <div className="page-container">
                <div className="left-container">
                    <input
                        className="idea-title"
                        placeholder="My New Idea"/>
                    <h2>Upload Images</h2>
                    <textarea
                        className="idea-description"
                        placeholder="Write a detailed description for your idea!"/>
                </div>
                <div className="right-container">
                    <Button>Submit</Button>
                    <div>
                        <input className="idea-public" type="checkbox" name="public"/>
                        <label for="public">Viewable to others</label>
                    </div>
                    <select className="category-select">
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