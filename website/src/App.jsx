import Page1 from "./components/Page1";
import Nextpage2 from "./components/Nextpage2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";

import "./App.css";
import "./components/query.css";

function App() {
  return (
    <>
      <Page1 />
      <Nextpage2 />
      <div className="values">
        <Page3 />
        <Page4 />
      </div>

      <Page5 />
    </>
  );
}

export default App;
