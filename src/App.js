import logo from "./logo.svg";
import "./App.css";
import "./App.scss";
import Home from "./Pages/Home";
import ServiceDetails from "./Pages/ServiceDetails";
import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path={`/service-details`} element={<ServiceDetails />} /> */}
      </Routes>
    </>
  );
}

export default App;
