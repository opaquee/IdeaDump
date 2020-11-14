import React, { Component } from "react";
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
import ApiClient from "../../ApiClient";
import Button from "../../components/Button";
import "./NewIdea.scss";

class NewIdea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      images: [],
      description: "",
      topic: "",
      topicOptions: [],
      uploadDialogOpen: false,
    };
  }

  async componentDidMount() {
    await ApiClient.get("/topics").then((topics) => {
      this.setState({
        topicOptions: topics,
      });
    });
  }

  render() {
    const {
      title,
      images,
      description,
      topic,
      topicOptions,
      uploadDialogOpen,
    } = this.state;
    return (
      <div className="page-container">
        <div className="left-container">
          <input
            className="create-idea-title"
            placeholder="My New Idea"
            type="text"
            value={title}
            onChange={(e) => {
              this.setState({
                title: e.target.value,
              });
            }}
          />
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
            value={description}
            onChange={(e) => {
              this.setState({
                description: e.target.value,
              });
            }}
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
            <InputLabel id="topic-selector-label">Topic</InputLabel>
            <Select
              label="Topic"
              labelId="topic-selector-label"
              value={topic}
              onChange={(e) => {
                this.setState({
                  topic: e.target.value,
                });
              }}
            >
              {topicOptions.map((option) => {
                return (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
      </div>
    );
  }
}

export default NewIdea;
