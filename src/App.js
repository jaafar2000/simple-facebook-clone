import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Widgets from "./components/widgets/Widgets";
import Login from "./components/Login/Login";
import { myContext } from "./context/MyContext";
import { useContext } from "react";

import "./App.css";
const App = () => {
    const {user , setUser} = useContext(myContext)
  return (
    <div className="app">
      {!user ? (
        <Login/>
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
