import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Wave from "./component/wave/Wave";
import WaterWave from "./component/lottie/WaterWave";
import MainPage from "./component/main/MainPage";

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Routes>
          <Route element={<WaterWave />} path="/" />
          {/* <Route element={<Wave />} path="/second" /> */}
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
