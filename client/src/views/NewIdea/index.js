import React, {Component} from "react";
import {
    Select,
    MenuItem,
    TextareaAutosize,
    FormControl,
    InputLabel,
    Checkbox,
    FormControlLabel
} from "@material-ui/core";
import Button from "../../components/Button";
import "./NewIdea.scss";

class NewIdea extends Component {

    render() {
        return (
            <div className="page-container">
                <div className="left-container">
                    <input
                        className="idea-title"
                        placeholder="My New Idea"/>
                    <h2>Upload Images</h2>
                    <TextareaAutosize
                        className="idea-description"
                        rowsMin={3}
                        placeholder="Write a detailed description for your idea!"/>
                </div>
                <div className="right-container">
                    <Button>Submit</Button>
                    <FormControlLabel
                        control={<Checkbox/>}
                        label="Allow everyone to view this idea"/>
                    <FormControl variant="outlined">
                        <InputLabel>Topic</InputLabel>
                        <Select label="Topic">
                            <MenuItem>Test 1</MenuItem>
                            <MenuItem>Test 2</MenuItem>
                            <MenuItem>Test 3</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
        );
    }

}

export default NewIdea;