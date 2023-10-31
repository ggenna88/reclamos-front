/* eslint-disable react/prop-types */
import { useContext } from "react";
import { UserModalForm } from "../components/UserModalForm";
import { UsersList } from "../components/UsersList";
import { UserContext } from "../context/UserContext";

export const UsersPage = () => {
  const { users, visibleForm, handlerOpenForm } = useContext(UserContext);
  return (
    <>
      {!visibleForm || <UserModalForm />}

      <div className="container my-4">
        <h2>UsersApp</h2>
        <div className="row">
          <div className="col">
            {visibleForm || (
              <button
                className="btn btn-primary my-2"
                onClick={handlerOpenForm}
              >
                Nuevo Usuario
              </button>
            )}

            {users.length === 0 ? (
              <div className="alert alert-warning my-4">
                No hay usuarios en el sistema.
              </div>
            ) : (
              <UsersList />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
