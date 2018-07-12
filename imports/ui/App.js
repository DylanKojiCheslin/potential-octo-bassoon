import React from 'react';
import gql from "graphql-tag";
import {graphql} from "react-apollo";
import ResolutionsForm from "./ResolutionsForm";
import ResolutionListItem from "./ResolutionListItem"

const App = ({data}) => {
  if (data.loading) return null;
  return (
    <div>
      <h1>Whats up</h1>
      <ResolutionsForm refetch={data.refetch} />
      <ul>
        {data.resolutions.map(resolution => (
            <ResolutionListItem key={resolution._id + "listItem"} resolution={resolution}  deleteForm={this.deleteForm} />
        ))}
      </ul>
    </div>
  );
};


const resolutionsQuery = gql`
  {
    resolutions {
      _id
      name
    }
  }
`;

export default graphql(resolutionsQuery)(App);
