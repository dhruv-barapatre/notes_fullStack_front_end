import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/Signin";
import Home from "./pages/Home";
import Notespage from "./pages/Notespage";
import Updatenotes from "./pages/Updatenotes";
import Notesdescription from "./pages/Notesdescription";
import PrivatePage from "./PrivatePage";
import Create from "./pages/Create";
import Notesbyadmin from "./pages/Notesbyadmin";
import { SignUp } from "./pages/Signup";
const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/sign-in" element={<SignIn />}></Route>
      <Route path="/sign-up" element={<SignUp />}></Route>
      <Route path="/notes" element={
        <PrivatePage>
        <Notespage />
        </PrivatePage>}></Route>
      <Route path="/Updatenotes/:id" element={<Updatenotes />}></Route>
      <Route path="/Notesdescription/:notesid" element={<Notesdescription />}></Route>
      <Route path="/createnotes" element={<Create />}></Route> 
      <Route path="/getadminnotes" element={<Notesbyadmin />}></Route> 
      
    </Routes>
  );
};

export default Allroutes;
