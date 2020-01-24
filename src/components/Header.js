import React from 'react';
import { connect } from 'react-redux';

const Header = props => {
  return (
    <div>
      <figure className="image is-128x128">
        <img src={props.imageOnProps} alt={props.nameOnProps} />
      </figure>
      <h2>{props.nameOnProps}</h2>
      <p>Amount: ${props.priceOnProps}</p>
    </div>
  );
};

// Step 2 - connect the components
// Use the connect() function to map out state from the Redux store to the component props
// Step 2a - wrap the component in the second connect() function call
// Step 2b - first function call takes in a function and an object
// Step 2b.i - the function we pass is usually named mapStateToProps

const mapStateToProps = state => {
  return {
    imageOnProps: state.car.image,
    nameOnProps: state.car.name,
    priceOnProps: state.car.price
  }
}

export default connect(
  mapStateToProps, // function
  {} // object
)(Header);