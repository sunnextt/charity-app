import React, { Component } from 'react'

export class DonationComp extends Component {
    render() {
        return (<div>
          <div className="donationcomp-title">
            <h2>Donation</h2>
          </div>
          <div className="donationcomp-search">
            <div className="search">
              <input type="text" className="searchTerm" placeholder="search" />
              <button type="submit" className="searchButton">
                <ion-icon name="search-outline"></ion-icon>
              </button>
          </div>
          </div>
          <div className="donationcomp-suggesion">
            <div className="donationcomp-sidebar"></div>
            <div className="donationcomp-main"></div>
          </div>
        </div>
        )
    }
}

export default DonationComp
