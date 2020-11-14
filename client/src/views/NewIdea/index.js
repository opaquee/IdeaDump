import React, { PureComponent } from "react";
import {
  Select,
  MenuItem,
  TextareaAutosize,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import { DropzoneDialog } from "material-ui-dropzone";
import Button from "../../components/Button";
import "./NewIdea.scss";

class NewIdea extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      uploadDialogOpen: false,
    };
  }

  render() {
    const { images, uploadDialogOpen } = this.state;
    return (
      <div className="page-container">
        <div className="left-container">
          <input className="idea-title" placeholder="My New Idea" />
          <h2>Upload Images</h2>
          <Button
            onClick={() => {
              this.setState({
                uploadDialogOpen: true,
              });
            }}
          >
            Add Image
          </Button>
          <DropzoneDialog
            dialogTitle="Upload Image"
            cancelButtonText="cancel"
            submitButtonText="upload"
            maxFileSize={5000000}
            open={uploadDialogOpen}
            onSave={(files) => {
              this.setState({
                images: files,
                uploadDialogOpen: false,
              });
            }}
            onClose={() => {
              this.setState({
                uploadDialogOpen: false,
              });
            }}
            acceptedFiles={["image/*"]}
            dropzoneText="Upload images for your idea"
            showPreviews
            showFileNamesInPreview
          />
          <div className="filename-list">
            {images.map((img) => {
              const { name } = img;
              return <p key={name}>{name}</p>;
            })}
          </div>
          <TextareaAutosize
            className="idea-description"
            rowsMin={3}
            placeholder="Write a detailed description for your idea!"
          />
        </div>
        <div className="right-container">
          <Button
            onClick={() => {
              console.log("Submit");
            }}
          >
            Submit
          </Button>
          <FormControlLabel
            className="checkbox"
            control={<Checkbox />}
            label="Allow everyone to view this idea"
          />
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
