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

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrast,
      }}
    >
      <h3 className="color-card-highlight">{color.hex}</h3>
      <button onClick={handleCopy}>
        {copyModus ? "SUCCESSFULLY COPIED!" : "COPY"}
      </button>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
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
