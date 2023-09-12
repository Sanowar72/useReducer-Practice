import data from "./UserData";

const reducer = (state, action) => {
  switch (action.type) {
    case "Reset":
      return { ...state, allUser: [] };
    case "Restore":
      return { ...state, allUser: data };
    case "Delete":
      let updateUser = state.allUser.filter(
        (user) => user.id !== action.userId
      );
      return { ...state, allUser: updateUser };
    default:
      return state;
  }
};
export default reducer;
