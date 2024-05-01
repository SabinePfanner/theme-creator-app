import "./Color.css";
import { useState } from "react";
import { ConfirmDelete } from "./ConfirmDelete.jsx";

export default function Color({ color, onDeleteColor }) {
  const [approval, setApproval] = useState(false);

  function handleDelete() {
    if (approval === false) {
      setApproval(true);
    } else {
      onDeleteColor(color.id);
    }
  }

  function handleCancle() {
    setApproval(false);
  }

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-highlight">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      {approval && <ConfirmDelete onClick={handleCancle} />}
      <button type="button" onClick={handleDelete}>
        DELETE
      </button>
    </div>
  );
}
