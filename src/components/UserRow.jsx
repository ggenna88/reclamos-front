import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";

/* eslint-disable react/prop-types */
export const UserRow = ({ id, username, email }) => {
  const { handlerRemoveUser, handlerUserSelectedForm } =
    useContext(UserContext);
  return (
    <tr>
      <td>{id}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>
        <button
          className="btn btn-secondary"
          type="button"
          onClick={() =>
            handlerUserSelectedForm({
              id,
              username,
              email,
            })
          }
        >
          Update
        </button>
      </td>
      <td>
        <NavLink
          className={"btn btn-secondary btn-sm"}
          to={"/users/edit/" + id}
        >
          update route
        </NavLink>
      </td>
      <td>
        <button
          className="btn btn-danger"
          type="button"
          onClick={() => handlerRemoveUser(id)}
        >
          Remove
        </button>
      </td>
    </tr>
  );
};
