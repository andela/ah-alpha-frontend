/* eslint-disable react/destructuring-assignment */
/* eslint-disable object-shorthand */
/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as createArticleActions from "../../../actions/articles/createArticleActions";
import CreateForm from "../../articles/createArticalForm";
import imageUploader from "../../../api/image";

export class createArticles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      tags: [],
      image: "/"
    };
  }

  componentDidMount() {
    const { actions } = this.props;
    actions.getTags();
  }

  getOptions = () => {
    const { tags } = this.props;
    const options = [];
    let tag;
    for (let i = 0; i < tags.tags.length; i += 1) {
      tag = tags.tags[i];
      options.push({ value: tag, label: tag });
    }
    return options;
  };

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleBodyChange = (event) => {
    const content = event.editor.getData();
    this.setState({
      body: content
    });
  };

  handleTagChange = (selectedTags) => {
    const tagList = [];
    selectedTags.map(tagObject => tagList.push(tagObject.value));

    this.setState({ tags: tagList });
  };

  fileHandler = (e) => {
    const selectFile = e.target.files[0];
    imageUploader({
      image: selectFile
    }).then(response => this.setState({
    // eslint-disable-next-line indent
    image: response.data.secure_url
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const {
      title, body, tags, image
    } = this.state;
    const articleData = {
      title: title,
      body: body,
      tags: tags,
      image_path: image
    };
    this.props.actions.createArticle(articleData);
  };

  render() {
    const { title, body } = this.state;
    const options = this.getOptions();

    return (
      <div>
        <CreateForm
          title={title}
          body={body}
          onChange={this.onChange}
          options={options}
          handleSubmit={this.handleSubmit}
          handleBodyChange={this.handleBodyChange}
          handleTagChange={this.handleTagChange}
          fileHandler={this.fileHandler}
        />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  articles: state.createArticles,
  tags: state.createArticles,
  errors: state.errors
});

export const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(createArticleActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(createArticles);
