import React from 'react'

function AuctionDetails({ title, description, starting_price, current_price, reserve_price, end_date}) {
  return (
    <div>
      <h2>{title}</h2>
      <p 
        style={{
          fontStyle: 'Roboto',
          fontSize: '24px'
        }}
      >
        {description}
      </p>
      <div>
        <p>Current Price: ${current_price}</p>
        <p>Ends At: {end_date}</p>
        <p>{reserve_price}</p>
      </div>
    </div>
  )
}

export default AuctionDetails;












