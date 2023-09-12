import React, { useReducer, useState } from "react";
import data from "./UserData";
import reducer from "./ReducerState";
import "./reducer.css";

const initialState = {
  allUser: data,
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const deleteUser = (id) => {
    dispatch({ type: "Delete", userId: id });
  };
  const clearAll = () => {
    dispatch({ type: "Reset" });
  };
  const reset = () => {
    dispatch({ type: "Restore" });
  };
  return (
    <>
      <h1>All user</h1>
      {state?.allUser?.map((ele) => (
        <div key={ele.id} className="flex">
          <p className="para">{ele.name}</p>
          <button className="button" onClick={() => deleteUser(ele.id)}>
            Delete
          </button>
        </div>
      ))}
      {state?.allUser?.length > 0 ? (
        <button className="reset" onClick={clearAll}>
          clear All
        </button>
      ) : (
        <button className="reset" onClick={reset}>
          Reset
        </button>
      )}
    </>
  );
};

export default Reducer;
