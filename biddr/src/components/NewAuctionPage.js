import React from 'react';
import NewAuctionForm from './NewAuctionForm';
import { Auction } from '../requests';

const NewAuctionPage = (props) => {
  function createAuction(params) {
    Auction.create(params)
      .then((auction) => {
        const id = auction.id;
        props.history.push(`/auctions/${id}`);
      })
  }

  return(
    <div>
      <NewAuctionForm createAuction={ createAuction } />
    </div>
  )
}


export default NewAuctionPage;












