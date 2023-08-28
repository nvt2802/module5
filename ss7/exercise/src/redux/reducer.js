import { FETCH_DELETE_USER_SUCCESS, FETCH_USER_SUCCESS } from "./action";

const initialState = {
  users: []
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_USER_SUCCESS:
      return { ...state, users: payload };
    case FETCH_DELETE_USER_SUCCESS:
      const tmpList = state.users.filter(
        (e) => e.id != action.payload.deleteId
      )
      return {...state,users:tmpList };
    default:
      return state;
  }
};

export default rootReducer;