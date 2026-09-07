import { useState } from "react";
import { Input } from "./input.jsx";
import { Button } from "./button.jsx";

export function Education() {
  const [eduIndex, setEduIndex] = useState(0);
  const [eduInfos, setEduInfos] = useState([{ name: "", study: "", date: "" }]);

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
    setEduInfos([...eduInfos, { name: "", study: "", date: "" }]);
  }

  function removeEdu(info) {
    const edittedInfos = eduInfos.filter((i) => !Object.is(i, info));
    setEduInfos(edittedInfos);
  }

  if (eduIndex === 0) {
    return (
      <>
        <h2>Education</h2>
        {eduInfos.map((info, i) => (
          <form>
            <Input
              label="School Name"
              inputName="schoolName"
              inputValue={info.name}
              changeCallback={(event) => {
                handleInfos(i, "name", event.target.value);
              }}
            />
            <Input
              label="Title of Study"
              inputName="studyTitle"
              inputValue={info.study}
              changeCallback={(event) => {
                handleInfos(i, "study", event.target.value);
              }}
            />
            <Input
              label="Date of Study"
              inputName="studyDate"
              inputValue={info.date}
              changeCallback={(event) => {
                handleInfos(i, "date", event.target.value);
              }}
            />
            <Button text="-" callback={() => removeEdu(info)} bType="button" />
          </form>
        ))}
        <Button text="+" callback={addEdu} bType="button" />
        <Button text="Submit" callback={submit} bType="submit" />
      </>
    );
  }
  return (
    <>
      <h2>Education</h2>
      {eduInfos.map((edu) => {
        return (
          <>
            <h3>{edu.name}</h3>
            <p>{edu.study}</p>
            <p>{edu.date}</p>
          </>
        );
      })}
      <Button text="Edit" callback={submit} bType="submit" />
    </>
  );
}
