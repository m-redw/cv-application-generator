import { useState } from "react";
import { Header1, Header2 } from "./components/headers.jsx";
import { Input } from "./components/input.jsx";

function App() {
  return (
    <>
      <Header1 text="Hello, World!" />
      <Header2 text="This is going to be awesome!" />
      <form>
        <Input label="Name" inputName="name" />
      </form>
    </>
  );
}

export default App;
