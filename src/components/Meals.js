import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export default class Meals extends Component {
  render() {
    // const mealPlan =
    //   this.props.dates &&
    //   this.props.dates.map(dateRange => {
    //     return (
    //       <div className="col-xs-12  col-sm-12 col-md-12 col-lg-12">
    //         <ol id="list">
    //           <li className="morning">
    //             Breakfast for {this.props.name} on {dateRange}
    //           </li>
    //           <li className="afternoon">
    //             Lunch for {this.props.name} on {dateRange}
    //           </li>
    //           <li className="night">
    //             Dinner for {this.props.name} on {dateRange}
    //           </li>
    //         </ol>
    //       </div>
    //     );
    //   });
    return (
      // { mealPlan };
      <div className="col-xs-12  col-sm-12 col-md-12 col-lg-12">
        <ol id="list">
          <li className="morning">
            Breakfast for {this.props.name} on {this.props.dates}
          </li>
          <li className="afternoon">
            Lunch for {this.props.name} on {this.props.dates}
          </li>
          <li className="night">
            Dinner for {this.props.name} on {this.props.dates}
          </li>
        </ol>
      </div>
    );
  }
}

// Uncomment the below snippet
// Meals.propTypes = {
// 	guestMealPlan: PropTypes.arrayOf(PropTypes.string)
// }
