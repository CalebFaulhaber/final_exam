import React from 'react'

const NewAuctionForm = ({createAuction}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget)
    const params = {
      title: formData.get('title'),
      body: formData.get('body')
    }
    createAuction(params)
  }
  return(
    <form onSubmit={ handleSubmit }>
      <div>
        <label htmlFor='title'>Title</label>
        <br/>
        <input name='title' id='title'/>
      </div>
      <div>
        <label htmlFor='description'>description</label>
        <textarea name='description' id='body'/>
        <br/>
      </div>
      <div>
        <label htmlFor='end_date'>Ends At</label>
        <datalist name='end_date' id='end_date'></datalist>
      </div>
      <div>
        <label htmlFor='reserve_price'>Reserve Price</label>
        <input name='reserve_price' id='reserve_price' />
      </div>
      <div>
        <input type='submit' value='Submit' />
      </div>
    </form>
  )
}

export default NewAuctionForm;


