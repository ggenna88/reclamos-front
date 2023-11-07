/* eslint-disable react/prop-types */
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { EdificiosList } from "../components/EdificiosList";

export const EdificiosPage = () => {
  const { users, visibleForm, handlerOpenForm } = useContext(UserContext);
  return (
    <>

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
            <EdificiosList />
          </div>
        </div>
      </div>
    </>
  );
};
