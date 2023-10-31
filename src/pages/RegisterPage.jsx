/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { UserForm } from "../components/UserForm";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export const RegisterPage = () => {
  // eslint-disable-next-line no-unused-vars
  const { initialUserForm, users = [] } = useContext(UserContext);
  const [userSelected, setUserSelected] = useState(initialUserForm);
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      const user = users.find((u) => u.id == id) || initialUserForm;
      setUserSelected(user);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return (
    <>
      <div className="container my-4">
        <h4>Registro de usuario</h4>
        <div className="row">
          <div className="col">
            <UserForm userSelected={userSelected} />
          </div>
        </div>
      </div>
    </>
  );
};
