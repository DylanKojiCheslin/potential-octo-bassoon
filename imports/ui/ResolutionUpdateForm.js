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
  const name = this.name.value;
  this.props
    .updateResolution({
      variables: {
        name: name,
        _id:rezzy
      }
    })
    .then(({ data }) => {
      // console.log(data);
      // console.log(this);
      console.log(this.props);
      this.setState({name:name});

      // this.props.refetch();
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
