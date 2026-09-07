import { useState } from "react";
import { Input } from "./components/input.jsx";
import { Button } from "./components/button.jsx";

function App() {
  const testCallback = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <h1>CV Generator</h1>
      <section>
        <h2>General Info</h2>
        <form>
          <Input label="Name" inputName="name" />
          <Input label="Email" inputName="email" type="email" />
          <Input label="Phone" inputName="phone" type="tel" />
          <Button text="Submit" callback={testCallback} bType="submit" />
        </form>
      </section>
    </>
  );
}

export default App;
