import React, { Component } from "react";
import { PropTypes } from "prop-types";

export default class Error extends Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 error">
        <div id="list">
          <div className="error-msg">
            <i className="fa fa-times-circle" />
            <p>Error! No menu generated for {this.props.name}</p>
          </div>
        </div>
      </div>
    );
  }
}

// Uncomment the below snippet
//Error.propTypes = {
//	errorData: PropTypes.arrayOf(PropTypes.string)
//}
