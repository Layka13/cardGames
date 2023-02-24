import { HashRouter, Route, Routes } from "react-router-dom";
import { v4 as uuid } from "uuid";

import Deck from "../../components/cardCommon/deck/deck";
import Memory from "../../pages/memory";

function Router(): JSX.Element {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Deck />} key={uuid()} />
        <Route path="/memory" element={<Memory />} key={uuid()} />
      </Routes>
    </HashRouter>
  );
}

export default Router;
