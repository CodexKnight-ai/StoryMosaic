import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import Room from "./Components/Room.jsx";
import TextEditor from "./Components/TextEditor/TextEditor.jsx";


function App() {
  return (
    <div>
  
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/room/:roomId" element={<Room />} />
          {/* <Route path="timeline" element={<Timeline />} />
          <Route path="texteditor" element={<TextEditor />} />
          <Route path="events" element={<Event />} />
          <Route path="contact" element={<Contact />} />
          <Route path="eventdetails/:id" element={<EventDetails />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
