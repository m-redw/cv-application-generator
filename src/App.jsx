import { GeneralInfo } from "./components/generalInfo.jsx";
import { Education } from "./components/education.jsx";
import { Practical } from "./components/practical.jsx";

function App() {
  return (
    <>
      <h1>CV Generator</h1>
      <section>
        <GeneralInfo />
      </section>
      <section>
        <Education />
      </section>
      <section>
        <Practical />
      </section>
    </>
  );
}

export default App;
