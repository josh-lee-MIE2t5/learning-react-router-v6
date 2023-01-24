import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Details from "./Details";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/details/:id" element={<Details />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
