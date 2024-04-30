import { useState } from "react";

export function ColorInput({ id, defaultValue }) {
  const [input, setInput] = useState(defaultValue);

  function handleSetInput(event) {
    setInput(event.target.value);
  }

  return (
    <>
      <input
        id={id}
        name={id}
        type="text"
        value={input}
        onChange={handleSetInput}
      />
      <input type="color" value={input} onChange={handleSetInput} />
    </>
  );
}
