import React from "react";
import { connect } from "react-redux";

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.priceOnProps + props.additionalPriceOnProps}</h4>
    </div>
  );
};

// export default Total;

// Step 2 - connect the components
// Use the connect() function to map out state from the Redux store to the component props
// Step 2a - wrap the component in the second connect() function call
// Step 2b - first function call takes in a function and an object
// Step 2b.i - the function we pass is usually named mapStateToProps

const mapStateToProps = state => {
  return {
    priceOnProps: state.car.price,
    additionalPriceOnProps: state.additionalPrice
  };
};

export default connect(
  mapStateToProps, // function
  {} // object
)(Total);
