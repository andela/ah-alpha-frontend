import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Button, Grid, Form, Image, Icon } from "semantic-ui-react";
import * as profileActions from "../../../actions/profileActions";
import imageUploader from "../../../api/image";

class EditProfile extends Component {
  constructor(props) {
    console.log("props value", { props });

    super(props);
    console.log("user info", props.profile.image);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      form: {
        bio: props.profile.bio,
        company: props.profile.company,
        First_name: props.profile.First_name,
        Last_name: props.profile.Last_name,
        location: props.profile.location,
        image: "https://res.cloudinary.com/dxecwuaqd/image/upload/v1550135907/rcyb1vzweuqptgvg8fpj.jpg"
      }
    };
  }

  fileHandler = (e) => {
    const selectFile = e.target.files[0];
    imageUploader({
      image: selectFile
    }).then(res =>
      this.setState({
        form: {
          image: res.data.secure_url
        }
      })
    );
  };

  onChange = e => {
    this.setState({
      // eslint-disable-next-line react/no-access-state-in-setstate
      ...this.state,
      // eslint-disable-next-line react/destructuring-assignment

      form: { ...this.state.form, [e.target.name]: e.target.value }
    });
    console.log("this is form state", this.state);
  };

  onSubmit = e => {
    e.preventDefault();
    const { actions, username, parent } = this.props;
    const { form } = this.state;
    console.log("this is form", form);

    actions.updateProfile(username, form);
  };

  render() {
    const { form } = this.state;
    console.log(form);
    return (
      <Form onSubmit={this.onSubmit} id="form" className="edit-form">
        <Grid id="grid_system" centered columns={3}>
          <h2>{form.username}</h2>
          <Grid.Column>
            <Image
              className="profile__image"
              type="file"
              circular
              size="small"
              src={form.image}
              floated="right"
              style={{ width: "130px", height: "130px"}}
            />
          </Grid.Column>
        </Grid>
        <Form.Field>
          <input type="file" onChange={this.fileHandler} style={{width: "200px"}}/>
        </Form.Field>
        <Form.Field>
          <label>First Name</label>
          <input
            name="First_name"
            placeholder="Edit your first name ..."
            value={form.First_name}
            onChange={this.onChange}
       
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            name="Last_name"
            placeholder="Edit your Last name ..."
            value={form.Last_name}
            onChange={this.onChange}
            
          />
        </Form.Field>
        <Form.Field>
          <label>Bio</label>
          <input
            name="bio"
            placeholder="Edit your bio ..."
            value={form.bio}
            onChange={this.onChange}
            
          />
        </Form.Field>
        <Form.Field>
          <label>Location</label>
          <input
            name="location"
            placeholder="Edit your location ..."
            value={form.location}
            onChange={this.onChange}
            
          />
        </Form.Field>
        <Form.Field>
          <label>Company</label>
          <input
            name="company"
            placeholder="Edit your company..."
            value={form.company}
            onChange={this.onChange}
           
          />
        </Form.Field>

        <Button type="submit" id="sbmt-btn">Update</Button>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profiles.profile
});

function mapDispatchToprops(dispatch) {
  return {
    actions: bindActionCreators(profileActions, dispatch),
    username: localStorage.getItem("username")
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToprops
)(EditProfile);
