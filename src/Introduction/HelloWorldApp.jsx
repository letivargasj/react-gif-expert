import { useState } from "react";

export const HelloWorldApp = () => {
  const [fruit, setFruit] = useState("banana");
  const [country, setCountry] = useState("Mexico");

  const handleChangeFruit = (e) => {
    //const selectFruit = event.target.value;
    setFruit(e.target.value);
  };

  const handleChangeCountry = (e) => {
    //const selectFruit = event.target.value;
    setCountry(e.target.value);
  };

  return (
    <>
      <div style={{marginTop:20, display: "flex", flexDirection: "column"}}>
        <label>
          Pick a fruit:
          <select value={fruit} onChange={handleChangeFruit}>
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="orange">Orange</option>
          </select>
        </label>

        <label>
          Pick a country:
          <select value={country} onChange={handleChangeCountry}>
            <option value="Mexico">Mexico</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
          </select>
        </label>
      </div>
      <div>
        <h4>Your favorite fruit: {fruit}</h4>
        <h4>Your favorite country: {country}</h4>
      </div>
    </>
  );
};
