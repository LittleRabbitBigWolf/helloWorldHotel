import React, { Component } from "react";
import Bookings from "./components/Bookings";
import Meals from "./components/Meals";
import Error from "./components/Error";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guestMealPlan: [],
      invalidBookings: [],
      guestNameList: [], //added
      guestDateList: [], //added
      dateToRender: [] //added
    };
  }

  generateMealPlan(meals) {
    // if (
    //   this.state.guestNameList.length !== 0 &&
    //   this.state.guestDateList.length !== 0
    // ) {
    //   for (let i = 0; i < this.state.guestNameList.length; i++) {}
    // }
  }

  invalidBookings = customerErrors => {
    const date_regex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
    const { guestNameList, guestDateList } = this.state;
    // for (let i = 0; i < guestDateList.length; i++) {
    //   while (guestNameList[i] && guestDateList[i].length != date_regex) {}
    // }

    // if (guestDateList !== 0) {
    //   for (let i = 0; i < guestDateList.length; i++) {
    //     let dateRange = guestDateList[i].split("to");
    //     if (date_regex.test(dateRange[0]) && date_regex.test(dateRange[1])) {
    //       let newDateToRender = this.state.dateToRender;
    //       let dateMove = new Date(dateRange[0]);
    //       while (dateRange[1] > dateRange[0]) {
    //         let strDate = dateMove.toISOString().slice(0, 10);
    //         newDateToRender.push(strDate);
    //         dateMove.setDate(dateMove.getDate() + 1);
    //       }
    //       console.log("look here...", newDateToRender);
    //     } else {
    //       return false;
    //     }
    //     // if (!date_regex.test(dateRange[0]) || !date_regex.test(dateRange[1])|| dateRange[1]-dateRange[0]<0 ) {
    //     // 	return false;
    //     // }else{

    //     // }
    //   }
    // }
  };

  getGuestInfo = (guestNameList, dates) => {
    let guestsArray = guestNameList.split("\n");
    let datesArray = dates.split("\n");
    this.setState(
      {
        guestNameList: guestsArray,
        guestDateList: datesArray
      },
      () => {
        console.log(this.state.guestNameList, this.state.guestDateList);
      }
    );
  };

  render() {
    const mealsForGuests = this.state.guestNameList.map((el, id) => {
      return <Meals key={id} name={el} dates={this.state.guestDateList[id]} />;
    });
    return (
      <div className="container-fluid">
        <center>
          <h2>HelloWorld Hotel</h2>
        </center>
        <div className="container">
          <Bookings
            handleGuestInfo={this.getGuestInfo}
            invalidBookings={this.invalidBookings}
          />
          {/* <Error
          // name={nameToDisplay}
          /> */}
          {mealsForGuests}
        </div>
      </div>
    );
  }
}
