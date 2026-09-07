import { Fragment, useState } from "react";
import { Input, TextArea } from "./input.jsx";
import { Button } from "./button.jsx";

export function Practical() {
  const [practIndex, setPractIndex] = useState(0);
  const [practInfos, setPractInfos] = useState([
    {
      name: "",
      position: "",
      responsibilities: "",
      date: "",
      id: crypto.randomUUID(),
    },
  ]);

  function submit(event) {
    event.preventDefault();
    setPractIndex(practIndex === 0 ? 1 : 0);
  }

  function handleInfos(index, value, input) {
    const edittedInfos = practInfos.map((c, i) => {
      if (i === index) {
        return { ...c, [value]: input };
      } else {
        return c;
      }
    });

    setPractInfos(edittedInfos);
  }

  function addPract() {
    setPractInfos([
      ...practInfos,
      {
        name: "",
        position: "",
        responsibilities: "",
        date: "",
        id: crypto.randomUUID(),
      },
    ]);
  }

  function removePract(pract) {
    const edittedInfos = practInfos.filter((i) => !Object.is(i, pract));
    setPractInfos(edittedInfos);
  }

  if (practIndex === 0) {
    return (
      <>
        <h2>Practical Experience</h2>
        {practInfos.map((pract, i) => (
          <form key={pract.id}>
            <Input
              label="Company Name"
              inputName="companyName"
              inputValue={pract.name}
              changeCallback={(event) => {
                handleInfos(i, "name", event.target.value);
              }}
            />
            <Input
              label="Position"
              inputName="companyPosition"
              inputValue={pract.position}
              changeCallback={(event) => {
                handleInfos(i, "position", event.target.value);
              }}
            />
            <TextArea
              label="Main Responsibilities"
              textName="companyResponsibilities"
              textValue={pract.responsibilities}
              changeCallback={(event) => {
                handleInfos(i, "responsibilities", event.target.value);
              }}
            />
            <Input
              label="Date from and until worked"
              inputName="companyDate"
              inputValue={pract.date}
              changeCallback={(event) => {
                handleInfos(i, "date", event.target.value);
              }}
            />
            <Button
              className="remove"
              text="-"
              callback={() => removePract(pract)}
              bType="button"
            />
          </form>
        ))}
        <Button className="add" text="+" callback={addPract} bType="button" />
        <Button
          className="submit"
          text="Submit"
          callback={submit}
          bType="submit"
        />
      </>
    );
  }
  return (
    <>
      <h2>Practical Experience</h2>
      {practInfos.map((pract) => {
        return (
          <Fragment key={pract.id}>
            <h3>
              {pract.name} <span className="company-date">{pract.date}</span>
            </h3>
            <p>{pract.position}</p>
            <p>{pract.responsibilities}</p>
          </Fragment>
        );
      })}
      <Button className="edit" text="Edit" callback={submit} bType="submit" />
    </>
  );
}
