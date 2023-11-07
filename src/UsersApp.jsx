import { LoginPage } from "./auth/pages/LoginPage";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserRoutes } from "./routes/UserRoutes";
import { useContext } from "react";
import { AuthContext } from "./auth/context/AuthContext";
import { HomePage } from "./pages/HomePage";

export const UsersApp = () => {
  const { login } = useContext(AuthContext);
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      {login.isAuth ? (
        <Route path="/*" element={<UserRoutes />} />
      ) : (
        <>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  );
};
