const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing Detail Package", price: 1500 },
    { id: 3, name: "Premium Sound System", price: 500 },
    { id: 4, name: "Rear Spoiler", price: 250 }
  ]
};

export const partReducer = (state = initialState, action) => {
  // console.log("This is state and action in reducer: ", state, action)
  console.log("This is action.payload: ", action.payload);
  switch (action.type) {
    case "ADD_FEATURE":
      return {
        ...state,
        additionalPrice: state.additionalPrice + action.payload.price,
        car: {
          ...state.car,
          features: [...state.car.features, action.payload]
        }
      };
    case "REMOVE_FEATURE":
      return {
        ...state,
        additionalPrice: state.additionalPrice - action.payload.price,
        car: {
          ...state.car,
          features: [
            ...state.car.features.filter(item => {
              if (item.id !== action.payload.id) {
                return item;
              }
            })
          ]
        }
      };
    default:
      return state;
  }
};
