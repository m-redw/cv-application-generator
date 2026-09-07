import { useState } from "react";
import { Header1, Header2 } from "./components/headers.jsx";
import { Input } from "./components/input.jsx";
import { Button } from "./components/button.jsx";

function App() {
  const testCallback = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Header1 text="Hello, World!" />
      <Header2 text="This is going to be awesome!" />
      <form>
        <Input label="Name" inputName="name" />
        <Button text="Submit" callback={testCallback} bType="submit" />
      </form>
    </>
  );
}

export default App;
