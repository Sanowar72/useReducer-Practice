import React, { useContext } from "react";
import { UserComponent } from "../useContext/UseContext";

const ShowUser = () => {
  const { userName, deleteUserName, login } = useContext(UserComponent);

  return (
    <>
      <div>
        hii {userName?.name ? userName.name?.toUpperCase() : "Please login"}
      </div>
      {userName?.name ? (
        <button onClick={deleteUserName}>logout</button>
      ) : (
        <button onClick={login}>login</button>
      )}
    </>
  );
};

export default ShowUser;
