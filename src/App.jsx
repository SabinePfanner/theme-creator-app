import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import Colorform from "./Components/Form/Colorform.jsx";
import { uid } from "uid";
import { ShowCallToAction } from "./Components/Form/CallToActionMessage.jsx";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [colors, setColors] = useLocalStorageState("color", {
    defaultValue: initialColors,
  });
  const colorsListIsEmpty = colors.length === 0;

  function handleAddNewColor(newColor) {
    setColors([{ id: uid(), ...newColor }, ...colors]);
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
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <Colorform onAddColor={handleAddNewColor} />
      {colors.map((color) => {
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
