import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage";
import Gallery from "./pages/gallery";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
