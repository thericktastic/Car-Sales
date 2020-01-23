import React from 'react';
import { connect } from 'react-redux';

// components
import AdditionalFeature from './AdditionalFeature';


const AdditionalFeatures = props => {
  console.log("This is props in AdditionalFeaturess: ", props)
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeaturesOnProps.length ? (
        <ol type="1">
          {props.additionalFeaturesOnProps.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

// export default AdditionalFeatures;


// Step 2 - connect the components
// Use the connect() function to map out state from the Redux store to the component props
// Step 2a - wrap the component in the second connect() function call
// Step 2b - first function call takes in a function and an object
// Step 2b.i - the function we pass is usually named mapStateToProps

const mapStateToProps = state => {
  return {
    additionalFeaturesOnProps: state.additionalFeatures
  }
}

export default connect(
  mapStateToProps, // function
  {} // object
)(AdditionalFeatures);