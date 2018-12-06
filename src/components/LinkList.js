import React, { Component } from 'react';
import Link from './Link';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export const FEED_QUERY = gql`
  {
    feed {
      id
      url
      description
    }
  }
`

class LinkList extends Component {
  render() {
    return (
      <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>

          const linksToRender = data.feed

          return (
            <div>
              {linksToRender.map((link, index) => (
                <Link 
                  key={link.id} 
                  link={link} 
                  index={index}/>
              ))}
            </div>
          )
        }}
      </Query>
    )
  }
}

export default LinkList