import React from 'react';
import Query from 'react-apllo';
import gql from 'graphql-tag';

const LibraryQuery  = gql `
  {
    items {
      id
      title
      user {
        email
      }
    }
}
`;

export default () => (
  <Query query={LibraryQuery}>
    {({data, loading}) => (
      <div>
        {loading
          ? 'loading...'
          : data.items.map(({ id, title, user }) => (
            <div key={id}>
              <b>{title}</b> {user ? `added by ${user.email}` : null}
            </div>
          ))}
      </div>
    )}
  </Query>
);