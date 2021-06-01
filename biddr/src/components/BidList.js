import React from 'react'
import BidDetails from './BidDetails'


function BidList(props) {
  const bids = props.bids
  return (
    <div>
      {
        bids?

        bids.map(({ price, created_at }, index) => (
          <BidDetails
            price={price}
            created_at={created_at.toLocalString()}
            />   
        ))
        :
        null
      }
    </div>
  )
}


export default BidList


