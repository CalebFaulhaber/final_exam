import React, { Component } from 'react';
import { Session } from './requests'


function App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  }

  componentDidMount () {
    Session.create({
      email: 'caleb@faul.com',
      password: 'supersecret'
    })
    .then(user => {
      this.setState((state) => {
        return {
          user: user
        }
      })
    })
  }

  return (
    <div className="container">
      <BrowserRouter>
        <Route exact path='/auctions'>
          <AuctionIndexPage/>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
