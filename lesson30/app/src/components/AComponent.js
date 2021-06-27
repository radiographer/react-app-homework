import React from "react";
import Buttons from "./BComponent";

function Name({ name }) {
  return (
    <>
      <h1>{name}</h1>
      <Buttons />
    </>
  );
}

export default Name;
