import React from 'react';
import { connect } from 'react-redux';

// components
import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  console.log("This is props on AddedFeatures: ", props)
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.featuresOnProps.length ? (
        <ol type="1">
          {props.featuresOnProps.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
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
    featuresOnProps: state.car.features
  }
}

export default connect(
  mapStateToProps, // function
  {} // object
)(AddedFeatures);