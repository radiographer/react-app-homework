import "./App.css";
import Name from "./components/AComponent";
import React, { useState, useEffect } from "react";

function App() {
  const [title, setTitle] = useState("1. tytuł strony.");
  const [licznik, setLicznik] = useState(2);
  // let nazwyPorzadkowe = ["Pierwszy", "Drugi", "Trzeci"];

  const onClick = () => {
    setLicznik(licznik + 1);
    //  setTitle(nazwyPorzadkowe[licznik] + ". tytuł strony.");
    setTitle(licznik + ". tytuł strony.");
  };
  useEffect(() => {
    return () => {
      alert("Teraz był efekt!!");
    };
  }, [title]);

  return (
    <div className="App">
      <Name name="Tomek" />
      <Name name="Romek" />
      <Name name="Atomek" />
      <br />
      <br />
      <br />
      <br />
      <button onClick={onClick}>Zmień tytuł strony</button>
      {title}
    </div>
  );
}

export default App;
