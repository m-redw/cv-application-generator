import { Fragment, useState } from "react";
import { Input } from "./input.jsx";
import { Button } from "./button.jsx";

export function Education() {
  const [eduIndex, setEduIndex] = useState(0);
  const [eduInfos, setEduInfos] = useState([
    { name: "", study: "", date: "", id: crypto.randomUUID() },
  ]);

  function submit(event) {
    event.preventDefault();
    setEduIndex(eduIndex === 0 ? 1 : 0);
  }

  function handleInfos(index, value, input) {
    const edittedInfos = eduInfos.map((c, i) => {
      if (i === index) {
        return { ...c, [value]: input };
      } else {
        return c;
      }
    });

    setEduInfos(edittedInfos);
  }

  function addEdu() {
    setEduInfos([
      ...eduInfos,
      { name: "", study: "", date: "", id: crypto.randomUUID() },
    ]);
  }

  function removeEdu(edu) {
    const edittedInfos = eduInfos.filter((i) => i.id !== edu.id);
    setEduInfos(edittedInfos);
  }

  if (eduIndex === 0) {
    return (
      <>
        <h2>Education</h2>
        {eduInfos.map((edu, i) => (
          <form key={edu.id}>
            <Input
              label="School Name"
              inputName="schoolName"
              inputValue={edu.name}
              changeCallback={(event) => {
                handleInfos(i, "name", event.target.value);
              }}
            />
            <Input
              label="Title of Study"
              inputName="studyTitle"
              inputValue={edu.study}
              changeCallback={(event) => {
                handleInfos(i, "study", event.target.value);
              }}
            />
            <Input
              label="Date of Study"
              inputName="studyDate"
              inputValue={edu.date}
              changeCallback={(event) => {
                handleInfos(i, "date", event.target.value);
              }}
            />
            <Button
              className="remove"
              text="-"
              callback={() => removeEdu(edu)}
              bType="button"
            />
          </form>
        ))}
        <Button className="add" text="+" callback={addEdu} bType="button" />
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
      <h2>Education</h2>
      {eduInfos.map((edu) => {
        return (
          <Fragment key={edu.id}>
            <h3>{edu.name}</h3>
            <p>{edu.study}</p>
            <p>{edu.date}</p>
          </Fragment>
        );
      })}
      <Button className="edit" text="Edit" callback={submit} bType="submit" />
    </>
  );
}
