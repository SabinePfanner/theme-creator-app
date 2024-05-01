import { Fragment } from "react";
import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import Colorform from "./Components/Form/Colorform.jsx";
import { useState } from "react";
import { uid } from "uid";
import { ShowCallToAction } from "./Components/Form/CallToActionMessage.jsx";

function App() {
  const [colors, setColors] = useState(initialColors);
  const colorsListIsEmpty = colors.length === 0;

  function handleAddColor(newColor) {
    setColors([{ id: uid(), ...newColor }, ...colors]);
  }

  function HandleRemoveColor(id) {
    const colorsAfterDeletion = colors.filter((color) => color.id !== id);
    setColors(colorsAfterDeletion);
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <Colorform onAddColor={handleAddColor} />
      {colors.map((color) => {
        return (
          <Fragment key={color.id}>
            <Color color={color} onDeleteColor={HandleRemoveColor} />
          </Fragment>
        );
      })}
      {colorsListIsEmpty && <ShowCallToAction />}
    </>
  );
}

export default App;
