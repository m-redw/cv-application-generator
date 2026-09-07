import { useState } from "react";
import { Input } from "./components/input.jsx";
import { Button } from "./components/button.jsx";
import { GeneralInfo } from "./components/generalInfo.jsx";

function App() {
  const testCallback = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <h1>CV Generator</h1>
      <section>
        <GeneralInfo />
      </section>
      <section>
        <h2>Education</h2>
        <form>
          <Input label="School Name" inputName="schoolName" />
          <Input label="Title of Study" inputName="studyTitle" />
          <Input label="Date of Study" inputName="studyDate" />
          <Button text="+" callback={testCallback} bType="button" />
          <Button text="Submit" callback={testCallback} bType="submit" />
        </form>
      </section>
      <section>
        <h2>Practical Experience</h2>
        <form>
          <Input label="Company Name" inputName="companyName" />
          <Input label="Postion Title" inputName="positionTitle" />
          <Input
            label="Main Responsibilities"
            inputName="jobResponsibilities"
          />
          <Input
            label="Date from and until you worked for that company"
            inputName="jobDate"
          />
          <Button text="+" callback={testCallback} bType="button" />
          <Button text="Submit" callback={testCallback} bType="submit" />
        </form>
      </section>
    </>
  );
}

export default App;
