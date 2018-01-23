import React from 'react';
import gql from "graphql-tag";
import {graphql} from "react-apollo";
import ResolutionsForm from "./ResolutionsForm";
import ResolutionUpdateForm from "./ResolutionUpdateForm";

const App = ({data}) => {
  if (data.loading) return null;
  return (
    <div>
      <h1>{data.hi}</h1>
      <ResolutionsForm refetch={data.refetch} />
      <ul>
        {data.resolutions.map(resolution => (
          <ResolutionUpdateForm key={resolution._id} resolution={resolution} refetch={data.refetch} />
        ))}
      </ul>
    </div>
  );
};


const hiQuery = gql`
  {
    hi
    resolutions {
      _id
      name
    }
  }
`;

export default graphql(hiQuery)(App);
