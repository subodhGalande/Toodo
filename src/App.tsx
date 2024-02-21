import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";

import Hero from "./custom_components/Hero";

import Signin from "./custom_components/Signin";

import Dashboard from "./custom_components/Dashboard";

import Signup from "./custom_components/Signup";
import { Routes, Route } from "react-router-dom";
import PrivateRoutes from "./custom_components/PrivateRoutes";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/" element={<Hero />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
