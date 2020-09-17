import React, { Component } from "react";

export default class Donation extends Component {
  render() {
    return (
      <div className="donation-page">
        <div className="donation-sidebar">
            <div className="search">
              <input type="text" className="searchTerm" placeholder="search" />
              <button type="submit" className="searchButton">
                <ion-icon name="search-outline"></ion-icon>
              </button>
          </div>
        </div>
        <div className="donation-main">
            <div className="donation-div">
              <form action="">
                <input
                  className="donation-list-input"
                  type="text"
                  placeholder="list item.."
                  name="list item"
                />
                <input
                  className="donation-list-quantity"
                  type="text"
                  placeholder="quanty.."
                  name="quanty"
                />
                <input
                  className="donation-list-purpose"
                  type="text"
                  placeholder="purpose.."
                  name="purpose"
                />
              </form>
              <a className="btn btn-white btn-position" href="#donaion">
                DONATION
              </a>
            </div>
        </div>
        ;
      </div>
    );
  }
}
