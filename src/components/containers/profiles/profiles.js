/* eslint-disable react/button-has-type */
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { Grid, Image, Table } from "semantic-ui-react";
import PropTypes from "prop-types";
import Follow from "../Follow";
import * as profileActions from "../../../actions/profileActions";

const username = localStorage.getItem("username");

class Profile extends Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.getProfile(username);
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { userProfile } = this.props;
    // eslint-disable-next-line no-console
    console.log("this is the user profile", userProfile);
    return (
      <div>
        <Grid id="grid_system" centered columns={3}>
          <h2 id="username">{userProfile.username} </h2>
          <Follow />
          <Grid.Column>
            <div id="button">
              <Link to="/profile-edit" id="the-btn">
                <button id="profile-edit" className="ui basic black button">
                  Edit profile
                </button>
              </Link>
            </div>
            <Image
              className="profile__image"
              circular
              size="small"
              src={userProfile.image}
              floated="right"
              style={{ width: "130px", height: "130px" }}
            />
          </Grid.Column>
        </Grid>
        <h2 id="personal-info">Personal Information</h2>
        <Table basic="very" celled collapsing id="pull-right">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell> </Table.HeaderCell>
              <Table.HeaderCell> </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell className="yellow-with-large-padding">
                First Name
              </Table.Cell>
              <Table.Cell>{userProfile.First_name} </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell className="yellow-with-large-padding">
                Last Name
              </Table.Cell>
              <Table.Cell>{userProfile.Last_name}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell className="yellow-with-large-padding">
                Location
              </Table.Cell>
              <Table.Cell>{userProfile.location}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell className="yellow-with-large-padding">Bio</Table.Cell>
              <Table.Cell>{userProfile.bio}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell className="yellow-with-large-padding">
                Company
              </Table.Cell>
              <Table.Cell>{userProfile.company}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
  }
}

Profile.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    userProfile: state.profiles.profile
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(profileActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
