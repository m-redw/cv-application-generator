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
      <form>
        <Input label="Name" inputName="name" />
        <Button text="Submit" callback={testCallback} bType="submit" />
      </form>
    </>
  );
}

export default App;
