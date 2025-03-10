import {Routes, Route} from "react-router-dom";
import Home from "./routes/Home";
import Details from "./routes/Details";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/movies/:id" element={<Details />}></Route>
    </Routes>
  );
}
export default App;
