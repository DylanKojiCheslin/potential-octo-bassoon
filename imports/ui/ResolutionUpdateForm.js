import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const updateResolution = gql`
  mutation updateResolution($name: String!, $_id: String!) {
    updateResolution(name: $name, _id: $_id) {
      name
      _id
    }
  }
`;

class ResolutionUpdateForm extends Component {
updateForm = (event) => {
  event.preventDefault();
  const rezzy = this.props.resolution._id;
  this.props
    .updateResolution({
      variables: {
        name: this.name.value,
        _id:rezzy
      }
    })
    .then(({ data }) => {
      this.props.refetch();
    })
    .catch(error => {
      console.log(error);
    });
};

render() {
    return (
      <div> {this.props.resolution.name} {this.props.resolution._id}
      <form onSubmit={this.updateForm}>
          <input type="text" ref={input => (this.name = input)} />
          <button>Update</button>
        </form>
      </div>
    );
  }
}

export default graphql(updateResolution, {
  name: "updateResolution"
})(ResolutionUpdateForm);
