import { isBrowser } from "react-device-detect";

import SobreMi from "./SobreMi/SobreMi";
import Main from "./Main.tsx/Main";

function App() {
  return (
    <>
      {isBrowser ? (
        <aside style={{ float: "left", height: "100%", width: "33vw" }}>
          <SobreMi />
        </aside>
      ) : (
        <header>
          <SobreMi />
        </header>
      )}
      <Main />
    </>
  );
}

export default App;
