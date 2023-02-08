import React from "react";
import Router from "../Router";
import "./App.css";
import { FontFaces } from "@nn-design-system/react-component-library";
import getFontPaths from "@nn-design-system/fonts/dist/webpack";

function App(): JSX.Element {
  return (
    <div>
      <FontFaces paths={getFontPaths()} />
      <Router />
    </div>
  );
}

export default App;
