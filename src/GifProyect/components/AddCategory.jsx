import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("One punch");

  //   onSubmit es un enter en el input, cuando se genere ese evento
  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;
    //Recibe la funciøn onNewCategory donde le agregamos el valor input
    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Buscar gifs"
          value={inputValue}
          onChange={onChangeInput}
        />
      </form>
    </>
  );
};
