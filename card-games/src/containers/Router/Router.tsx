import { HashRouter, Route, Routes } from "react-router-dom";
import { v4 as uuid } from "uuid";

import Deck from "../../components/cardCommon/deck/deck";

function Router(): JSX.Element {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Deck />} key={uuid()} />
      </Routes>
    </HashRouter>
  );
}

export default Router;
