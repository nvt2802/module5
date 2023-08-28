import axios from "axios";
import { DELETE_USER, FETCH_DELETE_USER_SUCCESS, FETCH_USER, FETCH_USER_SUCCESS } from "../redux/action";
import { put, takeLatest } from "redux-saga/effects";
function* getAllUsers() {
    try{
        const res = yield axios.get("http://localhost:8080/users");
      yield put({ type: FETCH_USER_SUCCESS, payload: res.data });
    }catch(e){
        console.log(e);
    }
  }
  function* deleteUser(payload){
    try{  
      console.log(payload);
      const res = yield axios.delete("http://localhost:8080/users/"+payload.payload);
      yield put({ type: FETCH_DELETE_USER_SUCCESS, payload: {deleteId: res.data.id}});
    }catch(e){
      console.log(e);
    }

  }

function* rootSaga() {
    console.log("aaaa");
    yield takeLatest(FETCH_USER, getAllUsers);
    yield takeLatest(DELETE_USER, deleteUser);
  }
  export default rootSaga;