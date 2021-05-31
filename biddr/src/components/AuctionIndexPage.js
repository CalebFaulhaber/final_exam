import React, { Component } from 'react'
import { Auction } from '../requests'

class AuctionIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = { auctions : [] }
  }

  componentDidMount() {
    Auction.index()
    .then((auctions) => {
      this.setState((state) => {
        return {
          auctions: auctions
        }
      })
    })
  }

  

  render() {
    return(
      <main>
        <h1>Auctions</h1>
        <ul
          style={{
            listStyle: 'none',
            paddingLeft: 0
          }}
        >
          { this.state.auctions.map(({ id, title }) => {
            <li key={id}>
              <a href="#">{ id } - { title }</a>
            </li>
          }) }
        </ul>
      </main>
    )
  }
}


export default AuctionIndexPage








