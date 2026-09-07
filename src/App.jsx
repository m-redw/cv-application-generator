import { GeneralInfo } from "./components/generalInfo.jsx";
import { Education } from "./components/education.jsx";
import { Practical } from "./components/practical.jsx";

import "./styles/stylesheet.css";

function App() {
  return (
    <>
      <h1>CV Generator</h1>
      <div className="paper">
        <section>
          <GeneralInfo />
        </section>
        <section>
          <Education />
        </section>
        <section>
          <Practical />
        </section>
      </div>
    </>
  );
}

export default App;
