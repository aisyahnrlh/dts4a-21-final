export const initialValues = {
  user: "Aisyah",
  counter: 100000,
};

export const rootReducer = (state, action) => {
  switch (action.type) {
    case "UBAH_NAMA":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return { ...state };
  }
};
