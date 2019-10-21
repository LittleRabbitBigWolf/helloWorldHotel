import React, { Component } from "react";
import { PropTypes } from "prop-types";

export default class Meals extends Component {
  render() {
    return (
      <div className="col-xs-12  col-sm-12 col-md-12 col-lg-12">
        <ol id="list">
          <li className="morning">Breakfast for {this.props.names}</li>
          <li className="afternoon">Lunch for {this.props.names}</li>
          <li className="night">Dinner for {this.props.names}</li>
        </ol>
      </div>
    );
  }
}

// Uncomment the below snippet
// Meals.propTypes = {
// 	guestMealPlan: PropTypes.arrayOf(PropTypes.string)
// }
