import React, { Component } from "react";
import ResolutionUpdateForm from "./ResolutionUpdateForm";
import ResolutionDeleteForm from "./ResolutionDeleteForm";

class ResolutionListItem extends Component {

  deleteForm = (event) => {
    event.preventDefault();
    const rezzy = this.props.resolution._id;
    // const rezzy = "8THjgiTcKnqHg76C6";
    this.props
      .deleteResolution({
        variables: {
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

  constructor(props) {
    super(props);
    this.resolution = props.resolution;
  }

  render() {
    return (
      <li>
        <ResolutionUpdateForm key={this.resolution._id + "updateForm"} resolution={this.resolution} />
        <ResolutionDeleteForm key={this.resolution._id + "deleteForm"} deleteForm={this.deleteForm} resolution={this.resolution} />
      </li>
    )
  }
}
export default ResolutionListItem;
