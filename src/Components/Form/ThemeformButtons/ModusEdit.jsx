import { useState } from "react";

export function EditModus(defaultValue, onUpdate, onCancel) {
  const [themeName, setThemeName] = useState(defaultValue);

  function handleSetThemeName(event) {
    setThemeName(event.target.value);
  }

  return (
    <>
      <label htmlFor="themeName">Theme Name:</label>
      <br />
      <input
        id="themeName"
        name="themeName"
        type="text"
        value={themeName}
        onChange={handleSetThemeName}
      ></input>
      <button type="button" id="update" name="update" onClick={onUpdate}>
        UPDATE
      </button>
      <button type="button" id="cancel" name="cancle" onClick={onCancel}>
        CANCEL
      </button>
    </>
  );
}
