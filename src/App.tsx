import "./App.css";

import Hero from "./custom_components/Hero";
import Navbar from "./custom_components/navbar";
import Signin from "./custom_components/signIn";

import Signup from "./custom_components/Signup";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-full max-h-screen mx-auto overflow-x-hidden overflow-y-hidden ">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
