import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import Colorform from "./Components/Form/Colorform.jsx";
import { uid } from "uid";
import { ShowCallToAction } from "./Components/Form/CallToActionMessage.jsx";
import useLocalStorageState from "use-local-storage-state";
import { initialThemes } from "./lib/themes.js";
import { useState } from "react";

function App() {
  const [colors, setColors] = useLocalStorageState("color", {
    defaultValue: initialColors,
  });
  const colorsListIsEmpty = colors.length === 0;
  const [themes, setThemes] = useState(initialThemes);
  const [selectedThemeID, setSelectedThemeID] = useState("t1");

  const currentTheme = themes.find((theme) => theme.id === selectedThemeID);

  const currentColors = currentTheme.colors.map((colorId) =>
    colors.find((color) => color.id === colorId)
  );

  function handleAddNewColor(newColor) {
    const id = uid();
    setColors([{ id, ...newColor }, ...colors]);
    setThemes(
      themes.map((theme) =>
        theme.id === selectedThemeID
          ? { ...theme, colors: [id, ...theme.colors] }
          : theme
      )
    );
  }

  function handleUpdateColor(updatedColor) {
    setColors(
      colors.map((color) => {
        if (color.id === updatedColor.id) return updatedColor;
        return color;
      })
    );
  }

  function handleRemoveColor(id) {
    const colorsAfterDeletion = colors.filter((color) => color.id !== id);
    setColors(colorsAfterDeletion);
    setThemes(
      themes.map((theme) =>
        theme.id === selectedThemeID
          ? {
              ...theme,
              colors: theme.colors.filter((colorId) => colorId !== id),
            }
          : theme
      )
    );
  }

  function handleThemeSelect(event) {
    setSelectedThemeID(event.target.value);
  }

  function handleAddNewThemes(newTheme) {
    setThemes([...themes, { id: uid(), name: newTheme, colors: [] }]);
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <select onChange={handleThemeSelect} value={selectedThemeID}>
        {themes.map((theme) => (
          <option key={theme.id} value={theme.id}>
            {theme.name}
          </option>
        ))}
      </select>
      <button type="button" onClick={handleAddNewThemes}>
        ADD
      </button>
      <Colorform onAddColor={handleAddNewColor} />
      {currentColors.map((color) => {
        return (
          <Color
            key={color.id}
            color={color}
            onDeleteColor={handleRemoveColor}
            onUpdateColor={handleUpdateColor}
          />
        );
      })}
      {colorsListIsEmpty && <ShowCallToAction />}
    </>
  );
}

export default App;
