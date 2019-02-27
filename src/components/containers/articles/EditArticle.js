/* eslint-disable react/destructuring-assignment */
/* eslint-disable object-shorthand */
/* eslint-disable no-shadow */
import React, { Component } from "react";
import { connect } from "react-redux";
import { editArticle } from "../../../actions/articles/editArticleActions";
import { getTags } from "../../../actions/articles/createArticleActions";
import imageUploader from "../../../api/image";
import EditForm from "../../articles/editArticleForm";

export class EditArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      image: props.image,
      body: props.body,
      tags: props.tags,
      slug: props.slug
    };
  }

  componentDidMount() {
    const { getTags } = this.props;
    getTags();
  }

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  getArticleTags = () => {
    const { tags } = this.state;
    const articleTags = [];
    let tag;
    for (let i = 0; i < tags.length; i += 1) {
      tag = tags[i];
      articleTags.push({ value: tag, label: tag });
    }
    return articleTags;
  };

  getOptions = () => {
    const { allTags } = this.props;
    const options = [];
    let tag;
    for (let i = 0; i < allTags.tags.length; i += 1) {
      tag = allTags.tags[i];
      options.push({ value: tag, label: tag });
    }
    return options;
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

  handleSubmit = (e) => {
    e.preventDefault();

    const {
      slug, title, body, tags, image
    } = this.state;
    const articleData = {
      title: title,
      body: body,
      tags: tags,
      image_path: image
    };
    this.props.editArticle(slug, articleData);
  };

  render() {
    const {
      title, image, body, slug
    } = this.state;

    const options = this.getOptions();
    const articleTags = this.getArticleTags();

    return (
      <div>
        <EditForm
          title={title}
          image={image}
          body={body}
          slug={slug}
          articleTags={articleTags}
          onChange={this.onChange}
          options={options}
          handleBodyChange={this.handleBodyChange}
          handleTagChange={this.handleTagChange}
          fileHandler={this.fileHandler}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  slug: state.fetchOneArticle.article.slug,
  title: state.fetchOneArticle.article.title,
  body: state.fetchOneArticle.article.body,
  image: state.fetchOneArticle.article.image_path,
  tags: state.fetchOneArticle.article.tags,
  allTags: state.createArticles
});

export const mapDispatchToProps = dispatch => ({
  getTags: () => dispatch(getTags()),
  editArticle: (slug, data) => dispatch(editArticle(slug, data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditArticle);
