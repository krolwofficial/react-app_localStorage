const initState = [
  {
    id: 1,
    width: 60,
    height: 60,
    background: "red",
    borderRadius: 5
  }
];

const galleryReducer = (state: any = initState, { type, payload }) => {
  switch (type) {
    case "ADD_RECTANGLE":
      return [...state, payload];
    case "REMOVE_RECTANGLE":
      return payload;
    default:
      return state;
  }
};

export default galleryReducer;
