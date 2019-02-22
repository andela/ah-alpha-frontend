/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/prop-types */
import React from "react";
import {
  Container,
  Grid, Form, Input
} from "semantic-ui-react";
import CKEditor from "react-ckeditor-component";
import CreatableSelect from "react-select/lib/Creatable";
import makeAnimated from "react-select/lib/animated";

import "../../assets/css/App.scss";

const CreateForm = ({ ...props }) => {
  const {
    title,
    body,
    selectedTags,
    handleSubmit,
    onChange,
    handleTagChange,
    handleBodyChange,
    fileHandler,
    options
  } = props;

  return (
    <Container className="articleEditor">
      <Grid divided="vertically">
        <Grid.Row>
          <Grid.Column>
            <Form onSubmit={handleSubmit}>
              <Form.Field>
                <Input
                  focus
                  name="title"
                  value={title}
                  onChange={onChange}
                  type="text"
                  placeholder=" Enter title"
                />
              </Form.Field>
              <br />
              <div>
                <label>Image</label>
                <br />
                <Input
                  focus
                  type="file"
                  placeholder="Enter Image"
                  onChange={fileHandler}
                />
              </div>
              <br />
              <br />
              <Form.Field>
                <CKEditor
                  content={body}
                  events={{
                    change: handleBodyChange
                  }}
                />
              </Form.Field>
              <Form.Field>
                <CreatableSelect
                  placeholder="Enter Tag"
                  closeMenuOnSelect={false}
                  components={makeAnimated()}
                  isMulti
                  options={options}
                  value={selectedTags}
                  onChange={handleTagChange}
                />
              </Form.Field>
              <button className="ui medium basic black button" type="submit">
                <i className="sign in icon" />
                Publish
              </button>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default CreateForm;
