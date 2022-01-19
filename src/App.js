import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Shared/NavBar/NavBar";
import HomePage  from "./Pages/HomePage/HomePage";
import NotificationPage from "./Pages/NotificationPage/NotificationPage";
import JobPage from "./Pages/JobPage/JobPage";
import NetworkPage from "./Pages/Network/NetworkPage";
import MessagingPage from "./Pages/Messaging/MessagingPage";

const App = () => {
  let routes;

  routes = (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/notification" element={<NotificationPage/>} />
      <Route path="/jobs" element={<JobPage/>} />
      <Route path="/network" element={<NetworkPage/>} />
      <Route path="/messaging" element={<MessagingPage/>} />
    </Routes>
  );

  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>{routes}</main>
      </Router>
    </div>
  );
};

export default App;
