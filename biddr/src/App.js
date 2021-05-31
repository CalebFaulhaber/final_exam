import React, { Component } from 'react';
import AuctionIndexPage from './components/AuctionIndexPage'
import { Session } from './requests'


class App extends Component {
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

  render() {
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
}

export default App;
