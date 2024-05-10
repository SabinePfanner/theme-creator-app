export function DeleteModus({ onDelete, onCancel }) {
  return (
    <>
      <button
        type="button"
        id="confirmDelete"
        name="confirmDelete"
        onClick={onDelete}
      >
        YES DELETE
      </button>
      <button type="button" id="cancel" name="cancel" onClick={onCancel}>
        CANCEL
      </button>
    </>
  );
}
