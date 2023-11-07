import { useContext } from "react";
import { UserRow } from "./UserRow";
import { UserContext } from "../context/UserContext";

/* eslint-disable react/prop-types */
export const EdificiosList = () => {
  const { users } = useContext(UserContext);
  return (
    <table className="table table-hover table-stripped ">
      <thead>
        <tr>
          <th>#</th>
          <th>Direccion</th>
          <th>Email</th>
          <th>Update</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {users.map(({ id, username, email }) => (
          <UserRow key={id} id={id} username={username} email={email} />
        ))}
      </tbody>
    </table>
  );
};
