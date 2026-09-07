import { useState } from "react";
import { Input } from "./input.jsx";
import { Button } from "./button.jsx";

export function GeneralInfo() {
  const [gIndex, setGIndex] = useState(0);
  const [gInfo, setGInfo] = useState({ name: "", phone: "", email: "" });

  function submit(event) {
    event.preventDefault();
    setGIndex(gIndex === 0 ? 1 : 0);
  }

  if (gIndex === 0) {
    return (
      <>
        <h2 className="gen-info">General Info</h2>
        <form>
          <Input
            label="Name"
            inputName="name"
            inputValue={gInfo.name}
            changeCallback={(event) =>
              setGInfo({ ...gInfo, name: event.target.value })
            }
          />
          <Input
            label="Email"
            inputName="email"
            inputValue={gInfo.email}
            changeCallback={(event) =>
              setGInfo({ ...gInfo, email: event.target.value })
            }
          />
          <Input
            label="Phone"
            inputName="phone"
            type="tel"
            inputValue={gInfo.phone}
            changeCallback={(event) =>
              setGInfo({ ...gInfo, phone: event.target.value })
            }
          />
          <Button
            className="submit"
            text="Submit"
            callback={submit}
            bType="submit"
          />
        </form>
      </>
    );
  }

  return (
    <>
      <h1>{gInfo.name}</h1>
      <p>
        Email: {gInfo.email} | Phone: {gInfo.phone}
      </p>
      <Button className="edit" text="Edit" callback={submit} bType="submit" />
    </>
  );
}
