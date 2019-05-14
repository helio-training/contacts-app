import React from 'react'
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const QUERY = gql`
  query {
    people {
      _id
      firstName
      lastName
      email
    }
  }
`

export default () => (
  <>
    <h1>People</h1>
    <Query query={QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        
        if(data.people.length === 0) {
          return <div>No people found</div>
        }
  
        return data.people.map(({ _id, firstName, lastName, email }) => (
          <div key={_id}>
            <div>{firstName} {lastName}</div>
            <div>{email}</div>
          </div>
        ));
      }}
    </Query>
  </>
)
