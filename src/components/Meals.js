import React, { Component } from "react";
import { PropTypes } from "prop-types";
import eachDayOfInterval from "date-fns/eachDayOfInterval";

export default class Meals extends Component {
  render() {
    const dateRange = this.props.dateString.split(" to ");
    // console.log("look1", dateRange);
    const dates =
      dateRange.length === 2 &&
      dateRange[1].length === 10 &&
      eachDayOfInterval({
        start: new Date(dateRange[0].split("-")),
        end: new Date(dateRange[1].split("-"))
      });
    console.log("dates", dates);

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
            Breakfast for {this.props.name} on {this.props.dateString}
          </li>
          <li className="afternoon">
            Lunch for {this.props.name} on {this.props.dateString}
          </li>
          <li className="night">
            Dinner for {this.props.name} on {this.props.dateString}
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
