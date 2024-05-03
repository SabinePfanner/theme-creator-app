import "./Color.css";
import { useState, useEffect } from "react";
import { ConfirmDelete } from "./ModusConfirmDelete.jsx";
import { Buttons } from "./Buttons.jsx";
import { Edit } from "./ModusEdit.jsx";
import Colorform from "../Form/Colorform.jsx";
import { writeClipboardText } from "./CopyToClipboard.jsx";

export default function Color({ color, onDeleteColor, onUpdateColor }) {
  const [deleteModus, setDeleteModus] = useState(false);
  const [editModus, setEditModus] = useState(false);
  const [copyModus, setCopyModus] = useState(false);
  const [checkContrast, setCheckContrast] = useState("");

  function handleDelete() {
    if (deleteModus === false) {
      setDeleteModus(true);
    } else {
      onDeleteColor(color.id);
    }
  }
  function handleCancel() {
    setDeleteModus(false);
  }

  function handleEdit() {
    setEditModus(true);
  }

  function cancelEdit() {
    setEditModus(false);
  }

  function handleCopy() {
    setCopyModus(true);
    writeClipboardText(color.hex);
  }

  useEffect(() => {
    let timeoutId;
    if (copyModus) {
      timeoutId = setTimeout(() => {
        setCopyModus(false);
      }, 3000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [copyModus]);

  useEffect(() => {
    async function checkContrastStatus() {
      const response = await fetch(
        "https://www.aremycolorsaccessible.com/api/are-they",
        {
          method: "POST",
          body: JSON.stringify({ colors: [color.hex, color.contrastText] }),
          type: "application/json",
        }
      );
      const result = await response.json();
      console.log(result.overall);
      setCheckContrast(result.overall);
    }
    checkContrastStatus();
  }, [color.hex, color.contrastText]);

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-highlight">{color.hex}</h3>
      <button onClick={handleCopy}>
        {copyModus ? "SUCCESSFULLY COPIED!" : "COPY"}
      </button>
      <h4>{color.role}</h4>
      <p>Contrast Text: {color.contrastText}</p>
      <span
        className="contrastCheck"
        style={{
          backgroundColor:
            checkContrast === "Yup"
              ? "green"
              : checkContrast === "Kinda"
              ? "orange"
              : "red",
        }}
      >
        Overall Contrast Status: {checkContrast}
      </span>
      <br />
      {!deleteModus && !editModus && (
        <Buttons onClick={handleDelete} onEdit={handleEdit} />
      )}
      {deleteModus && (
        <ConfirmDelete onCancel={handleCancel} onDelete={handleDelete} />
      )}
      {editModus && (
        <>
          <Colorform
            onUpdateColor={onUpdateColor}
            defaultInput={color}
            isEdit={editModus}
            isChanged={setEditModus}
          />{" "}
          <Edit onClick={cancelEdit} />
        </>
      )}
    </div>
  );
}
