import React, { Component } from 'react';
import Link from './Link';

const linksToRender = [
  {
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL'
  },
  {
    id: 'link-1',
    url: 'www.apollographql.com/',
    description: 'Apollo projects website'
  },
  {
    id: 'link-2',
    url: 'reactjs.org/',
    description: 'Website for React'
  },
]

class LinkList extends Component {
  render() {
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
  }
}

export default LinkList