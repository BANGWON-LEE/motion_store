import { BrowserRouter, Route, Routes } from "react-router-dom";

import Wave from "./component/wave/Wave";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Wave />} path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
