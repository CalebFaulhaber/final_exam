import React from 'react'

function BidDetails({ price, created_at }) {
  return (
    <div>
      <p style={{ marginLeft: '20px' }}>${price} on {created_at}</p>
    </div>
  )
}




export default BidDetails

