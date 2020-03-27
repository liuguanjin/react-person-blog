import React from 'react';
import "antd/dist/antd.css";
import PcIndex from "./pc/index.js";
import MobileIndex from "./mobile/index.js";
import MediaQuery from "react-responsive";
function App() {
  return (
    <div className="App">
      <MediaQuery query="(min-device-width:980px)">
      		<PcIndex / >
      </MediaQuery>
      <MediaQuery query="(max-device-width:980px)">
      		<MobileIndex / >
      </MediaQuery>
    </div>
  );
}

export default App;
