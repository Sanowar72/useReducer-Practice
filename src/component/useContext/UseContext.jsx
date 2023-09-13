import React, { createContext, useState } from "react";
import Navbar from "../navbar/Navbar";

const UserComponent = createContext();

const UseContext = () => {
  const [userName, setUserName] = useState({ name: "sonu" });
  const deleteUserName = () => {
    setUserName(null);
  };
  const login = () => {
    setUserName({ name: "sonu" });
  };
  return (
    <>
      <UserComponent.Provider value={{ userName, deleteUserName, login }}>
        <Navbar />
      </UserComponent.Provider>
    </>
  );
};

export default UseContext;
export { UserComponent };
