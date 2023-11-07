/* eslint-disable react/prop-types */
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { EdificiosList } from "../components/EdificiosList";
import { NavLink } from "react-router-dom";

export const HomePage = () => {
  
  return (
    <>

      <div className="container my-4">
        <h1>tengo el pito grande</h1>
        <button className="btn btn-primary my-2">
        <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
            
        </button>
      </div>
    </>
  );
};
