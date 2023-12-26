import "./App.css";

import Hero from "./custom_components/Hero";
import Navbar from "./custom_components/navbar";
import Signin from "./custom_components/Signin";

import Dashboard from "./custom_components/Dashboard";

import Signup from "./custom_components/Signup";
import { Routes, Route } from "react-router-dom";
import PrivateRoutes from "./custom_components/PrivateRoutes";

function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-full max-h-screen mx-auto overflow-x-hidden overflow-y-hidden ">
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/" element={<Hero />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
