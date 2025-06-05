import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckAuth from "./Components/CheckAuth.jsx";
import Tickets from "./Pages/Tickets.jsx";
import TicketDetails from "./Pages/Ticket.jsx"
import Signup from "./Pages/Signup.jsx"
import Login from "./Pages/Login.jsx"
import Admin from "./Pages/Admin.jsx"
import Layout from "./Components/Layout.jsx";
import CreateTicket from "./Pages/CreateTicket.jsx";
import Home from "./Pages/Home.jsx";
import Profile from "./Pages/Profile.jsx";
import UpdateProfile from "./Pages/UpdateProfile.jsx";
import SolveTickets from "./Pages/SolveTickets.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <BrowserRouter>
    <Routes>
      <Route
        element={
          <CheckAuth protectedRoute={true}>
            <Layout />
          </CheckAuth>
        }
      >
        <Route
          path="/"
          element={
              <Home />
          }
        />
        <Route
          path="/create-ticket"
          element={
              <CreateTicket />
          }
        />
        <Route
          path="/tickets/:id"
          element={          
              <TicketDetails />
          }
        />
        <Route
        path="/admin"
        element={
            <Admin />
        }
      />
      <Route
        path="/tickets"
        element={
            <Tickets />
        }
      />
      <Route
          path="/profile"
          element={
              <Profile />
          }
        />
         <Route
          path="/update-profile"
          element={
              <UpdateProfile />
          }
        />
         <Route
          path="/solve-tickets"
          element={
              <SolveTickets />
          }
        />
      </Route>
      

      <Route
        path="/login"
        element={
          <CheckAuth protectedRoute={false}>
            <Login />
          </CheckAuth>
        }
      />
      <Route
        path="/signup"
        element={
          <CheckAuth protectedRoute={false}>
            <Signup />
          </CheckAuth>
        }
      />
    </Routes>
  </BrowserRouter>
  // </StrictMode>
);
