import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import eachDayOfInterval from 'date-fns/eachDayOfInterval';

export default class Meals extends Component {
  render() {
    const dateRange = this.props.dateString.split(' to ');
    const dates =
      // TODO: Refactor the length handling.
      dateRange.length === 2 &&
      dateRange[1].length === 10 &&
      eachDayOfInterval({
        start: new Date(dateRange[0].split('-')),
        end: new Date(dateRange[1].split('-'))
      });

    const mealPlan =
      dates.length &&
      dates.map((dateRange, id) => {
        return (
          <div key={id} className="col-xs-12  col-sm-12 col-md-12 col-lg-12">
            <ol id="list">
              <li className="morning">
                Breakfast for {this.props.name} on {dateRange.toDateString()}
              </li>
              <li className="afternoon">
                Lunch for {this.props.name} on {dateRange.toDateString()}
              </li>
              <li className="night">
                Dinner for {this.props.name} on {dateRange.toDateString()}
              </li>
            </ol>
          </div>
        );
      });
    return <div>{mealPlan}</div>;
  }
}

// Uncomment the below snippet
// Meals.propTypes = {
// 	guestMealPlan: PropTypes.arrayOf(PropTypes.string)
// }
