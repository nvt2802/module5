import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_USER, FETCH_USER } from "../redux/action";

function User() {
  const dispatch = useDispatch(); 
  const users = useSelector((state) => state.users);
  useEffect(()=>{
    getAll();
  },[]);
  const getAll = () => {
    dispatch({
      type: FETCH_USER,
  });
  }
  const deleteUser = (id) =>{
      if(window.confirm("Do you want to delete id = " + id + " ?")){
      dispatch({
        type: DELETE_USER,
        payload: id
      })
    }
      getAll();
  }
  return (
    <div>
      <h1>User list</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
              <td><button onClick={() => deleteUser(user.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default User;