import React from 'react';
import NewAuctionForm from './NewAuctionForm';
import { Auction } from '../requests';

const NewAuctionPage = (props) => {
  fucntion createAuction(params) {
    Auction.create(params)
      .then((auction) => {
        const id = auction.id;
        props.history.push(`/auctions/${id}`);
      })
  }

  return(
    <div>
      <NewQuestionForm createAuction={ createAuction } />
    </div>
  )
}


export default NewAuctionPage;












