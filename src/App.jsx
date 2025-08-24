import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Lesson1 from "./Lesson1";
import Lesson2 from "./Lesson2";
import Lesson3 from "./Lesson3";
import Lesson4 from "./Lesson4";
import Lesson5 from "./Lesson5";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="lesson1" element={<Lesson1 />} />
        <Route path="lesson2" element={<Lesson2 />} />
        <Route path="lesson3" element={<Lesson3 />} />
        <Route path="lesson4" element={<Lesson4 />} />
        <Route path="lesson5" element={<Lesson5 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
