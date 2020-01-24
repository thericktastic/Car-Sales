// Step 3 - build action creator functions to create and dispatch actions
// Dispatching happens under the hood

// 1 - action objects - have a type property to tell the reducer how to update state. Sometimes they have a payload property to pass data to the reducer.

// 2 - action creators - function that return action objects

// 3 - action types - a variable to save us from horrible misspelling errors that are hard to find and debug

// This is the action creator for adding a part
export const addFeature = feature => {
    // action object
    return { type: 'ADD_FEATURE', payload: feature }
}

// Step 3a - import the action creator into your component
// Step 3b - pass the action creator into the object in the connect function call

export const removeFeature = feature => {
    return { type: 'REMOVE_FEATURE', payload: feature }
}