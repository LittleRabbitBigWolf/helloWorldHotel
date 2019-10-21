import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export default class Bookings extends Component {
  state = {
    guests: '',
    dates: ''
  };
  getGuestInfo = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => {
        console.log(this.state);
        this.props.handleGuestInfo(this.state.guests, this.state.dates);
      }
    );
  };

  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <textarea
            className="fullwidth guestList"
            ref="guestList"
            name="guests"
            type="text"
            placeholder="Enter the guest list (one guest per line)"
            onChange={this.getGuestInfo}
          />
        </div>
        <div className="col-xs-12  col-sm-6 col-md-6 col-lg-6">
          <textarea
            className="fullwidth guestDateList"
            ref="guestDateList"
            name="dates"
            type="text"
            placeholder="Enter the date range for each guests stay (one range per line)"
            onChange={e => {
              this.getGuestInfo(e);
              // this.props.invalidBookings();
            }}
          />
        </div>
      </div>
    );
  }
}

// Uncomment the below snippet
// Bookings.propTypes = {
// 	mealPlan: PropTypes.func,
// 	invalidBookings: PropTypes.func
// }
