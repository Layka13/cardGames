import { HashRouter, Route, Routes } from "react-router-dom";

import Memory from "../../pages/memory";
import Tetris from "../../pages/tetris/Tetris";

function Router(): JSX.Element {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Memory />} />
        <Route path="/memory" element={<Memory />} />
        <Route path="/tetris" element={<Tetris />} />
      </Routes>
    </HashRouter>
  );
}

export default Router;
