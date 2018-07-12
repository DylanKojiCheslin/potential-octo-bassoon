import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const deleteResolution = gql`
  mutation deleteResolution($_id: String!) {
    deleteResolution(_id: $_id) {
      Boolean
    }
  }
`;


class ResolutionDeleteForm extends Component {


constructor(props) {

  super(props)
  this.deleteForm = props.deleteForm.bind(this);
}

render() {
    return (
      <div>
        <button onClick={this.deleteForm}>Delete</button>
      </div>
    );
  }
}

export default graphql(deleteResolution, {
  name: "deleteResolution"
})(ResolutionDeleteForm);
