/* eslint-disable react/prop-types */
import { Navigate, Route, Routes } from "react-router-dom";
import { UsersPage } from "../pages/UsersPages";
import { Navbar } from "../components/layout/NavBar";
import { RegisterPage } from "../pages/RegisterPage";
import { UserProvider } from "../context/UserProvider";

export const UserRoutes = () => {
  return (
    <>
      <UserProvider>
        <Navbar />
        <Routes>
          <Route path="users" element={<UsersPage />} />
          <Route path="users/register" element={<RegisterPage />} />
          <Route path="users/edit/:id" element={<RegisterPage />} />
          <Route path="/*" element={<Navigate to="/users" />} />
        </Routes>
      </UserProvider>
    </>
  );
};