import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { FEED_QUERY } from './LinkList.js';

const POST_LINK_MUTATION = gql`
  mutation PostLinkMutation($url: String!, $description: String!) {
    postLink(url: $url, description: $description) {
      id
      url
      description
    }
  }
`

class CreateLink extends Component {
  state = {
    description: '',
    url: '',
  }

  render() {
    const { description, url } = this.state

    return (
      <div>
        <div className="flex flex-column mt3">
          <input 
            className="mb2"
            value={description}
            onChange={e => this.setState({ description: e.target.value })}
            type="text"
            placeholder="A description for the link"
          />
          <input 
            className="mb2"
            value={url}
            onChange={e => this.setState({ url: e.target.value })}
            type="text"
            placeholder="The URL for the link"
          />
        </div>
        <Mutation
          mutation={POST_LINK_MUTATION}
          variables={{ url, description }}
          onCompleted={() => this.props.history.push('/')}
          update={(store, { data: { postLink}}) => {
            const data = store.readQuery({query: FEED_QUERY})
            data.feed.unshift(postLink)

            store.writeQuery({
              query: FEED_QUERY, 
              data
            })
          }}
          >
          {(postLinkMutation) => (
            <button onClick={postLinkMutation}>
              Submit
            </button>
          )}
        </Mutation>
      </div>
    )
  }
}

export default CreateLink