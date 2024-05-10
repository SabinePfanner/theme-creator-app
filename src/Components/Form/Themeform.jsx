import { useState } from "react";
import { Buttons } from "./ThemeformButtons/Buttons";


export default function Themeform() {
  const [modus, setModus] = useState("default");

  function setModusAdd() {
    setModus("add");
  }
  return(

    <select onChange={handleThemeSelect} value={selectedThemeID}>
        {themes.map((theme) => (
          <option key={theme.id} value={theme.id}>
            {theme.name}
          </option>
        ))}
      </select>
      {modus === "default" && <button type="button" id="add" name="add" onClick={onAdd}>
        ADD
      </button>
    </> <Buttons onClick={onAdd} />}</>;
}
)
