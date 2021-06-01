import React, { Component } from 'react';
import AuctionsDetails from './AuctionDetails';
import { Auction } from '../requests';
import AuctionDetails from './AuctionDetails';

class AuctionShowPage extends Component {
  costructor(props) {
    super(props);
    this.state = { auction : {} }
  }

  componentDidMount() {
    Auction.show(this.props.match.params.id)
      .then((auction) => {
        this.setState((state) => {
          return {
            auction: auction
          }
        })
      })
  }




  render() {
    const { title, description, starting_price, current_price, reserve_price, end_date, created_at } = this.state.auction
    return (
      <main>
        <AuctionDetails
          title={ title }
          description={ description }
          current_price={ current_price }
          end_date={ end_date }
        />
        
      </main>
    )
  }
}


export default AuctionShowPage;









