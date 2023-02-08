import { HashRouter, Route, Routes } from "react-router-dom";
import { v4 as uuid } from "uuid";

import Stack from "../../components/cardCommon/stack/stack";

function Router(): JSX.Element {
  return (
    <HashRouter>
      <Routes>
        <Route path="" element={<Stack />} key={uuid()} />
      </Routes>
    </HashRouter>
  );
}

export default Router;
