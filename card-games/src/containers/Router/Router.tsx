import { HashRouter, Route, Routes } from "react-router-dom";

import Deck from "../../components/cardCommon/deck/deck";
import Memory from "../../pages/memory";

function Router(): JSX.Element {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Memory />} />
        <Route path="/memory" element={<Memory />} />
      </Routes>
    </HashRouter>
  );
}

export default Router;
